import clsx from 'clsx';
import { FilesIcon, FileTextIcon, HouseIcon } from 'lucide-react';
import Link from 'next/link';

export function MenuAdmin() {
  const navClasses = clsx(
    'bg-slate-900 text-slate-100 rounded-lg',
    'flex flex-col',
    'sm:flex-row sm:flex-wrap',
    'mb-8',
  );
  const linkClasses = clsx(
    '[&_svg]:w-[16px] [&_svg]:h-[16px] px-4',
    'flex items-center justify-start gap-2',
    'transition hover:bg-slate-800',
    'h-10 rounded-lg',
    'shrink-0',
  );

  return (
    <nav className={navClasses}>
      <a className={linkClasses} href='\' target='_blanck'>
        <HouseIcon />
        Home
      </a>

      <Link className={linkClasses} href='\admin\post'>
        <FileTextIcon />
        Posts
      </Link>
    </nav>
  );
}
