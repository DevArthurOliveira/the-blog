'use server';

import { asyncDelay } from '@/utils/async-delay';

type LoginActionState = {
  username: string;
  error: string;
};

export async function loginAction(state: LoginActionState, formData: FormData) {
  await asyncDelay(3000);

  if (!(formData instanceof FormData)) {
    return {
      username: '',
      error: 'Dados inválidos',
    };
  }

  const username = formData.get('username')?.toString() || '';
  const password = formData.get('passwrod')?.toString() || '';

  const isUsernameValid = username === process.env.LOGIN_USER;
  const isPasswordValid = password === process.env.LOGIN_PASS;

  return {
    username: '',
    error: '',
  };
}
