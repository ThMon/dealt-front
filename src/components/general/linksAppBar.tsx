"use client"
import React from 'react';
import Link from "next/link";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { usePathname } from "next/navigation"; // Utilisez ceci pour obtenir le chemin actuel


const LinksAppBar = ({session}: any) => {
    const path = usePathname();
    return (
        <>
            {!session ? <>
                <Link  href={"/signin"}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textDecoration: path === '/signin' ? 'underline' : 'none' }} mr={2}>
                        SignIn
                    </Typography>
                </Link>
                <Link  href={"/signup"}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textDecoration: path === '/signup' ? 'underline' : 'none' }} ml={2}>
                        SignUp
                    </Typography>
                </Link>    
                </>
                :
                <>
                <Link  href={"/"}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textDecoration: path === '/' ? 'underline' : 'none' }} ml={2}>
                        Dashboard
                    </Typography>
                </Link> 
                <Link  href={"/signout"}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1,textDecoration: path === '/signout' ? 'underline' : 'none' }} ml={2}>
                        SignOut
                    </Typography>
                </Link> 
            </>}
        </>
    );
};

export default LinksAppBar;