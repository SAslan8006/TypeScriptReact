interface user {
  name: string;
  age: number;
  email: string;
  occupation: string;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}

export default user;

export interface UserAdmin extends user {
  token: string;
  role: string;
}

export type User1 = {
  name: string;
  age: number;
  email: string;
  occupation: string;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
};

export type UserAdmin1 = User1 & {
  token: string;
  role: string;
};
