import clsx from 'clsx';
import Link from 'next/link';

type PostHeadProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
};

export function PostHeading({ children, url, as: Tag = 'h2' }: PostHeadProps) {
  const headingClassesMap = {
    h1: 'text-2xl/tight font-extrabold sm:text-4xl',
    h2: 'text-2xl/tight font-bold',
  };

  return (
    <Tag className={clsx(headingClassesMap[Tag])}>
      <Link className='hover:text-slate-700' href={url}>
        {children}
      </Link>
    </Tag>
  );
}
