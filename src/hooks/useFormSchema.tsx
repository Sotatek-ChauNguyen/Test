import { TypeOf, ZodSchema, ZodTypeDef } from 'zod';

import type { UseFormProps as UseHookFormProps } from 'react-hook-form';
import { useForm as useHookForm } from 'react-hook-form';
import { useMemo } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

type UseFormWithSchemaProps<S extends ZodSchema<any, ZodTypeDef>> = {
  schema: S;
  options?: Omit<UseHookFormProps<TypeOf<S>>, 'resolver'>;
};

export const useFormSchema = <S extends ZodSchema<any, ZodTypeDef>>({
  schema,
  options
}: UseFormWithSchemaProps<S>) => {
  const form = useHookForm({
    mode: 'onChange',
    ...options,
    // cache defaultValues to prevent re-render
    defaultValues: useMemo(
      () => options?.defaultValues || undefined,
      [options?.defaultValues]
    ),
    resolver: zodResolver(schema)
  });
  const { formState } = form;
  const { isDirty, dirtyFields } = formState;

  const isDirtyFields = isDirty && Object.values(dirtyFields).length > 0;

  return { ...form, isDirtyFields };
};
