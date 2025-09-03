import clsx from 'clsx';
import { useId } from 'react';

type InputCheckBoxProps = {
  labelText?: string;
  type?: 'checkbox';
} & React.ComponentProps<'input'>;

export function InputCheckBox({
  labelText = '',
  type = 'checkbox',
  ...props
}: InputCheckBoxProps) {
  const id = useId();

  return (
    <div className='flex items-center gap-2'>
      <input
        {...props}
        type={type}
        id={id}
        className={clsx(
          'w-4 h-4 outline-none focus:ring-2 focus:ring-blue-500',
          props.className,
        )}
      />
      {labelText && (
        <label htmlFor={id} className='text-base'>
          {labelText}
        </label>
      )}
    </div>
  );
}
