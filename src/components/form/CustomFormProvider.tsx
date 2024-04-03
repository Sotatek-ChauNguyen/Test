import { useEffect, useId, type ComponentProps, useMemo } from 'react';
import {
  FormProvider,
  type FieldValues,
  type SubmitHandler,
  type UseFormReturn
} from 'react-hook-form';

interface CustomFormProviderProps<TFormValues extends FieldValues>
  extends Omit<ComponentProps<'form'>, 'onSubmit'> {
  isDisabled?: boolean;
  form: UseFormReturn<TFormValues>;
  onSubmit?: SubmitHandler<TFormValues>;
  shouldResetOnUnmount?: boolean;
  containerClassName?: string;
}

export function CustomFormProvider<TFormValues extends FieldValues>(
  props: CustomFormProviderProps<TFormValues>
) {
  const {
    form,
    onSubmit,
    isDisabled = false,
    children,
    id,
    shouldResetOnUnmount = true,
    containerClassName,
    className,
    ...restProps
  } = props;
  const uniqueId = useId();

  const { clearErrors, reset, handleSubmit } = form;
  // const isMutating = !!useIsMutating();

  const disableForm = useMemo(() => isDisabled, []);

  useEffect(
    () =>
      function cleanup() {
        if (!shouldResetOnUnmount) return;
        // reset on unmount
        clearErrors();
        reset();
      },
    [clearErrors, reset, shouldResetOnUnmount]
  );

  return (
    <FormProvider {...form}>
      <form
        noValidate
        id={id ?? uniqueId}
        style={{ width: '100%', height: '100%' }}
        onSubmit={onSubmit ? handleSubmit(onSubmit) : e => e.preventDefault()}
        className={containerClassName}
        {...restProps}
      >
        <fieldset
          className={className}
          style={{
            border: 'none',
            cursor: disableForm ? 'not-allowed' : 'pointer'
          }}
          disabled={disableForm}
        >
          {children}
        </fieldset>
      </form>
    </FormProvider>
  );
}
