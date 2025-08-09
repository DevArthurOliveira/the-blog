import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostFeatured } from '@/components/postFeatured';
import { PostsList } from '@/components/postsList';
import { SpinLoader } from '@/components/SpinLoader';

import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer className='text-center text-6xl font-bold py-8'>Rodape</footer>
    </Container>
  );
}
