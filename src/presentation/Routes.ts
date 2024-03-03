import { Router } from "express";
import { UserController } from "../controllers/UserController.js";

export class AppRoutes {
  static routes(): Router {
    const router = Router();

    // Define Routes
    router.get("/users", UserController.getUsers);
    router.post("/users", UserController.addUser);
    return router;
  }
}
