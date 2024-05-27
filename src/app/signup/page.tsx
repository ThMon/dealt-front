"use client"
import React, { useEffect, useState } from 'react';
import TextField from '@/components/design-system/atoms/TextField';
import Button from '@/components/design-system/atoms/Button';
import { signup } from '../api/user';
import Form from '@/components/design-system/molecules/form';
import Typography from '@/components/design-system/atoms/Typography';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { Box } from '@mui/material';

function Signup(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSuccess, setIsSuccess] = useState(false)
    const [isAlert, setIsAlert] = useState(false)

    const onSubmit = async (e: any)=>{
        e.preventDefault()
        setIsAlert(false)
        const createdUser = await signup({
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password
        })

        if(createdUser.status === 200) {
            setIsSuccess(true)
        }
        setIsAlert(true)
    }

    return (
        <Box>
            {isAlert && <Alert icon={<CheckIcon fontSize="inherit" />} severity={isSuccess ? "success" : "error"}>
                {isSuccess ? "Vous avez été enregistré" : "Un problème est survenur"}
            </Alert>}
            <Typography variant="h4" sx={{marginBottom: 4}}>Signup</Typography>
            <Form>
                <TextField 
                    label="Prénom"
                    value={firstName}  
                    onChange={(e: any)=>{
                        setFirstName(e.target.value);
                    }}
                    sx={{mb: 4}}
                />

                <TextField 
                    label="Nom"
                    value={lastName}  
                    onChange={(e: any)=>{
                        setLastName(e.target.value);
                    }}
                    sx={{mb: 4}}
                />
                <TextField 
                    label="Email"
                    value={email}  
                    onChange={(e: any)=>{
                        setEmail(e.target.value);
                    }}
                    sx={{mb: 4}}
                />
                <TextField 
                    label="Mot de passe"
                    value={password}  
                    onChange={(e: any)=>{
                        setPassword(e.target.value);
                    }}
                    type="password"
                    sx={{mb: 4}}
                />
                <Button 
                    label="S'enregistrer"
                    onClick={onSubmit}
                />
            </Form>
            
        </Box>
    );
};

export default Signup;

