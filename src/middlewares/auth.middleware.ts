import { Request, Response, NextFunction } from "express";
import { decrypt } from "../utils/jwt.util";
import { User } from "../dto/user.dto";

// Extend Express Request interface to include 'user'
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

// export async function requireAuth(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   const token = req.cookies.session;

//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }

//   const payload = await decrypt(token);
//   if (!payload) {
//     return res.status(401).json({ message: "Invalid or expired session" });
//   }

//   // Map payload to User type
//   req.user = {
//     id: payload.id,
//     fullName: payload.fullName,
//     username: payload.username,
//     // Add other properties if needed
//   } as User;
//   console.log("User authenticated:", req.user);
//   next();
// }

export async function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const token = req.cookies?.session;
    // console.log("Token from cookies:", token);

    if (!token) {
      res.status(401).json({ message: "Unauthorized: No token provided" });
      return;
    }

    const payload = await decrypt(token);
    if (!payload) {
      res.status(401).json({ message: "Invalid or expired session" });
    }

    req.user = payload;
    console.log("User authenticated:", req.user);

    next(); // Pass to next middleware/route
  } catch (error) {
    console.error("Auth Error:", error);
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
}
