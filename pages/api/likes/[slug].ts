import { createHash } from 'crypto';
import { prisma } from 'lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const ip = req.headers['x-forwarded-for'] ?? '0.0.0.0';

    const slug = z.string().parse(req.query.slug);

    const currentUserId = createHash('md5')
      .update(ip + process.env.IP_SALT, 'utf-8')
      .digest('hex');

    const sessionId = `${slug}__${currentUserId}`;

    switch (req.method) {
      case 'GET': {
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

        res.json({
          likes: post?.likes || 0,
          isCurrentUserLiked: user?.like,
        });

        break;
      }

      case 'POST': {
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

        res.json({
          likes: post?.likes || 0,
          isCurrentUserLiked: user?.like,
        });

        break;
      }

      default: {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).send('Method Not Allowed');
      }
    }
  } catch (err: any) {
    console.error(err.message);

    res.status(500).json({
      statusCode: 500,
      message: err.message,
    });
  }
}
