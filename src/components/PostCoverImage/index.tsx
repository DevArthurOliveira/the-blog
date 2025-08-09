import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

type PostCoverImageProps = {
  postLink: React.ComponentProps<typeof Link>;
  postImage: React.ComponentProps<typeof Image>;
};

export function PostCoverImage({ postLink, postImage }: PostCoverImageProps) {
  return (
    <Link
      {...postLink}
      className={clsx(
        'w-full',
        'h-full',
        'overflow-hidden',
        'rounded-xl',
        postLink.className,
      )}
    >
      <Image
        className={clsx(
          'w-full',
          'h-full',
          'object-cover',
          'object-center',
          'group-hover:scale-105',
          'transition',
          postImage.className,
        )}
        {...postImage}
        alt={postImage.alt}
      />
    </Link>
  );
}
