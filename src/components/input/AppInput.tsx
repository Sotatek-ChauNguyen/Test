import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  InputProps
} from '@mui/material';
import { forwardRef } from 'react';

interface AppInputProps extends InputProps {
  label?: string;
  errorMsg?: string;
  name: string;
}

export const AppInput = forwardRef(
  (props: AppInputProps, ref?: React.Ref<HTMLInputElement>) => {
    const { label, errorMsg, name, ...restProps } = props;
    return (
      <FormControl>
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <Input
          ref={ref}
          id={name}
          aria-describedby={`${name}-helper-text`}
          error={!!errorMsg}
          {...restProps}
        />
        {errorMsg && (
          <FormHelperText id={`${name}-helper-text`}>{errorMsg}</FormHelperText>
        )}
      </FormControl>
    );
  }
);
