import { Request, RequestHandler, Response } from "express";
import { UserService } from "../services/user.service";
const userService = new UserService();

export class UserController {
  public getUsers: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const users = await userService.getUsers();
    if (!users) {
      res.status(404).send("Users not found");
      return;
    }
    res.json(users);
  };

  public getUser: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const user = await userService.getUser(String(req.params.id));
    if (!user) {
      res.status(404).send("User not found");
      return;
    }
    res.json(user);
  };

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
