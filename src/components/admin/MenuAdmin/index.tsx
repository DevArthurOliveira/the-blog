'use client';

import clsx from 'clsx';
import {
  CircleXIcon,
  FileTextIcon,
  HouseIcon,
  MenuIcon,
  PlusIcon,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navClasses = clsx(
    'bg-slate-900 text-slate-100 rounded-lg',
    'flex flex-col',
    'sm:flex-row sm:flex-wrap',
    'mb-8',
    !isOpen && 'h-10',
    !isOpen && 'overflow-hidden',
    'sm:overflow-visible sm:h-auto',
  );
  const linkClasses = clsx(
    '[&_svg]:w-[16px] [&_svg]:h-[16px] px-4',
    'flex items-center justify-start gap-2',
    'transition hover:bg-slate-800',
    'h-10 rounded-lg cursor-pointer',
    'shrink-0',
  );

  const openCloseBtnClasses = clsx(
    linkClasses,
    'text-blue-100 italic sm:hidden',
  );

  return (
    <nav className={navClasses}>
      <button
        className={openCloseBtnClasses}
        onClick={() => setIsOpen(s => !s)}
      >
        {!isOpen && (
          <>
            <MenuIcon />
            Menu
          </>
        )}

        {isOpen && (
          <>
            <CircleXIcon />
            Fechar
          </>
        )}
      </button>

      <a className={linkClasses} href='\' target='_blanck'>
        <HouseIcon />
        Home
      </a>

      <Link className={linkClasses} href='\admin\post'>
        <FileTextIcon />
        Posts
      </Link>
      <Link className={linkClasses} href='\admin\post\new'>
        <PlusIcon />
        Criar post
      </Link>
    </nav>
  );
}
