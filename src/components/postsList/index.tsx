import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';
import { FindAllPublicPosts } from '@/lib/post/queries';

export async function PostsList() {
  const posts = await FindAllPublicPosts();

  return (
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {posts.slice(1).map(post => {
        const postLinks = `/post/${post.slug}`;

        return (
          <div className='flex flex-col group gap-4 ' key={post.id}>
            <PostCoverImage
              postLink={{
                href: postLinks,
              }}
              postImage={{
                alt: post.title,
                width: '1200',
                height: '720',
                src: post.coverImageUrl,
              }}
            />
            <PostSummary
              createdAt={post.createdAt}
              title={post.title}
              excerpt={post.excerpt}
              postLink={postLinks}
              postHeading='h2'
            />
          </div>
        );
      })}
    </div>
  );
}
