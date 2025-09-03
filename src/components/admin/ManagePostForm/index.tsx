'use client';

import { Button } from '@/components/Button';
import { InputCheckBox } from '@/components/InputCheckBox';
import { InputText } from '@/components/InputText';

export function ManagePostForm() {
  return (
    <form action='' className='mb-16'>
      <div className='flex flex-col gap-6'>
        <div>
          <InputText labelText='Digite seu nome' />
        </div>
        <div>
          <InputCheckBox labelText='Nome' placeholder='Digite seu nome' />
        </div>
        <div>
          <InputText labelText='Digite seu Sobrenome' />
        </div>
        <div>
          <InputText labelText='Digite seu Sobrenome' disabled />
        </div>
      </div>
      <div className='mt-4'>
        <Button type='submit'>Enviar</Button>
      </div>
    </form>
  );
}
