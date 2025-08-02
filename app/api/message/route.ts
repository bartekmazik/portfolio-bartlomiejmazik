import prisma from "../../lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, message } = body;

  if (!email || !message) {
    return new Response(
      JSON.stringify({ message: "Sending failed! Try again." }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const oneMinuteAgo = new Date(Date.now() - 60 * 1000);

  const recentMessages = await prisma.message.count({
    where: {
      email,
      createdAt: {
        gte: oneMinuteAgo,
      },
    },
  });

  // 🚫 Limit exceeded
  if (recentMessages >= 5) {
    return new Response(
      JSON.stringify({ message: "Rate limit exceeded. Try again later." }),
      {
        status: 429,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  await prisma.message.create({
    data: {
      email,
      message,
    },
  });

  return new Response(JSON.stringify({ message: "Message sent! ✅" }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
