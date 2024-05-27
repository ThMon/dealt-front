"use client"
import React, { useEffect, useState } from 'react';
import TextField from '@/components/design-system/atoms/TextField';
import Button from '@/components/design-system/atoms/Button';
import Form from '@/components/design-system/molecules/form';
import Typography from '@/components/design-system/atoms/Typography';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/material/Box';
import { createTodo } from '@/app/api/todo';
import { useRouter } from "next/navigation";


export default function CreateTodoForm({session}: any) {
    const router = useRouter();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [isSuccess, setIsSuccess] = useState(false)
    const [isAlert, setIsAlert] = useState(false)

    const onSubmit = async (e: any)=>{
        e.preventDefault()
        setIsAlert(false)
        const createdTodo = await createTodo({
            name,
            description,
            user_id: session?.user._id
          },
          session?.backendTokens.accessToken
        )

        if(createdTodo.status === 200) {
          setIsSuccess(true);
          router.push('/');
          router.refresh()

        }

        setIsAlert(true)
    }

    return (
        <Box>
            {isAlert && <Alert icon={<CheckIcon fontSize="inherit" />} severity={isSuccess ? "success" : "error"}>
                {isSuccess ? "Vous avez été enregistré" : "Un problème est survenur"}
            </Alert>}
            <Typography variant="h4" sx={{marginBottom: 4}}>Ajoutez une tâche</Typography>
            <Form>
                <TextField 
                    label="Nom de la tâche"
                    value={name}  
                    onChange={(e: any)=>{
                        setName(e.target.value);
                    }}
                    sx={{mb: 4}}
                />

                <TextField 
                    label="Description"
                    value={description}  
                    onChange={(e: any)=>{
                      setDescription(e.target.value);
                    }}
                    sx={{mb: 4}}
                    multiline={true}
                    rows={3}
                />
                
                <Button 
                    label="S'enregistrer"
                    onClick={onSubmit}
                />
            </Form> 
        </Box>
    );
  
}
