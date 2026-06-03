import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact.schema";
import { sendEmail } from "@/lib/email/send";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  // Honeypot, silently accept and drop bot submissions.
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const result = await sendEmail({
    source: "contact",
    replyTo: parsed.data.email,
    subject: parsed.data.subject || "New contact message",
    fields: {
      Name: parsed.data.name,
      Email: parsed.data.email,
      Subject: parsed.data.subject,
      Message: parsed.data.message,
    },
  });

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
