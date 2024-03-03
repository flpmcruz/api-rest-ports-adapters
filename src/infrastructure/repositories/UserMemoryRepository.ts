import { UserRepositoryInterface } from "../../domain/interfaces/userRepositoryInterface.js";
import { User } from "../../domain/user/User.js";

export class UserMemoryRepository implements UserRepositoryInterface {
  memory: any[];

  constructor() {
    this.memory = [
      { name: "John", email: "correo@gmail.com", password: "123456" },
    ];
  }

  async getUsers(): Promise<any> {
    return this.memory;
  }

  async addUser(user: User): Promise<any> {
    this.memory.push(user.toObject());
    return this.memory;
  }
}
