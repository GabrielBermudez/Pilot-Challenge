// src/hooks/useUsers.ts
import { useState } from 'react';
import { UserManager } from '../Services/UserManager';
import { User } from '../Models/User';

export const useUsers = () => {
  const [userManager] = useState(new UserManager());
  const [users, setUsers] = useState<User[]>(userManager.getUsers());

  const addUser = (username: string, email: string) => {
    const newUser = new User(Date.now().toString(), username, email);
    userManager.addUser(newUser);
    setUsers([...userManager.getUsers()]);
  };

  const removeUser = (id: string) => {
    userManager.removeUser(id);
    setUsers([...userManager.getUsers()]);
  };

  const updateUser = (id: string, username: string, email: string) => {
    const updatedUser = new User(id, username, email);
    userManager.updateUser(id, updatedUser);
    setUsers([...userManager.getUsers()]);
  };

  return { users, addUser, removeUser, updateUser };
};
