import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Handle Farcaster frame interactions
    const buttonIndex = body.untrustedData?.buttonIndex || 1;
    
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    
    // Redirect to the main app based on button clicked
    let redirectUrl = baseUrl;
    
    switch (buttonIndex) {
      case 1:
        redirectUrl = `${baseUrl}?view=rights`;
        break;
      case 2:
        redirectUrl = `${baseUrl}?view=emergency`;
        break;
      default:
        redirectUrl = baseUrl;
    }

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="${baseUrl}/og-image.png" />
          <meta property="fc:frame:button:1" content="Know Your Rights" />
          <meta property="fc:frame:button:1:action" content="link" />
          <meta property="fc:frame:button:1:target" content="${baseUrl}?view=rights" />
          <meta property="fc:frame:button:2" content="Emergency Mode" />
          <meta property="fc:frame:button:2:action" content="link" />
          <meta property="fc:frame:button:2:target" content="${baseUrl}?view=emergency" />
          <title>PocketRights - Know Your Rights</title>
        </head>
        <body>
          <h1>PocketRights</h1>
          <p>Know your rights, instantly.</p>
          <script>
            window.location.href = '${redirectUrl}';
          </script>
        </body>
      </html>
    `;

    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error) {
    console.error('Frame API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${baseUrl}/og-image.png" />
        <meta property="fc:frame:button:1" content="Get Started" />
        <meta property="fc:frame:button:1:action" content="post" />
        <meta property="fc:frame:button:1:target" content="${baseUrl}/api/frame" />
        <title>PocketRights - Know Your Rights</title>
      </head>
      <body>
        <h1>PocketRights</h1>
        <p>Know your rights, instantly.</p>
      </body>
    </html>
  `;

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
