import Link from 'next/link';

export function Footer() {
  return (
    <footer className='pb-12 text-center  '>
      <p>
        Copyright © 2025 - <Link href='/'>The Blog</Link>
      </p>
    </footer>
  );
}
