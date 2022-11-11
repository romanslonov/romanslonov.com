import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const dir = join(process.cwd(), 'posts')

export const getPostsSlugs = () => {
  return fs.readdirSync(dir);
}

export const getPostBySlug = (slug: string, fields: string[] = []) => {
  const _slug = slug.replace(/\.md$/, '');
  const path = join(dir, `${_slug}.md`);
  const contents = fs.readFileSync(path, 'utf8');
  const { data, content } = matter(contents);

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = _slug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items;
}

export const getAllPosts = (fields: string[] = []) => {
  const slugs = getPostsSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}