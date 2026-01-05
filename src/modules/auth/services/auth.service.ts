import bcrypt from "bcryptjs";
import { db } from "@/server/db";

const SALT_ROUNDS = 12;

export const authService = {
  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, SALT_ROUNDS);
  },

  async verifyPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  },

  async createUser(email: string, username: string, password: string) {
    const passwordHash = await this.hashPassword(password);

    return db.user.create({
      data: {
        email: email.toLowerCase(),
        username: username.toLowerCase(),
        passwordHash,
      },
    });
  },

  async getUserByEmail(email: string) {
    return db.user.findUnique({
      where: { email: email.toLowerCase() },
    });
  },

  async getUserByUsername(username: string) {
    return db.user.findUnique({
      where: { username: username.toLowerCase() },
    });
  },
};
