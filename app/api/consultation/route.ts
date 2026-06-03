import { NextResponse } from "next/server";
import { consultationSchema } from "@/lib/validation/consultation.schema";
import { sendEmail } from "@/lib/email/send";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = consultationSchema.safeParse(json);
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
    source: "consultation",
    replyTo: parsed.data.email,
    subject: "New consultation request",
    fields: {
      Name: parsed.data.name,
      Email: parsed.data.email,
      "Book Title": parsed.data.bookTitle,
      Genre: parsed.data.genre,
      "Service Needed": parsed.data.service,
      "Project Description": parsed.data.description,
    },
  });

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
