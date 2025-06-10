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
}
exports.UserRepository = UserRepository;
