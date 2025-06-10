import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export class UserController {
  async getUsers(req: Request, res: Response) {
    const users = await userService.getUsers();
    res.json(users);
  }

  //   async getUser(req: Request, res: Response) {
  //     const user = await userService.getUser(Number(req.params.id));
  //     if (!user) return res.status(404).send('User not found');
  //     res.json(user);
  //   }

  //   async createUser(req: Request, res: Response) {
  //     const { email, name } = req.body;
  //     const user = await userService.createUser(email, name);
  //     res.status(201).json(user);
  //   }

  //   async updateUser(req: Request, res: Response) {
  //     const { name } = req.body;
  //     const user = await userService.updateUser(Number(req.params.id), { name });
  //     res.json(user);
  //   }

  //   async deleteUser(req: Request, res: Response) {
  //     await userService.deleteUser(Number(req.params.id));
  //     res.status(204).send();
  //   }
}
