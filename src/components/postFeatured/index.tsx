import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export function PostFeatured() {
  const slug = 'qualquer coisa';
  const postLinks = `/post/${slug}`;

  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        postLink={{
          href: postLinks,
        }}
        postImage={{
          alt: 'Alt Image',
          width: '1200',
          height: '720',
          src: '/images/bryen_6.png',
          priority: true,
        }}
      />
      <div className='flex flex-col gap-4 justify-center'>
        <time className='text-slate-600 text-sm/tight' dateTime='2025-04-05'>
          05/04/2025
        </time>
        <PostHeading url={postLinks} as='h1'>
          Recebendo titulo
        </PostHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          blanditiis quis obcaecati itaque ipsum perspiciatis ratione magnam
          nisi doloremque quaerat vero libero quam at fugit, quas repudiandae
          incidunt beatae repellat.
        </p>
      </div>
    </section>
  );
}
