import { formatApp } from "@/utils"
import { Box, Input, Stack, TextField, styled } from "@mui/material"

export const HomePage = () => {
  const data = formatApp()
  return (
    <StyledContainer>
      <TextField placeholder="Mincy" label="Text field" />
    </StyledContainer>
  )
}

const StyledContainer = styled(Stack)({
  backgroundColor: 'transparent',
})