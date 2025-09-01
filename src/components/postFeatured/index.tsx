import ErrorMessage from '../ErrorMessage';
import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';
import { findAllPublicPostsCached } from '@/lib/post/queries/public';

export async function PostFeatured() {
  const posts = await findAllPublicPostsCached();

  if (posts.length <= 0)
    return (
      <ErrorMessage
        contentTitle='Ops!'
        content='Ainda não criamos nenhum post.'
      />
    );

  const post = posts[0];

  const postLinks = `/post/${post.slug}`;

  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        postLink={{
          href: postLinks,
        }}
        postImage={{
          alt: post.title,
          width: '1200',
          height: '720',
          src: post.coverImageUrl,
          priority: true,
        }}
      />
      <PostSummary
        createdAt={post.createdAt}
        title={post.title}
        excerpt={post.excerpt}
        postLink={postLinks}
        postHeading='h1'
      />
    </section>
  );
}
