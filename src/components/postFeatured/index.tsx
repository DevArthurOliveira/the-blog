import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';

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
      <PostSummary
        createdAt='2025-04-08T00:24:38'
        title='Rotina matinal de pessoas altamente eficazes'
        excerpt='O Next.js também é uma boa escolha para quem quer se preocupar com performance e SEO.'
        postLink={postLinks}
        postHeading='h1'
      />
    </section>
  );
}
