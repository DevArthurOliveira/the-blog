'use client';

import clsx from 'clsx';
import { Button } from '../Button';

type DialogProps = {
  isVisible?: boolean;
  title: string;
  content: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  disabled: boolean;
};

export function Dialog({
  isVisible = false,
  title,
  content,
  onCancel,
  onConfirm,
  disabled,
}: DialogProps) {
  if (!isVisible) return null;

  function handleCancel() {
    if (disabled) return;

    onCancel();
  }

  return (
    <div
      className={clsx(
        'fixed inset-0 z-50 text-center',
        'bg-black/50 backdrop-blur-xs',
        'flex items-center justify-center',
      )}
      onClick={handleCancel}
    >
      <div
        className={clsx(
          'bg-slate-100 rounded-2xl p-6 max-w-2xl mx-6',
          'flex flex-col gap-2',
          'shadow-lg shadow-black/50',
        )}
        role='dialog'
        aria-modal={true}
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'
        onClick={e => e.stopPropagation()}
      >
        <h3 id='dialog-title' className='text-2l font-bold'>
          {title}
        </h3>
        <div id='dialog-description'>{content}</div>

        <div className='flex items-center justify-around'>
          <Button
            variant='ghost'
            autoFocus
            onClick={handleCancel}
            disabled={disabled}
          >
            Cancelar
          </Button>
          <Button variant='default' disabled={disabled} onClick={onConfirm}>
            Confirmar
          </Button>
        </div>
      </div>
    </div>
  );
}
