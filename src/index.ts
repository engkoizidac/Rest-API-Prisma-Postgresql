import express from "express";
import userRoutes from "./routes/user.routes";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", //allowing cross-origin requests
    credentials: true, //allowing credentials
  })
);

// app.use(
//   cors({
//     origin: true, //allowing all origins
//     credentials: true, //allowing credentials
//   })
// );
app.use(cookieParser());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Basic error handler
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
  }
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
