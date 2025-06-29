import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.$queryRaw`SELECT 1 + 1 as result`;
  console.log("✅ Connected to DB. Query result:", result);
}

main()
  .catch((e) => {
    console.error("❌ DB Connection failed:", e);
  })
  .finally(() => {
    prisma.$disconnect();
  });
