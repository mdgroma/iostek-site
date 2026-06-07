import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface Body {
  nome?: string;
  azienda?: string;
  email?: string;
  telefono?: string;
  tipo?: string;
  messaggio?: string;
}

export async function POST(req: Request): Promise<NextResponse> {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Corpo non valido" }, { status: 400 });
  }

  const nome = body.nome?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const messaggio = body.messaggio?.trim() ?? "";
  if (!nome || !email || !messaggio) {
    return NextResponse.json({ error: "Campi obbligatori mancanti" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "marco@iostek.com";
  const from = process.env.CONTACT_FROM || "iOStek <noreply@iostek.com>";
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY mancante");
    return NextResponse.json({ error: "Configurazione mancante" }, { status: 500 });
  }

  const text =
    `Nome: ${nome}\n` +
    `Azienda: ${body.azienda?.trim() || "—"}\n` +
    `Email: ${email}\n` +
    `Telefono: ${body.telefono?.trim() || "—"}\n` +
    `Tipo: ${body.tipo?.trim() || "—"}\n\n` +
    messaggio;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Richiesta dal sito — ${body.azienda?.trim() || nome}`,
      text,
    });
    if (error) {
      console.error("[contact] resend error", error);
      return NextResponse.json({ error: "Invio non riuscito" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] exception", e);
    return NextResponse.json({ error: "Invio non riuscito" }, { status: 500 });
  }
}
