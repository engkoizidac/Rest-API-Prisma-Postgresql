"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encrypt = encrypt;
exports.decrypt = decrypt;
exports.createSession = createSession;
const jose_1 = require("jose");
const env_1 = require("../config/env");
const secretKey = new TextEncoder().encode(env_1.ENV.SESSION_SECRET);
async function encrypt(payload) {
    return new jose_1.SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(secretKey);
}
async function decrypt(token) {
    try {
        const { payload } = await (0, jose_1.jwtVerify)(token, secretKey, {
            algorithms: ["HS256"],
        });
        return payload;
    }
    catch (err) {
        console.error("Token verification failed:", err);
        return null;
    }
}
async function createSession(res, userId) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
    const token = await encrypt({ userId });
    res.cookie("session", token, {
        httpOnly: true,
        secure: env_1.ENV.NODE_ENV === "production",
        sameSite: "lax",
        expires: expiresAt,
        path: "/",
    });
}
