'use client';

import clsx from 'clsx';

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
          <button
            className={clsx(
              'bg-slate-300 hover:bg-slate-400 transition text-slate-950',
              'py-2 px-4 rounded-2xl cursor-pointer',
              'flex items-center justify-center',
              'disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed',
            )}
            autoFocus
            onClick={handleCancel}
            disabled={disabled}
          >
            Cancelar
          </button>
          <button
            className={clsx(
              'bg-blue-500 hover:bg-blue-600 transition text-blue-50',
              'py-2 px-4 rounded-2xl cursor-pointer',
              'flex items-center justify-center',
              'disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed',
            )}
            onClick={onConfirm}
            disabled={disabled}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
