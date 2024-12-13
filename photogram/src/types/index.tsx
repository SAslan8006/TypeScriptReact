export type UserLogIn = {
  email: string;
  password: string;
};
export type UserSignIn = UserLogIn & {
  confirmPassword: string;
};
