import React from 'react';
import TypographyMui  from '@mui/material/Typography';
import { styled } from '@mui/material/styles';;

const StylesTitle = styled(TypographyMui)({
    display: 'block',
    textAlign: 'center'
})

type Props = {
    variant: any
    children: string,
    sx?: any
}

const Typography = ({
    variant,
    children,
    sx
}: Props) => {
    return (
        <StylesTitle variant={variant} sx={sx}>
            {children}
        </StylesTitle>
    );
};

export default Typography;