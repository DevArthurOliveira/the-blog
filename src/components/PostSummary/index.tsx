import { formatDatetime, formatDistanceToNow } from '@/utils/format-datetime';
import { PostHeading } from '../PostHeading';

type PostSummaryProps = {
  postHeading: 'h1' | 'h2';
  postLink: string;
  title: string;
  createdAt: string;
  excerpt: string;
};

export function PostSummary({
  postHeading,
  postLink,
  title,
  createdAt,
  excerpt,
}: PostSummaryProps) {
  return (
    <div className='flex flex-col gap-4 justify-center'>
      <time
        className='text-slate-600 text-sm/tight'
        dateTime={createdAt}
        title={formatDistanceToNow(createdAt)}
      >
        {formatDatetime(createdAt)}
      </time>
      <PostHeading url={postLink} as={postHeading}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
}
