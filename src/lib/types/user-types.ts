export type UserQuery = {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    __v: number
};
  
export type createUserDto = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
};

export type loginDto = {
    email: string;
    password: string;
};
  