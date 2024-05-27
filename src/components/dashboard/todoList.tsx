'use client';
import {useState} from 'react';
import { Box, Button, ButtonBase, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TodoQuery } from "@/lib/types/todo-types";
import { deleteTodo } from "@/app/api/todo";
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';;


type TodoListProps = {
  todos: TodoQuery[],
  token: string
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const StyledDrawer = styled(Drawer)({
  width: 400
})

export default function TodoList({ todos, token }: TodoListProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<TodoQuery | null>(null)
  
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async (id: string) => {
    const deletedTodo = await deleteTodo(id, token);
    router.refresh()
    handleClose()
  };

  

  return (
    <>
      {selectedTodo && <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{...style }}>
            <h2 id="child-modal-title">Supprimer la tache: {selectedTodo?.name} ?</h2>
            <p id="child-modal-description">
              Attention, la tâche sera définitivement supprimée
            </p>
            <Button onClick={handleClose}>Fermer La Modal</Button>
            <Button onClick={()=> selectedTodo ? handleDelete(selectedTodo._id) : null}>Supprimer</Button>

          </Box>
        </Modal>}
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map((todo: any) => (
          <ListItem key={todo._id} disableGutters>
            <div>
              <ButtonBase>
                <ListItemText primary={todo.name} />
              </ButtonBase>
              <Typography variant='body2'>{todo.description}</Typography>
            </div>
            <div>
              <ButtonBase 
                onClick={() => {
                  setSelectedTodo(todo)
                  handleOpen()
                }}
                sx={{width: 40}}
              >
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
              </ButtonBase>
              <Link href={`/todo/update/${todo._id}`} passHref>
                <IconButton aria-label="edit">
                  <EditIcon />
                </IconButton>
              </Link>
            </div>
          </ListItem>
        ))}
      </List>
    </>
  );
}