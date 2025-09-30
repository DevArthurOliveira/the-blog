'use server';

import { publicPost } from '@/dto/post/dto';

type CreatePostAcionState = {
  formState: publicPost;
  errors: string[];
};

export async function createPostAction(
  prevState: CreatePostAcionState,
  formData: FormData,
): Promise<CreatePostAcionState> {
  const title = formData.get('title')?.toString() || '';
  return {
    formState: { ...prevState.formState, title },
    errors: [],
  };
}
