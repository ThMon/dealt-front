"use client"
import React from 'react';
import { signOut } from 'next-auth/react';
import Button from "@/components/design-system/atoms/Button";
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const Signout = () => {

    return (
        <Box sx={{textAlign: "center"}}>
            <Typography variant="body1"  mb="8">Êtes-vous sûr de vouloir nous quitter ?</Typography>
            <Button
                label='Se déconnecter'
                onClick={()=> signOut({ callbackUrl: 'http://localhost:3000/signin' })}
            />
        </Box>
    );
};

export default Signout;