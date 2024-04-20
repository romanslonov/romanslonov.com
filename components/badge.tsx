interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="border text-xs font-medium text-black dark:text-white rounded-full dark:border-neutral-700 pl-1.5 pr-2 py-0.5 inline-flex gap-1 items-center">
      {children}
    </span>
  );
}
