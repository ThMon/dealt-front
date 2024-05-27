import React from 'react';
import TextFieldMui from '@mui/material/TextField';

type Props = {
    label: string
    value: string,
    defaultValue?: string,
    type?: string,
    sx?: any,
    multiline?: boolean,
    rows?: number,
    onChange: (e:any)=>void,
}

const TextField = ({
    label,
    value,
    defaultValue,
    type,
    sx,
    multiline,
    rows,
    onChange
}: Props) => {
    return (
        <TextFieldMui 
            id="outlined-basic" 
            label={label}
            variant="outlined"
            value={value}
            type={type ?? 'text'}
            defaultValue={defaultValue ?? ''}
            onChange={onChange}
            sx={sx}
            multiline={multiline ?? false}
            rows={rows}
        />
    );
};

export default TextField;