// src/models/User.ts
export class User {
  constructor(public id: string, public username: string, public email: string) {}

  getDescription() {
    return `${this.username} (${this.email})`;
  }
}
