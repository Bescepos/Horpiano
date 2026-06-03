import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validation/newsletter.schema";
import { sendEmail } from "@/lib/email/send";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = newsletterSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const result = await sendEmail({
    source: "newsletter",
    replyTo: parsed.data.email,
    subject: "New newsletter subscriber",
    fields: { Email: parsed.data.email },
  });

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
