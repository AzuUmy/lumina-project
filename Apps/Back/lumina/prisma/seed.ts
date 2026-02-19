import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { PrismaClient } from "@prisma/client";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const users = [
  {
    id: "usr_01hzt6p10u8x4t7k9e4m001",
    tenantKey: "tenant_alpha",
    email: "alice@lumina.app",
    name: "Alice Rivera",
    createdAt: "2026-02-10T09:00:00.000Z",
    updatedAt: "2026-02-18T15:10:00.000Z",
  },
  {
    id: "usr_01hzt6p10u8x4t7k9e4m002",
    tenantKey: "tenant_beta",
    email: "bob@lumina.app",
    name: "Bob Chen",
    createdAt: "2026-02-11T09:00:00.000Z",
    updatedAt: "2026-02-18T15:10:00.000Z",
  },
  {
    id: "usr_01hzt6p10u8x4t7k9e4m003",
    tenantKey: "tenant_gamma",
    email: "carla@lumina.app",
    name: "Carla Martin",
    createdAt: "2026-02-12T09:00:00.000Z",
    updatedAt: "2026-02-18T15:10:00.000Z",
  },
]

const favoriteLists = [
  {
    id: "fl_01hzt6p10u8x4t7k9e4l001",
    name: "Top Picks",
    userId: "usr_01hzt6p10u8x4t7k9e4m001",
    createdAt: "2026-02-12T14:00:00.000Z",
    updatedAt: "2026-02-18T15:10:00.000Z",
  },
  {
    id: "fl_01hzt6p10u8x4t7k9e4l002",
    name: "Weekend Reads",
    userId: "usr_01hzt6p10u8x4t7k9e4m001",
    createdAt: "2026-02-13T14:00:00.000Z",
    updatedAt: "2026-02-18T15:10:00.000Z",
  },
  {
    id: "fl_01hzt6p10u8x4t7k9e4l003",
    name: "Sci-Fi Favorites",
    userId: "usr_01hzt6p10u8x4t7k9e4m002",
    createdAt: "2026-02-13T18:30:00.000Z",
    updatedAt: "2026-02-18T15:10:00.000Z",
  },
  {
    id: "fl_01hzt6p10u8x4t7k9e4l004",
    name: "All Time",
    userId: "usr_01hzt6p10u8x4t7k9e4m003",
    createdAt: "2026-02-14T19:00:00.000Z",
    updatedAt: "2026-02-18T15:10:00.000Z",
  },
]

const mangas = [
  {
    id: "mng_01hzt6p10u8x4t7k9e4n001",
    title: "Void Chronicle",
    chapters: 126,
    volumes: 15,
    coverId: "cover_void_chronicle",
    description: "A deep-space saga where memory itself is a currency.",
    createdAt: "2026-01-02T10:00:00.000Z",
    updatedAt: "2026-02-18T15:10:00.000Z",
  },
  {
    id: "mng_01hzt6p10u8x4t7k9e4n002",
    title: "Temple of Glass",
    chapters: 84,
    volumes: 10,
    coverId: "cover_temple_of_glass",
    description: "A mystery adventure set in a city built entirely from crystal.",
    createdAt: "2026-01-04T10:00:00.000Z",
    updatedAt: "2026-02-18T15:10:00.000Z",
  },
  {
    id: "mng_01hzt6p10u8x4t7k9e4n003",
    title: "Neon Ronin",
    chapters: 200,
    volumes: 21,
    coverId: "cover_neon_ronin",
    description: "A cyberpunk swordsman protects a city ruled by algorithms.",
    createdAt: "2026-01-09T10:00:00.000Z",
    updatedAt: "2026-02-18T15:10:00.000Z",
  },
  {
    id: "mng_01hzt6p10u8x4t7k9e4n004",
    title: "Bloom Theory",
    chapters: 42,
    volumes: 6,
    coverId: "cover_bloom_theory",
    description: "Two rivals discover a botanical phenomenon that can alter fate.",
    createdAt: "2026-01-10T10:00:00.000Z",
    updatedAt: "2026-02-18T15:10:00.000Z",
  },
  {
    id: "mng_01hzt6p10u8x4t7k9e4n005",
    title: "Night Harbor",
    chapters: 65,
    volumes: 8,
    coverId: "cover_night_harbor",
    description: "A thriller where every dock at midnight leads to a different world.",
    createdAt: "2026-01-15T10:00:00.000Z",
    updatedAt: "2026-02-18T15:10:00.000Z",
  },
]

const favoriteListItems = [
  {
    id: "fli_01hzt6p10u8x4t7k9e4p001",
    favoriteListId: "fl_01hzt6p10u8x4t7k9e4l001",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    createdAt: "2026-02-12T14:10:00.000Z",
  },
  {
    id: "fli_01hzt6p10u8x4t7k9e4p002",
    favoriteListId: "fl_01hzt6p10u8x4t7k9e4l001",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    createdAt: "2026-02-12T14:12:00.000Z",
  },
  {
    id: "fli_01hzt6p10u8x4t7k9e4p003",
    favoriteListId: "fl_01hzt6p10u8x4t7k9e4l002",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    createdAt: "2026-02-13T14:15:00.000Z",
  },
  {
    id: "fli_01hzt6p10u8x4t7k9e4p004",
    favoriteListId: "fl_01hzt6p10u8x4t7k9e4l003",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    createdAt: "2026-02-13T18:40:00.000Z",
  },
  {
    id: "fli_01hzt6p10u8x4t7k9e4p005",
    favoriteListId: "fl_01hzt6p10u8x4t7k9e4l003",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    createdAt: "2026-02-13T18:42:00.000Z",
  },
  {
    id: "fli_01hzt6p10u8x4t7k9e4p006",
    favoriteListId: "fl_01hzt6p10u8x4t7k9e4l004",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    createdAt: "2026-02-14T19:10:00.000Z",
  },
]

const authors = [
  {
    id: "aut_01hzt6p10u8x4t7k9e4q001",
    name: "Kei Morimoto",
    bio: "Writes long-form sci-fi and mystery manga.",
    createdAt: "2026-01-01T09:00:00.000Z",
    updatedAt: "2026-02-18T15:10:00.000Z",
  },
  {
    id: "aut_01hzt6p10u8x4t7k9e4q002",
    name: "Lena Ortiz",
    bio: "Focuses on character-driven dramas.",
    createdAt: "2026-01-01T09:00:00.000Z",
    updatedAt: "2026-02-18T15:10:00.000Z",
  },
  {
    id: "aut_01hzt6p10u8x4t7k9e4q003",
    name: "Jun Park",
    bio: "Known for cyberpunk action series.",
    createdAt: "2026-01-01T09:00:00.000Z",
    updatedAt: "2026-02-18T15:10:00.000Z",
  },
]

const mangaAuthors = [
  { mangaId: "mng_01hzt6p10u8x4t7k9e4n001", authorId: "aut_01hzt6p10u8x4t7k9e4q001" },
  { mangaId: "mng_01hzt6p10u8x4t7k9e4n002", authorId: "aut_01hzt6p10u8x4t7k9e4q001" },
  { mangaId: "mng_01hzt6p10u8x4t7k9e4n003", authorId: "aut_01hzt6p10u8x4t7k9e4q003" },
  { mangaId: "mng_01hzt6p10u8x4t7k9e4n004", authorId: "aut_01hzt6p10u8x4t7k9e4q002" },
  { mangaId: "mng_01hzt6p10u8x4t7k9e4n005", authorId: "aut_01hzt6p10u8x4t7k9e4q001" },
  { mangaId: "mng_01hzt6p10u8x4t7k9e4n005", authorId: "aut_01hzt6p10u8x4t7k9e4q003" },
]

const genres = [
  { id: "gnr_01hzt6p10u8x4t7k9e4r001", name: "Sci-Fi" },
  { id: "gnr_01hzt6p10u8x4t7k9e4r002", name: "Action" },
  { id: "gnr_01hzt6p10u8x4t7k9e4r003", name: "Mystery" },
  { id: "gnr_01hzt6p10u8x4t7k9e4r004", name: "Drama" },
  { id: "gnr_01hzt6p10u8x4t7k9e4r005", name: "Fantasy" },
]

const mangaGenres = [
  { mangaId: "mng_01hzt6p10u8x4t7k9e4n001", genreId: "gnr_01hzt6p10u8x4t7k9e4r001" },
  { mangaId: "mng_01hzt6p10u8x4t7k9e4n001", genreId: "gnr_01hzt6p10u8x4t7k9e4r003" },
  { mangaId: "mng_01hzt6p10u8x4t7k9e4n002", genreId: "gnr_01hzt6p10u8x4t7k9e4r005" },
  { mangaId: "mng_01hzt6p10u8x4t7k9e4n002", genreId: "gnr_01hzt6p10u8x4t7k9e4r003" },
  { mangaId: "mng_01hzt6p10u8x4t7k9e4n003", genreId: "gnr_01hzt6p10u8x4t7k9e4r001" },
  { mangaId: "mng_01hzt6p10u8x4t7k9e4n003", genreId: "gnr_01hzt6p10u8x4t7k9e4r002" },
  { mangaId: "mng_01hzt6p10u8x4t7k9e4n004", genreId: "gnr_01hzt6p10u8x4t7k9e4r004" },
  { mangaId: "mng_01hzt6p10u8x4t7k9e4n005", genreId: "gnr_01hzt6p10u8x4t7k9e4r002" },
  { mangaId: "mng_01hzt6p10u8x4t7k9e4n005", genreId: "gnr_01hzt6p10u8x4t7k9e4r003" },
]

async function main() {
  await prisma.favoriteListItem.deleteMany();
  await prisma.mangaAuthor.deleteMany();
  await prisma.mangaGenre.deleteMany();
  await prisma.favoriteList.deleteMany();
  await prisma.author.deleteMany();
  await prisma.genre.deleteMany();
  await prisma.manga.deleteMany();
  await prisma.user.deleteMany();

  await prisma.user.createMany({
    data: users.map((u) => ({
      ...u,
      createdAt: new Date(u.createdAt),
      updatedAt: new Date(u.updatedAt),
    })),
  });

  await prisma.manga.createMany({
    data: mangas.map((m) => ({
      ...m,
      createdAt: new Date(m.createdAt),
      updatedAt: new Date(m.updatedAt),
    })),
  });

  await prisma.author.createMany({
    data: authors.map((a) => ({
      ...a,
      createdAt: new Date(a.createdAt),
      updatedAt: new Date(a.updatedAt),
    })),
  });

  await prisma.genre.createMany({ data: genres });

  await prisma.favoriteList.createMany({
    data: favoriteLists.map((list) => ({
      ...list,
      createdAt: new Date(list.createdAt),
      updatedAt: new Date(list.updatedAt),
    })),
  });

  await prisma.favoriteListItem.createMany({
    data: favoriteListItems.map((item) => ({
      ...item,
      createdAt: new Date(item.createdAt),
    })),
  });

  await prisma.mangaAuthor.createMany({ data: mangaAuthors });
  await prisma.mangaGenre.createMany({ data: mangaGenres });

  console.log("Seed completed with mock-equivalent data.");
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
