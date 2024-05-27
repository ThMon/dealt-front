"use client";
import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Modal,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TodoQuery } from "@/lib/types/todo-types";
import { deleteTodo } from "@/app/api/todo";
import { styled } from "@mui/material/styles";

type TodoListProps = {
  todos: TodoQuery[];
  token: string;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  textAlign: "center",
};

const TodoItem = styled(ListItem)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  borderBottom: "1px solid #e0e0e0",
});

const ActionButtons = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

export default function TodoList({ todos, token }: TodoListProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<TodoQuery | null>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = async (id: string) => {
    await deleteTodo(id, token);
    router.refresh();
    handleClose();
  };

  return (
    <>
      {selectedTodo && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style }}>
            <Typography variant="h6" id="child-modal-title">
              Supprimer la tâche : {selectedTodo?.name} ?
            </Typography>
            <Typography id="child-modal-description">
              Attention, la tâche sera définitivement supprimée.
            </Typography>
            <Box mt={2}>
              <Button variant="contained" color="primary" onClick={handleClose}>
                Annuler
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() =>
                  selectedTodo ? handleDelete(selectedTodo._id) : null
                }
                sx={{ ml: 2 }}
              >
                Supprimer
              </Button>
            </Box>
          </Box>
        </Modal>
      )}
      <List
        sx={{
          width: "100%",
          margin: "auto",
          bgcolor: "background.paper",
          padding: 8,
        }}
      >
        {todos.map((todo) => (
          <TodoItem key={todo._id} disableGutters>
            <Box>
              <Typography variant="h6">{todo.name}</Typography>
              <Typography variant="body2">{todo.description}</Typography>
            </Box>
            <ActionButtons>
              <IconButton
                onClick={() => {
                  setSelectedTodo(todo);
                  handleOpen();
                }}
                aria-label="delete"
                color="error"
              >
                <DeleteIcon />
              </IconButton>
              <Link href={`/todo/update/${todo._id}`} passHref>
                <IconButton aria-label="edit" color="primary">
                  <EditIcon />
                </IconButton>
              </Link>
            </ActionButtons>
          </TodoItem>
        ))}
      </List>
    </>
  );
}
