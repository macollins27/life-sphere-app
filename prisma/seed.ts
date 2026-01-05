import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import dotenv from "dotenv";
import path from "path";

// Load environment variables
dotenv.config({ path: path.join(__dirname, "..", ".env") });

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not set");
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const categories = [
  {
    name: "Mental Health & Mindfulness",
    slug: "mental-health",
    description:
      "Discussions on mental wellness, mindfulness practices, meditation, stress management, and emotional well-being.",
    icon: "🧠",
    color: "#6B7FD7",
    sortOrder: 1,
  },
  {
    name: "Physical Wellness",
    slug: "physical-wellness",
    description:
      "Share fitness routines, exercise tips, sleep optimization, and strategies for maintaining physical health.",
    icon: "💪",
    color: "#E07B53",
    sortOrder: 2,
  },
  {
    name: "Nutrition & Recipes",
    slug: "nutrition-recipes",
    description:
      "Healthy eating discussions, recipe sharing, dietary tips, and nutrition science for a balanced lifestyle.",
    icon: "🥗",
    color: "#4A7C59",
    sortOrder: 3,
  },
  {
    name: "Sustainable Living",
    slug: "sustainable-living",
    description:
      "Eco-friendly practices, minimalism, conscious consumption, and living in harmony with our environment.",
    icon: "🌱",
    color: "#2D9C8F",
    sortOrder: 4,
  },
  {
    name: "General Discussion",
    slug: "general",
    description:
      "Off-topic conversations, introductions, community events, and anything that doesn't fit elsewhere.",
    icon: "💬",
    color: "#8B7355",
    sortOrder: 5,
  },
];

async function main() {
  console.log("🌱 Starting database seed...\n");

  for (const category of categories) {
    const existing = await prisma.category.findUnique({
      where: { slug: category.slug },
    });

    if (existing) {
      console.log(`  ⏭️  Category "${category.name}" already exists, skipping...`);
    } else {
      await prisma.category.create({
        data: category,
      });
      console.log(`  ✅ Created category: ${category.name}`);
    }
  }

  console.log("\n🎉 Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
