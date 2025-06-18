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
    //   async createUser(email: string, name?: string): Promise<User> {
    //     return userRepository.create({ email, name });
    //   }
    //   async updateUser(id: number, data: Partial<User>): Promise<User> {
    //     return userRepository.update(id, data);
    //   }
    //   async deleteUser(id: number): Promise<User> {
    //     return userRepository.delete(id);
    //   }
    async getAuthUser(username) {
        return userRepository.findByUsername(username);
    }
}
exports.UserService = UserService;
