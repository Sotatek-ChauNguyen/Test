import { z } from 'zod';

export const getStringRequiredField = (msg?: string) =>
  z
    .string({ required_error: `${msg ?? 'This field'} is required` })
    .trim()
    .min(1, `${msg ?? 'This field'} is required`);
