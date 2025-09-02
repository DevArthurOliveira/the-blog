import clsx from 'clsx';

type ButtonVariants = 'default' | 'ghost' | 'danger';
type ButtonSizes = 'sm' | 'md' | 'lg';

type ButtonProps = {
  variant?: ButtonVariants;
  size?: ButtonSizes;
} & React.ComponentProps<'button'>;

export function Button({
  variant = 'default',
  size = 'md',
  ...props
}: ButtonProps) {
  const buttonVariants: Record<ButtonVariants, string> = {
    default: clsx('bg-blue-600 text-blue-100'),
    ghost: clsx('bg-slate-200 text-slate-600'),
    danger: clsx('bg-red-600 text-red-100'),
  };

  const buttonSizes: Record<ButtonSizes, string> = {
    sm: clsx(''),
    md: clsx(''),
    lg: clsx(''),
  };

  const ButtonClasses = clsx(buttonVariants[variant], buttonSizes[size]);

  return <button className={ButtonClasses} {...props}></button>;
}
