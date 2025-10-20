import { ManagePostForm } from '@/components/admin/ManagePostForm';
import { SpinLoader } from '@/components/SpinLoader';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Criar post',
};

export default async function AdminPostNewPage() {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-xl font-extrabold'>Criar post</h1>
      <Suspense fallback={<SpinLoader className='m-h-20 mb-16' />}>
        <ManagePostForm mode='create' />
      </Suspense>
    </div>
  );
}
