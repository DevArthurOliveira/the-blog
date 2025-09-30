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
  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ['Dados inválidos'],
    };
  }

  const formDataToObj = Object.fromEntries(formData.entries());
  return {
    formState: prevState.formState,
    errors: [],
  };
}
