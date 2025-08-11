import clsx from 'clsx';

export default function NotFoundPage() {
  return (
    <div
      className={clsx(
        'min-h-[320px] bg-slate-900 text-slate-100',
        'mb-16 p-8 rounded-xl',
        'flex items-center justify-center',
        'text-center',
      )}
    >
      <div className='flex flex-col justify-center items-center '>
        <h1 className='font-bold text-4xl p-2'>404</h1>
        <p className='text-[20px]'>Essa página não existe neste site.</p>
      </div>
    </div>
  );
}
