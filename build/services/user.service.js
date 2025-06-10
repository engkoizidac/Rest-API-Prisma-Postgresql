"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_repository_1 = require("../repositories/user.repository");
const userRepository = new user_repository_1.UserRepository();
class UserService {
    async getUsers() {
        return userRepository.findAll();
    }
    async getUser(id) {
        return userRepository.findById(id);
    }
}
exports.UserService = UserService;
