import Link from "next/link";
import React from "react";
import AppBarMui from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import LinksAppBar from "./linksAppBar";

const AppBar = async () => {
    const session = await getServerSession(authOptions);
   return (
        <Box sx={{ flexGrow: 1 }} mb={2}>
        <AppBarMui position="static" >
            <Toolbar sx={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
               <LinksAppBar session={session}/>
            </Toolbar>
        </AppBarMui>
        </Box>
  );
};

export default AppBar;
