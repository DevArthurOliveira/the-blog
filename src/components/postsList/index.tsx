import { postRepository } from '@/repositories/post';
import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {posts.map(post => {
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
            <div className='flex flex-col gap-4 justify-center'>
              <time
                className='text-slate-600 text-sm/tight'
                dateTime={post.createdAt}
              >
                {post.createdAt}
              </time>
              <PostHeading url={postLinks}>{post.title}</PostHeading>
              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
