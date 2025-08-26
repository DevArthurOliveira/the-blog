'use server';

import { revalidateTag } from 'next/cache';

export async function revalidateExampleAction() {
  console.log('Estou em uma server action');

  revalidateTag('posts');
}
