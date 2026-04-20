interface Env {
  POSTMARK_SERVER_TOKEN: string;
}

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!),
  );

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname !== '/api/contact') {
      return json(404, { error: 'Not found' });
    }
    if (request.method !== 'POST') {
      return json(405, { error: 'Method not allowed' });
    }

    let payload: ContactPayload;
    try {
      payload = await request.json();
    } catch {
      return json(400, { error: 'Invalid JSON' });
    }

    const name = typeof payload.name === 'string' ? payload.name.trim() : '';
    const email = typeof payload.email === 'string' ? payload.email.trim() : '';
    const message = typeof payload.message === 'string' ? payload.message.trim() : '';

    if (!name || !email || !message) {
      return json(400, { error: 'All fields are required' });
    }
    if (!EMAIL_RE.test(email)) {
      return json(400, { error: 'Invalid email' });
    }
    if (name.length > 200 || email.length > 200 || message.length > 5000) {
      return json(400, { error: 'Field too long' });
    }

    if (!env.POSTMARK_SERVER_TOKEN) {
      console.error('POSTMARK_SERVER_TOKEN is not configured');
      return json(500, { error: 'Server misconfigured' });
    }

    const postmarkHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Postmark-Server-Token': env.POSTMARK_SERVER_TOKEN,
    };

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');

    try {
      const notify = await fetch('https://api.postmarkapp.com/email', {
        method: 'POST',
        headers: postmarkHeaders,
        body: JSON.stringify({
          From: 'talk@syks.co',
          To: 'talk@syks.co',
          ReplyTo: email,
          Subject: `[Website Contact] ${name}`,
          TextBody: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          HtmlBody: `
            <h2>New contact form submission</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <hr/>
            <p>${safeMessage}</p>
          `,
        }),
      });

      if (!notify.ok) {
        const errorText = await notify.text();
        console.error(`Postmark notify failed [${notify.status}]: ${errorText}`);
        return json(502, { error: 'Failed to send message' });
      }

      const notifyData = (await notify.json()) as { MessageID?: string };

      const confirm = await fetch('https://api.postmarkapp.com/email', {
        method: 'POST',
        headers: postmarkHeaders,
        body: JSON.stringify({
          From: 'talk@syks.co',
          To: email,
          Subject: 'Thank you for contacting SYKS',
          TextBody: `Hi ${name},\n\nThank you for reaching out to us. We've received your message and will get back to you shortly.\n\nBest regards,\nThe SYKS Team`,
          HtmlBody: `
            <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 24px; color: #021d39;">
              <h2 style="font-size: 22px; font-weight: 600; margin: 0 0 20px;">Thank you, ${safeName}.</h2>
              <p style="font-size: 15px; line-height: 1.6; color: #021d39cc; margin: 0 0 16px;">
                We've received your message and a member of our team will be in touch shortly.
              </p>
              <p style="font-size: 15px; line-height: 1.6; color: #021d39cc; margin: 0 0 32px;">
                In the meantime, feel free to explore our infrastructure at <a href="https://syks.co" style="color: #2158a8; text-decoration: none;">syks.co</a>.
              </p>
              <p style="font-size: 14px; color: #021d3980; margin: 0;">
                Best regards,<br/>The SYKS Team
              </p>
            </div>
          `,
        }),
      });

      if (!confirm.ok) {
        const errorText = await confirm.text();
        console.error(`Postmark confirm failed [${confirm.status}]: ${errorText}`);
      }

      return json(200, { success: true, messageId: notifyData.MessageID });
    } catch (err) {
      console.error('Contact form error:', err);
      return json(500, { error: 'Unknown error' });
    }
  },
};
