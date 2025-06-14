import { SignJWT, jwtVerify, JWTPayload } from "jose";
import { Response } from "express";
import { ENV } from "../config/env";

const secretKey = new TextEncoder().encode(ENV.SESSION_SECRET);

export async function encrypt(payload: JWTPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secretKey);
}

export async function decrypt(token: string) {
  try {
    const { payload } = await jwtVerify(token, secretKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (err) {
    console.error("Token verification failed:", err);
    return null;
  }
}

export async function createSession(res: Response, userId: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
  const token = await encrypt({ userId });

  res.cookie("session", token, {
    httpOnly: true,
    secure: ENV.NODE_ENV === "production",
    sameSite: "lax",
    expires: expiresAt,
    path: "/",
  });
}
