import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, tel, message } = await req.json();

  if (!name || !email || !message) {
    return Response.json({ result: false, error: 'Champs manquants' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'Portfolio <contact@emiliengiraud.fr>',
    to: 'emiliengiraud.free@gmail.com',
    subject: `Nouveau message de ${name}`,
    html: `
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      ${tel ? `<p><strong>Téléphone :</strong> ${tel}</p>` : ''}
      <p><strong>Message :</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
    `,
  });

  if (error) {
    return Response.json({ result: false, error }, { status: 500 });
  }

  return Response.json({ result: true });
}
