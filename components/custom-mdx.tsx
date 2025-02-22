import { cn } from '@/lib/cn';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import { codeToHtml } from 'shiki';

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{
        h1: ({ children, ...props }) => (
          <h1 className="text-2xl font-bold mt-8 mb-4 scroll-mt-3" {...props}>
            {children}
          </h1>
        ),
        h2: ({ children, ...props }) => (
          <h2 className="text-xl font-semibold mt-6 mb-3 scroll-mt-3" {...props}>
            {children}
          </h2>
        ),
        h3: ({ children, ...props }) => (
          <h3 className="text-lg font-semibold mt-6 mb-3 scroll-mt-3" {...props}>
            {children}
          </h3>
        ),
        p: ({ children, ...props }) => (
          <p className="mb-4 text-neutral-600 dark:text-neutral-400" {...props}>
            {children}
          </p>
        ),
        ul: ({ children, ...props }) => (
          <ul className="mb-4 list-disc pl-6" {...props}>
            {children}
          </ul>
        ),
        li: ({ children, ...props }) => (
          <li className="mb-1 text-neutral-600 dark:text-neutral-400" {...props}>
            {children}
          </li>
        ),
        strong: ({ children, ...props }) => (
          <b className="font-semibold text-neutral-900 dark:text-neutral-200" {...props}>
            {children}
          </b>
        ),
        a: ({ children, ...props }) => (
          <a
            className="font-semibold text-neutral-900 underline underline-offset-4 dark:text-neutral-200"
            {...props}
          >
            {children}
          </a>
        ),
        blockquote: ({ children, ...props }) => (
          <blockquote
            className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700 dark:border-zinc-600 dark:text-zinc-300"
            {...props}
          >
            {children}
          </blockquote>
        ),
        pre: ({ children, ...props }) => (
          <div
            className="bg-neutral-900 mb-4 border text-sm border-neutral-800 font-mono p-4 rounded-lg overflow-x-auto"
            {...props}
          >
            {children}
          </div>
        ),
        code: async ({ children, className, ...props }) => {
          const isInline = !children?.toString().includes('\n');
          const code = children?.toString() || '';
          const lang = className?.replace('language-', '') || 'plaintext';

          if (isInline) {
            return (
              <code
                className="font-mono text-neutral-900 whitespace-nowrap dark:text-neutral-200 dark:bg-neutral-900 border dark:border-neutral-800 px-1.5 py-0.5 text-xs font-semibold rounded-lg"
                {...props}
              >
                {children}
              </code>
            );
          }
          const html = await codeToHtml(code, {
            lang,
            theme: 'vesper',
            transformers: [
              {
                pre(node) {
                  delete node.properties.style;
                },
              },
            ],
          });

          return (
            <div
              dangerouslySetInnerHTML={{ __html: html }}
              className={cn(`text-sm`, className)}
              {...props}
            ></div>
          );
        },
        ...(props.components || {}),
      }}
    />
  );
}
