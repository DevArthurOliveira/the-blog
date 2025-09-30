import { ManagePostForm } from '@/components/admin/ManagePostForm';
import { SpinLoader } from '@/components/SpinLoader';
import { makePublicPostFromDb } from '@/dto/post/dto';
import { findPostByIdAdmin } from '@/lib/post/queries/admin';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Editar post',
};

type AdminPostIdPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminPostIdPage({
  params,
}: AdminPostIdPageProps) {
  const { id } = await params;

  const post = await findPostByIdAdmin(id).catch();

  if (!post) return notFound();

  const publicPost = makePublicPostFromDb(post);

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-xl font-extrabold'>Editar post</h1>
      <Suspense fallback={<SpinLoader className='m-h-20 mb-16' />}>
        <ManagePostForm publicPost={publicPost} />
      </Suspense>
    </div>
  );
}
