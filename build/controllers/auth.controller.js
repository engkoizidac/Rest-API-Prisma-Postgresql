"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const jwt_util_1 = require("../utils/jwt.util");
const user_service_1 = require("../services/user.service");
const bcrypt = require("bcrypt");
const userService = new user_service_1.UserService();
class AuthController {
    constructor() {
        this.login = async (req, res) => {
            const { username, password } = req.body;
            const user = await userService.getAuthUser(username);
            if (!user) {
                res.status(401).json({ error: "User not found!" });
                return;
            }
            const isValidPassword = await bcrypt.compare(password, user.password);
            if (!isValidPassword) {
                res.status(401).json({ error: "Invalid credentials" });
                return;
            }
            await (0, jwt_util_1.createSession)(res, user.id);
            res.status(200).json({ message: "Login successful" });
        };
        this.logout = async (req, res) => {
            res.clearCookie("session");
            res.status(200).json({ message: "Logged out" });
        };
        this.getProtected = async (req, res) => {
            res.status(200).json({ message: "You are authenticated", user: req.user });
        };
    }
}
exports.AuthController = AuthController;
