import React from 'react';
import ButtonMui from '@mui/material/Button';

type Props = {
    label: string,
    onClick?: (e: any)=>void,
}

const TextField = ({
    label,
    onClick
}: Props) => {
    return (
        <ButtonMui 
            variant="contained" 
            type="submit"
            onClick={onClick}
        >
            {label}
        </ButtonMui>
    );
};

export default TextField;