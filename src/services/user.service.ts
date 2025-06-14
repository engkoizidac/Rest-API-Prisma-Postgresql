import { User } from "../dto/user.dto";
import { UserRepository } from "../repositories/user.repository";

const userRepository = new UserRepository();

export class UserService {
  async getUsers(): Promise<User[]> {
    return userRepository.findAll();
  }

  async getUser(id: string): Promise<User | null> {
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

  async getAuthUser(username: string): Promise<User | null> {
    return userRepository.findByUsername(username);
  }
}
