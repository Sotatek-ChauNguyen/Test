import { z } from 'zod';
import { TypeOf } from 'zod';
import { getStringRequiredField } from './common.validation';

export const loginSchema = z.object({
  username: getStringRequiredField('Username'),
  password: getStringRequiredField('Password')
});

export type LoginFormType = TypeOf<typeof loginSchema>;
