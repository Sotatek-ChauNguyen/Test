import { formatApp } from '@/utils';
import { Box, Input, Stack, TextField, styled } from '@mui/material';
import { LoginForm } from '../auth';

export const HomePage = () => {
  const data = formatApp();
  return (
    <StyledContainer>
      <LoginForm />
    </StyledContainer>
  );
};

const StyledContainer = styled(Stack)({
  backgroundColor: 'transparent'
});
