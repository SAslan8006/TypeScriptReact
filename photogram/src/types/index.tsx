import { OutputFileEntry } from "@uploadcare/react-uploader";

export type UserLogIn = {
  email: string;
  password: string;
};
export type UserSignIn = UserLogIn & {
  confirmPassword: string;
};

export type FileEntry = {
  files: OutputFileEntry[];
};

export type Post = {
  caption: string;
  photos: PhotoMeta[];
  likes: number;
  userlikes: [];
  userId: string | null;
  date: Date;
};

export type PhotoMeta = {
  cdnUrl: string;
  uuid: string;
};

export type DocumentResponse = {
  id: string;
  caption: string;
  photos: PhotoMeta[];
  likes: number;
  userlikes: [];
  userId: string | null;
  date: Date;
};
