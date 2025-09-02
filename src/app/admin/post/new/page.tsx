import { Button } from '@/components/Button';

export const dynamic = 'force-static';

export default async function AdminPostNewPage() {
  return (
    <div className='py-16 text-6xl'>
      <Button variant='default' size='sm'>
        Confirm
      </Button>
      <Button variant='ghost' size='md'>
        Delete
      </Button>
      <Button variant='danger' size='lg'>
        Danger
      </Button>
    </div>
  );
}
