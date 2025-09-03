'use client';

import { Button } from '@/components/Button';
import { InputCheckBox } from '@/components/InputCheckBox';
import { InputText } from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import { useState } from 'react';
import { ImageUploader } from '../ImageUploader';

export function ManagePostForm() {
  const [contentValue, setContentValue] = useState('');
  return (
    <form action='' className='mb-16'>
      <div className='flex flex-col gap-6'>
        <div>
          <InputText labelText='Digite seu nome' />
        </div>
        <ImageUploader />
        <div>
          <InputCheckBox labelText='Nome' placeholder='Digite seu nome' />
        </div>
        <MarkdownEditor
          labelText='Conteúdo'
          disabled={false}
          textAreaName='content'
          value={contentValue}
          setValue={setContentValue}
        />
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
