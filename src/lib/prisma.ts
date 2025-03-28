import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db: PrismaClient = new PrismaClient();

// So everyTime next js user auth reloading a new prisma client is created
//so we dont want this so we store this in a global var

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}