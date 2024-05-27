export type ResponseRequest = {
  status: number;
  error: { msg: string; error: any } | null;
  data: any;
};
