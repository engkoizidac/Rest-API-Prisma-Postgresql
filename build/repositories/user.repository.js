"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const client_1 = require("../prisma/client");
class UserRepository {
    async findAll() {
        return await client_1.prisma.user.findMany();
    }
    async findById(id) {
        return await client_1.prisma.user.findUnique({ where: { id } });
    }
    //   async create(data: Omit<User, "id" | "createdAt">): Promise<User> {
    //     return await prisma.user.create({ data });
    //   }
    //   async update(id: number, data: Partial<User>): Promise<User> {
    //     return await prisma.user.update({ where: { id }, data });
    //   }
    //   async delete(id: number): Promise<User> {
    //     return await prisma.user.delete({ where: { id } });
    //   }
    async findByUsername(username) {
        return await client_1.prisma.user.findUnique({ where: { username } });
    }
}
exports.UserRepository = UserRepository;
