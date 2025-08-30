import PostListAdmin from '@/components/postListAdmin/page';
import { SpinLoader } from '@/components/SpinLoader';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Post Admin',
};

export default async function AdminPostPage2() {
  return (
    <Suspense fallback={<SpinLoader />}>
      <PostListAdmin />
    </Suspense>
  );
}
