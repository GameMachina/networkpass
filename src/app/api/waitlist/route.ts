import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      console.log(`[Waitlist] Email received (no GOOGLE_SCRIPT_URL set): ${email}`);
      return NextResponse.json({ success: true });
    }

    // Google Apps Script returns 302 after executing doPost.
    // Use redirect: "manual" so we can treat the 302 as success
    // (the redirect destination is just a result page we don't need).
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ email }),
      redirect: "manual",
    });

    // 302 = script executed, redirecting to output (success)
    // 200 = direct success
    if (response.status === 302 || response.ok) {
      return NextResponse.json({ success: true });
    }

    // If we get 401/403, the script isn't deployed as "Anyone"
    if (response.status === 403 || response.status === 401) {
      console.error(
        `Google Script returned ${response.status}. Ensure the Apps Script is deployed as: Execute as 'Me', Who has access 'Anyone'.`
      );
    }

    throw new Error(`Google Script responded with ${response.status}`);
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Failed to save email" },
      { status: 500 }
    );
  }
}
