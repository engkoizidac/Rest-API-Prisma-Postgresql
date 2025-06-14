import { Request, Response, NextFunction } from "express";
import { decrypt } from "../utils/jwt.util";

// Extend Express Request interface to include 'user'
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export async function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies.session;

  if (!token) {
    return res.status(401).json({ message: "No session" });
  }

  const payload = await decrypt(token);
  if (!payload) {
    return res.status(401).json({ message: "Invalid or expired session" });
  }

  req.user = payload; // Optionally attach user info
  console.log("User authenticated:", req.user);
  next();
}
