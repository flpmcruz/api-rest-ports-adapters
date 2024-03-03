import { UserRepositoryInterface } from "../../domain/interfaces/userRepositoryInterface.js";

export class GetUsersUseCase {
  constructor(private readonly userRepository: UserRepositoryInterface) {}

  async execute(): Promise<any> {
    return await this.userRepository.getUsers();
  }
}
