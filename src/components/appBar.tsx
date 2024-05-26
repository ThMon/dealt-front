import Link from "next/link";
import React from "react";
import AppBarMui from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const AppBar = async () => {
    const session = await getServerSession(authOptions);

   return (
        <Box sx={{ flexGrow: 1 }} mb={2}>
        <AppBarMui position="static" >
            <Toolbar sx={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
                {!session ? <>
                <Link  href={"/signin"}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} mr={1}>
                        SignIn
                    </Typography>
                </Link>
                <Link  href={"/signup"}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} ml={1}>
                        SignUp
                    </Typography>
                </Link>    
                </>
                :
                <>
                <Link  href={"/"}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} ml={1}>
                        Dashboard
                    </Typography>
                </Link> 
                <Link  href={"/signout"}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} ml={1}>
                        SignOut
                    </Typography>
                </Link> 
                </>}
            </Toolbar>
        </AppBarMui>
        </Box>
  );
};

export default AppBar;
