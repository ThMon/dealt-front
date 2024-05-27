import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import UpdateTodoForm from "@/components/todo/updateTodoForm";
import { getTodoById } from "@/app/api/todo";

type Props = {
  params: {
    id: string;
  };
};

export default async function UpdateTodo(props: Props) {
  const session: any = await getServerSession(authOptions);
  const todo = await getTodoById(
    props.params.id,
    session?.backendTokens.accessToken,
  );

  return (
    <UpdateTodoForm session={session} id={props.params.id} todo={todo.data} />
  );
}
