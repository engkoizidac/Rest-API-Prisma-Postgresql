import { prisma } from "../prisma/client";
import { User } from "../dto/user.dto";

export class UserRepository {
  async findAll(): Promise<User[]> {
    return await prisma.user.findMany();
  }

  async findById(id: string): Promise<User | null> {
    return await prisma.user.findUnique({ where: { id } });
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

  async findByUsername(username: string): Promise<User | null> {
    return await prisma.user.findUnique({ where: { username } });
  }
}
