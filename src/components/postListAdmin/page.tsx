import { deletePostAction } from '@/actions/post/delete-post-action';
import { findAllPostAdmin } from '@/lib/post/queries/admin';
import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';
import Link from 'next/link';
import { DeletePostButton } from '../admin/DeletePostButton';

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

            <DeletePostButton id={post.id} title={post.title} />
          </div>
        );
      })}

      <div
        className={clsx(
          'fixed inset-0 z-50 text-center',
          'bg-black/50 backdrop-blur-xs',
          'flex items-center justify-center',
        )}
      >
        <div
          className={clsx(
            'bg-slate-100 rounded-2xl p-6 max-w-2xl mx-6',
            'flex flex-col gap-2',
            'shadow-lg shadow-black/50',
          )}
        >
          <h3 className='text-2l font-bold'>Titulo</h3>
          <p> tem certeza que deja excluir esse post?</p>

          <div className='flex items-center justify-around'>
            <button
              className={clsx(
                'bg-slate-300 hover:bg-slate-400 transition text-slate-950',
                'py-2 px-4 rounded-2xl cursor-pointer',
                'flex items-center justify-center',
              )}
              autoFocus
            >
              Cancelar
            </button>
            <button
              className={clsx(
                'bg-blue-500 hover:bg-blue-600 transition text-blue-50',
                'py-2 px-4 rounded-2xl cursor-pointer',
                'flex items-center justify-center',
              )}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
