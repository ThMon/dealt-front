import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';;

const StyledForm = styled(FormControl)({
    border: '2px solid #3f50b5',
    borderRadius: 8,
    padding: 24,
    alignItems: 'space-around'
})

export default function Form(props: { onSubmit?: (e: any)=>void ,children: React.ReactNode }) {
  return (
    <StyledForm
        onSubmit={props.onSubmit}
        sx={{borderColor: "primary"}}
    >
        <>{props.children}</>
    </StyledForm>
  );
}