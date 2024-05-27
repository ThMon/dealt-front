import { createUserDto, loginDto } from "@/lib/types/user-types";
import { fetchApi } from "./utils";
import { ResponseRequest } from "@/lib/types/response-type";

export const signup = (user: createUserDto): Promise<ResponseRequest> => {
  return fetchApi({
    type: "POST",
    path: "/user/signup",
    data: user,
  }).then((res) => {
    return res;
  });
};

export const signin = (login: loginDto): Promise<ResponseRequest> => {
  return fetchApi({
    type: "POST",
    path: "/user/signin",
    data: login,
  }).then((res) => {
    return res;
  });
};

export const getUserById = (
  id: string,
  token: string,
): Promise<ResponseRequest> => {
  return fetchApi({
    type: "GET",
    path: `/user/findById/${id}`,
    token,
  }).then((res) => {
    return res;
  });
};
