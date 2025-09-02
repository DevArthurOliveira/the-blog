import { Button } from '@/components/Button';
import { BugIcon } from 'lucide-react';

export const dynamic = 'force-static';

export default async function AdminPostNewPage() {
  return (
    <div>
      <div className='py-16 flex gap-4 items-center'>
        <Button variant='default' size='sm'>
          <BugIcon /> Confirm
        </Button>
        <Button variant='ghost' size='md'>
          <BugIcon /> Delete
        </Button>
        <Button variant='danger' size='lg'>
          <BugIcon /> Danger
        </Button>
      </div>

      <div className='py-16 flex gap-4 items-center'>
        <Button variant='default' size='sm' disabled>
          <BugIcon /> Confirm
        </Button>
        <Button variant='ghost' size='md' disabled>
          <BugIcon /> Delete
        </Button>
        <Button variant='danger' size='lg' disabled>
          <BugIcon /> Danger
        </Button>
      </div>
    </div>
  );
}
