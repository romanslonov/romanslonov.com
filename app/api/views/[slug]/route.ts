import { type NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function GET(request: NextRequest, props: Props) {
  const params = await props.params;
  try {
    const slug = z.string().parse(params.slug);

    const post = await prisma.post.findUnique({
      where: { slug },
    });

    return Response.json({ views: post?.views || 1 });
  } catch (error: any) {
    console.error(error.message);

    return Response.json(
      {
        statusCode: 500,
        message: error.message,
      },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest, props: Props) {
  const params = await props.params;
  try {
    const slug = z.string().parse(params.slug);

    const post = await prisma.post.upsert({
      where: { slug },
      create: { slug, views: 1 },
      update: { views: { increment: 1 } },
    });

    return Response.json({ views: post?.views || 1 });
  } catch (error: any) {
    console.error(error.message);

    return Response.json(
      {
        statusCode: 500,
        message: error.message,
      },
      { status: 500 },
    );
  }
}
