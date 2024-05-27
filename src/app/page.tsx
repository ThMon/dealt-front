import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getTodosByUser } from "./api/todo";
import { Box, Grid, } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import TodoList from "@/components/dashboard/todoList";


export default async function Home() {
  const session: any = await getServerSession(authOptions);
  const todos = await getTodosByUser(session?.user._id, session?.backendTokens.accessToken)

  return (
    <Box>
      <Box>
        <Typography variant="h5">
          Dashboard
        </Typography>
        <Typography variant="body1">
          Bonjour {session?.user.firstname}
        </Typography>
        <Typography variant="body1">
          Voici vos tâche à réaliser
        </Typography>
        <Link href={'/todo/create'}>Ajouter une tache</Link>
        <Grid container spacing={2} mt={2}>
          <TodoList todos={todos.data} token={session?.backendTokens.accessToken}/>
        </Grid>
      </Box>
   </Box>
  );
}
