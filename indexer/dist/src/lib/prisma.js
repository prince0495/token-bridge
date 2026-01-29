// import "dotenv/config";
// import { PrismaPg } from '@prisma/adapter-pg'
// import { PrismaClient } from '../../generated/prisma/client'
// const connectionString = `${process.env.DATABASE_URL}`
// const adapter = new PrismaPg({ connectionString })
// const prisma = new PrismaClient({ adapter })
// export { prisma }
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client";
const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaPg({ connectionString });
// Augment globalThis to store prisma
const globalForPrisma = globalThis;
export const prisma = globalForPrisma.prisma ??
    new PrismaClient({
        adapter,
    });
// In development, prevent multiple instances due to hot reload
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}
//# sourceMappingURL=prisma.js.map