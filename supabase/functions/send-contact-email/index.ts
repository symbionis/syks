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

    const response = await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': POSTMARK_SERVER_TOKEN,
      },
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

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Postmark API error [${response.status}]: ${errorData}`);
    }

    const data = await response.json();
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
