import { Request, Response } from "express";
import { UserService } from "../application/services/userService.js";
import { UserMemoryRepository } from "../infrastructure/repositories/UserMemoryRepository.js";
import { User } from "../domain/user/User.js";
// import { GetUsersUseCase } from "../application/useCases/getUsers.js";

export class UserController {
  private static readonly userRepository = new UserMemoryRepository();
  private static readonly userService = new UserService(
    UserController.userRepository
  );
  // This is for granular control using use cases
  // static getUsersUseCase = new GetUsersUseCase(userRepository);

  static async getUsers(req: Request, res: Response): Promise<void> {
    const users = await UserController.userService.getUsers();
    // private static users = await UserController.getUsersUseCase.execute();
    res.json(users);
  }

  static async addUser(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password } = req.body;
      const user = new User(name, email, password, "1234");

      await UserController.userService.addUser(user);
      res.json({ message: "User added", user: user.toObject() });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
        return;
      }
      res.status(400).json({ message: "Error adding user" });
    }
  }
}
