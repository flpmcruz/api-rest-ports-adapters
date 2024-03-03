import { UserRepositoryInterface } from "../../domain/interfaces/userRepositoryInterface.js";
import { User } from "../../domain/user/User.js";

export class UserService {
  constructor(private readonly userRepository: UserRepositoryInterface) {}

  async getUsers(): Promise<any> {
    return await this.userRepository.getUsers();
  }

  async addUser(user: User): Promise<any> {
    return await this.userRepository.addUser(user);
  }
}
