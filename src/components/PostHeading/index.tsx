import clsx from 'clsx';
import Link from 'next/link';

type PostHeadProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
};

export function PostHeading({ children, url, as: Tag = 'h2' }: PostHeadProps) {
  const headingClassesMap = {
    h1: 'text-2xl/tight sm:text-4xl',
    h2: 'text-2xl/tight sm:text-4xl',
  };

  const comomClasses = 'font-extrabold';
  return (
    <Tag className={clsx(headingClassesMap[Tag], comomClasses)}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
