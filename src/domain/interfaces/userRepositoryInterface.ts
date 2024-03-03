import { User } from "../user/User.js";

export interface UserRepositoryInterface {
  getUsers(): Promise<any>;
  addUser(user: User): Promise<any>;
}
