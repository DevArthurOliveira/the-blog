'use client';

import { deletePostAction } from '@/actions/post/delete-post-action';
import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';
import { useTransition } from 'react';

type DeletePostButtonProps = {
  id: string;
  title: string;
};

export function DeletePostButton({ title, id }: DeletePostButtonProps) {
  const [isPending, startTransition] = useTransition();

  async function handleClick() {
    startTransition(async () => {
      const result = await deletePostAction(id);
      alert(`${result}`);
    });
  }

  return (
    <button
      className={clsx(
        'cursor-pointer transition',
        'hover:scale-110',
        'disabled:text-red-700 disabled:cursor-not-allowed',
      )}
      aria-label={`Excluir post:${title}`}
      title='Exlcuir post'
      onClick={handleClick}
      disabled={isPending}
    >
      <Trash2Icon />
    </button>
  );
}
