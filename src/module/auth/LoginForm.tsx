import { CustomFormProvider } from '@/components/form';
import { AppInput } from '@/components/input';
import { useFormSchema } from '@/hooks';
import { LoginFormType, loginSchema } from '@/validation';
import { Button, Stack } from '@mui/material';
import { Controller } from 'react-hook-form';

export const LoginForm = () => {
  const form = useFormSchema({
    schema: loginSchema,
    options: {
      mode: 'onChange'
    }
  });

  const { control } = form;

  const handleSubmitForm = (data: LoginFormType) => {};

  return (
    <div>
      <CustomFormProvider
        form={form}
        onSubmit={handleSubmitForm}
      >
        <Stack
          spacing={2}
          width="50%"
        >
          <Controller
            control={control}
            name="username"
            render={({ field, fieldState: { error } }) => (
              <AppInput
                label="Username"
                errorMsg={error?.message}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field, fieldState: { error } }) => (
              <AppInput
                label="Password"
                errorMsg={error?.message}
                type="password"
                {...field}
              />
            )}
          />
          <Button
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
        </Stack>
      </CustomFormProvider>
    </div>
  );
};
