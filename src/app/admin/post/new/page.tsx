import { Button } from '@/components/Button';
import { InputText } from '@/components/InputText';
import { BugIcon } from 'lucide-react';

export const dynamic = 'force-static';

export default async function AdminPostNewPage() {
  return (
    <div className='flex flex-col gap-6'>
      <div>
        <InputText labelText='Nome' placeholder='Digite seu nome' />
      </div>
      <div>
        <InputText
          disabled
          labelText='Sobrenome'
          placeholder='Digite seu sorenome'
        />
      </div>
    </div>
  );
}
