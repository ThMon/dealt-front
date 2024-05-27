import React from 'react';
import ButtonMui from '@mui/material/Button';

type Props = {
    label: string,
}

const ButtonLink = ({
    label,
}: Props) => {
    return (
        <ButtonMui 
            variant="contained" 
            size="small"
        >
            {label}
        </ButtonMui>
    );
};

export default ButtonLink;