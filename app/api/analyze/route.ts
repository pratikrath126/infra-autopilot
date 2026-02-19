import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { incident } = await req.json();

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "arcee-ai/trinity-large-preview:free",
        "messages": [
          {
            "role": "system",
            "content": "You are InfraPilot AI, an autonomous infrastructure remediation agent. Analyze the provided infrastructure incident and suggest a concrete remediation plan."
          },
          {
            "role": "user",
            "content": `Incident: ${incident}`
          }
        ]
      })
    });

    const data = await response.json();
    return NextResponse.json({ diagnosis: data.choices[0].message.content });
  } catch (error) {
    console.error("Analysis API Error:", error);
    return NextResponse.json({ error: "Failed to perform AI diagnosis." }, { status: 500 });
  }
}
