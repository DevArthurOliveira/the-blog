import { ZodFormattedError } from 'zod';

export function getZodErrorMessages<T>(error: ZodFormattedError<T>): string[] {
  return Object.values(error)
    .map(field => {
      if (
        typeof field === 'object' &&
        field !== null &&
        '_errors' in field &&
        Array.isArray(field._errors)
      ) {
        return field._errors;
      }
      return [];
    })
    .flat()
    .filter(Boolean);
}
