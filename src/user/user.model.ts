import { v4 as uuidv4 } from "uuid";
export enum UserRole {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

export class User {
  id: string;
  name: string;
  email: string;
  role: UserRole;

  constructor(name: string, email: string, role: UserRole) {
    this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.role = role;
  }
}
