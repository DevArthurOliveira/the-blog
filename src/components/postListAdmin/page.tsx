import { findAllPostAdmin } from '@/lib/post/queries/admin';
import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';
import Link from 'next/link';

export default async function PostListAdmin() {
  const posts = await findAllPostAdmin();

  return (
    <div className='mb-16'>
      {posts.map(post => {
        return (
          <div
            className={clsx(
              'py-2 px-2',
              !post.published && 'bg-slate-300',
              'flex gap-2 items-center justify-between',
            )}
            key={post.id}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>

            {!post.published && (
              <span className='text-xs italic text-slate-500'>
                (Não publicado)
              </span>
            )}

            <button
              className={clsx('cursor-pointer transition', 'hover:scale-110')}
              aria-label={`Excluir post:${post.title}`}
              title='Exlcuir post'
            >
              <Trash2Icon />
            </button>
          </div>
        );
      })}
    </div>
  );
}
