"use client"
import React, { ReactNode } from 'react';
import TypographyMui  from '@mui/material/Typography';
import { styled } from '@mui/material/styles';;

const StylesTitlePage = styled(TypographyMui)({
    display: 'block',
    textAlign: 'center'
})

type Props = {
    children: ReactNode,
}

const TitlePage = ({
    children,
}: Props) => {
    return (
        <StylesTitlePage variant={'h4'} sx={{marginBottom: 4}}>
            {children}
        </StylesTitlePage>
    );
};

export default TitlePage;