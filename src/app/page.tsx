import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/postsList';
import { SpinLoader } from '@/components/SpinLoader';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <Link href='#' className='w-full h-full overflow-hidden rounded-xl'>
          <Image
            className='w-full h-full group-hover:scale-105 object-cover object-center transition'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Titulo post'
            priority
          />
        </Link>
        <div className='flex flex-col gap-4 justify-center'>
          <time className='text-slate-600 text-sm/tight' dateTime='2025-04-05'>
            05/04/2025
          </time>
          <PostHeading url='#' as='h1'>
            Recebendo titulo
          </PostHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            blanditiis quis obcaecati itaque ipsum perspiciatis ratione magnam
            nisi doloremque quaerat vero libero quam at fugit, quas repudiandae
            incidunt beatae repellat.
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer className='text-center text-6xl font-bold py-8'>Rodape</footer>
    </Container>
  );
}
