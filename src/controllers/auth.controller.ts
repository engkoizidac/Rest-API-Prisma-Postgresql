import { Request, RequestHandler, Response } from "express";
import { createSession } from "../utils/jwt.util";
import { UserService } from "../services/user.service";
const bcrypt = require("bcrypt");
const userService = new UserService();

export class AuthController {
  public login: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const { username, password } = req.body;
    const user = await userService.getAuthUser(username);

    if (!user) {
      res.status(401).json({ message: "User not found!" });
      return;
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      res.status(401).json({ message: "Invalid password!" });
      return;
    }

    await createSession(res, user.id);
    res.status(200).json({ message: "Login successful2" });
  };

  public logout: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    res.clearCookie("session");
    res.status(200).json({ message: "Logged out" });
  };

  public protected: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    res
      .status(200)
      .json({ message: "You are now authenticated", user: req.user });
  };
}
