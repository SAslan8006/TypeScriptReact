import { createContext, useEffect, useState } from "react";

export interface User {
  id: number;
  name: string;
  age: number;
  isMarried: boolean;
}

interface UserContext {
  user: User[] | null;
  addUser: (user: User) => void;
  updateUser: (id: number) => void;
  deleteUser: (id: number) => void;
}

const contexInitialValue: UserContext = {
  user: null,
  addUser: () => null,
  updateUser: () => null,
  deleteUser: () => null,
};

export const UserContext = createContext<UserContext>(contexInitialValue);

interface Props {
  children: React.ReactNode;
}
export const UserProvider = (props: Props) => {
  const [users, setUsers] = useState<User[] | null>(null);
  useEffect(() => {
    setUsers([{ id: 1, name: "Osman", age: 14, isMarried: false }]);
  }, []);
  const addUser = (user: User) => {
    setUsers([...users!, user]);
  };
  const updateUser = (id: number) => {
    setUsers(
      users!.map((user) => (user.id === id ? { ...user, age: 15 } : user))
    );
  };
  const deleteUser = (id: number) => {
    setUsers(users!.filter((user) => user.id !== id));
  };
  return (
    <UserContext.Provider
      value={{ user: users, addUser, updateUser, deleteUser }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
