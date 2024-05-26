export type TodoQuery = {
    name: string;
    description: string;
    user_id: string;
    __v: number;
};
  
export type createTodoDto= {
    name: string,
    description: string;
    user_id: string
}

export type updateTodoDto= {
    name: string,
    description: string;
}