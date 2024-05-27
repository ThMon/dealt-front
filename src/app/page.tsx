import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getTodosByUser } from "./api/todo";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import TodoList from "@/components/dashboard/todoList";
import TitlePage from "@/components/design-system/atoms/TitlePage";
import ButtonLink from "@/components/design-system/atoms/ButtonLink";

export default async function Home() {
  const session: any = await getServerSession(authOptions);
  const todos = await getTodosByUser(
    session?.user._id,
    session?.backendTokens.accessToken,
  );

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box>
        <Box pl={4} pr={4}>
          <TitlePage>Dashboard</TitlePage>
          <Typography variant="body1">
            Bonjour {session?.user.firstname}, Bienvenue sur votre tableau de
            bord !<br /> Découvrez ci-dessous les tâches qui vous attendent :
          </Typography>
          <Box
            mb={1}
            mt={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link href={"/todo/create"}>
              <ButtonLink label="Ajouter une tâche" />
            </Link>
          </Box>
        </Box>
        <Box>
          <Grid container spacing={2} mt={2}>
            <TodoList
              todos={todos.data}
              token={session?.backendTokens.accessToken}
            />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
