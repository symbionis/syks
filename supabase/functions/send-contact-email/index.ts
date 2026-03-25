import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const POSTMARK_SERVER_TOKEN = Deno.env.get('POSTMARK_SERVER_TOKEN');
    if (!POSTMARK_SERVER_TOKEN) {
      throw new Error('POSTMARK_SERVER_TOKEN is not configured');
    }

    const postmarkHeaders = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Postmark-Server-Token': POSTMARK_SERVER_TOKEN,
    };

    // 1. Send notification to SYKS team
    const notifyResponse = await fetch('https://api.postmarkapp.com/email', {
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
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr/>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        `,
      }),
    });

    if (!notifyResponse.ok) {
      const errorData = await notifyResponse.text();
      throw new Error(`Postmark API error [${notifyResponse.status}]: ${errorData}`);
    }

    // 2. Send confirmation to the submitter
    await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: postmarkHeaders,
      body: JSON.stringify({
        From: 'talk@syks.co',
        To: email,
        Subject: 'Thank you for contacting SYKS',
        TextBody: `Hi ${name},\n\nThank you for reaching out to us. We've received your message and will get back to you shortly.\n\nBest regards,\nThe SYKS Team`,
        HtmlBody: `
          <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 24px; color: #021d39;">
            <h2 style="font-size: 22px; font-weight: 600; margin: 0 0 20px;">Thank you, ${name}.</h2>
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

    const data = await notifyResponse.json();
    return new Response(JSON.stringify({ success: true, messageId: data.MessageID }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
