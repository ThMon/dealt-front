import { fetchApi } from "./utils";
import { createTodoDto, updateTodoDto } from "@/lib/types/todo-types";
import { ResponseRequest } from "@/lib/types/response-type";

export const getAllTodos = (): Promise<ResponseRequest> => {
  return fetchApi({
    type: "GET",
    path: "/todo/all",
  }).then((res) => {
    return res;
  });
};

export const createTodo = (
  todo: createTodoDto,
  token: string,
): Promise<ResponseRequest> => {
  return fetchApi({
    type: "POST",
    path: "/todo/add",
    token,
    data: todo,
  }).then((res) => {
    return res;
  });
};

export const deleteTodo = (
  id: string,
  token: string,
): Promise<ResponseRequest> => {
  return fetchApi({
    type: "DELETE",
    path: `/todo/delete/${id}`,
    token,
  }).then((res) => {
    return res;
  });
};

export const getTodoById = (
  id: string,
  token: string,
): Promise<ResponseRequest> => {
  return fetchApi({
    type: "GET",
    path: `/todo/findById/${id}`,
    token,
  }).then((res) => {
    return res;
  });
};

export const getTodosByUser = (
  user_id: string,
  token: string,
): Promise<ResponseRequest> => {
  return fetchApi({
    type: "GET",
    path: `/todo/findByUserId/${user_id}`,
    token,
  }).then((res) => {
    return res;
  });
};

export const updateTodo = (
  id: string,
  udaptedTodo: updateTodoDto,
  token: string,
): Promise<ResponseRequest> => {
  return fetchApi({
    type: "PUT",
    path: `/todo/update/${id}`,
    token,
    data: udaptedTodo,
  }).then((res) => {
    return res;
  });
};
