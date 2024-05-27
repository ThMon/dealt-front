import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import CreateTodoForm from '@/components/todo/createTodoForm';

export default async function CreateTodo(){
    const session: any = await getServerSession(authOptions);

    return (
        <CreateTodoForm session={session} />
    );
};


