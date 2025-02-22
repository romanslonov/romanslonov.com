import { createHash } from 'crypto';
import { prisma } from '@/lib/prisma';
import { type NextRequest } from 'next/server';
import { z } from 'zod';

interface Props {
  params: Promise<{ slug: string }>;
}

function getIpAddress(request: NextRequest) {
  const headers = new Headers(request.headers);

  return headers.get('x-forwarded-for') ?? '0.0.0.0';
}

export async function GET(request: NextRequest, props: Props) {
  const params = await props.params;
  try {
    const ip = getIpAddress(request);

    const slug = z.string().parse(params.slug);

    const currentUserId = createHash('md5')
      .update(ip + process.env.IP_SALT, 'utf-8')
      .digest('hex');

    const sessionId = `${slug}__${currentUserId}`;

    const [user, post] = await Promise.all([
      prisma.session.findUnique({
        where: {
          id: sessionId,
        },
      }),

      prisma.post.findUnique({
        where: { slug },
      }),
    ]);

    return Response.json({
      likes: post?.likes || 0,
      isCurrentUserLiked: user?.like,
    });
  } catch (err: any) {
    console.error(err.message);

    return Response.json(
      {
        statusCode: 500,
        message: err.message,
      },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest, props: Props) {
  const params = await props.params;
  try {
    const ip = getIpAddress(request);

    const slug = z.string().parse(params.slug);

    const currentUserId = createHash('md5')
      .update(ip + process.env.IP_SALT, 'utf-8')
      .digest('hex');

    const sessionId = `${slug}__${currentUserId}`;

    const [post, user] = await Promise.all([
      prisma.post.update({
        where: { slug },
        data: {
          likes: {
            increment: 1,
          },
        },
      }),

      prisma.session.create({
        data: {
          id: sessionId,
          like: true,
        },
      }),
    ]);

    return Response.json({
      likes: post?.likes || 0,
      isCurrentUserLiked: user?.like,
    });
  } catch (err: any) {
    console.error(err.message);

    return Response.json(
      {
        statusCode: 500,
        message: err.message,
      },
      { status: 500 },
    );
  }
}
