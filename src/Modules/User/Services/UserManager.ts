// src/services/UserManager.ts
import { User } from '../Models/User';

export class UserManager {
  private users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
  }

  removeUser(id: string) {
    this.users = this.users.filter(user => user.id !== id);
  }

  updateUser(id: string, updatedUser: User) {
    const index = this.users.findIndex(user => user.id === id);
    if (index > -1) {
      this.users[index] = updatedUser;
    }
  }

  getUsers() {
    return this.users;
  }
}
