export type MockUser = {
  id: string;
  tenantKey: string;
  email: string;
  name: string | null;
  createdAt: string;
  updatedAt: string;
};

export type MockFavoriteList = {
  id: string;
  name: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export type MockFavoriteListItem = {
  id: string;
  favoriteListId: string;
  mangaId: string;
  createdAt: string;
};

export type MockManga = {
  id: string;
  title: string;
  chapters: number | null;
  volumes: number | null;
  coverId: string | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export type MockAuthor = {
  id: string;
  name: string;
  bio: string | null;
  createdAt: string;
  updatedAt: string;
};

export type MockMangaAuthor = {
  mangaId: string;
  authorId: string;
};

export type MockGenre = {
  id: string;
  name: string;
};

export type MockMangaGenre = {
  mangaId: string;
  genreId: string;
};

export type MockVolume = {
  id: string;
  mangaId: string;
  number: number;
  title: string;
  chapterCount: number;
};

export type MockChapter = {
  id: string;
  volumeId: string;
  mangaId: string;
  number: number;
  title: string;
  pageCount: number;
};

export type MockPage = {
  id: string;
  chapterId: string;
  mangaId: string;
  volumeId: string;
  chapterNumber: number;
  pageNumber: number;
  imageUrl: string;
};

export type MockMangaVolume = {
  mangaId: string;
  volumeId: string;
};

export type MockVolumeChapter = {
  volumeId: string;
  chapterId: string;
};

export const users: MockUser[] = [
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
];

export const favoriteLists: MockFavoriteList[] = [
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
];

export const mangas: MockManga[] = [
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
    description:
      "A mystery adventure set in a city built entirely from crystal.",
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
    description:
      "Two rivals discover a botanical phenomenon that can alter fate.",
    createdAt: "2026-01-10T10:00:00.000Z",
    updatedAt: "2026-02-18T15:10:00.000Z",
  },
  {
    id: "mng_01hzt6p10u8x4t7k9e4n005",
    title: "Night Harbor",
    chapters: 65,
    volumes: 8,
    coverId: "cover_night_harbor",
    description:
      "A thriller where every dock at midnight leads to a different world.",
    createdAt: "2026-01-15T10:00:00.000Z",
    updatedAt: "2026-02-18T15:10:00.000Z",
  },
  {
    id: "mng_01hzt6p10u8x4t7k9e4n006",
    title: "Iron Rain",
    chapters: 91,
    volumes: 12,
    coverId: "cover_iron_rain",
    description:
      "A war-torn kingdom fights airborne mechs powered by ancient relics.",
    createdAt: "2026-01-18T10:00:00.000Z",
    updatedAt: "2026-02-18T15:10:00.000Z",
  },
  {
    id: "mng_01hzt6p10u8x4t7k9e4n007",
    title: "Paper Moon District",
    chapters: 58,
    volumes: 7,
    coverId: "cover_paper_moon_district",
    description:
      "A neighborhood of artists hides a conspiracy inside old sketchbooks.",
    createdAt: "2026-01-20T10:00:00.000Z",
    updatedAt: "2026-02-18T15:10:00.000Z",
  },
  {
    id: "mng_01hzt6p10u8x4t7k9e4n008",
    title: "Gravity Orchard",
    chapters: 33,
    volumes: 5,
    coverId: "cover_gravity_orchard",
    description:
      "Teen inventors discover fruit that bends gravity around their town.",
    createdAt: "2026-01-24T10:00:00.000Z",
    updatedAt: "2026-02-18T15:10:00.000Z",
  },
  {
    id: "mng_01hzt6p10u8x4t7k9e4n009",
    title: "Ashes of Meridian",
    chapters: 147,
    volumes: 16,
    coverId: "cover_ashes_of_meridian",
    description:
      "A fallen knight rebuilds a shattered empire one city at a time.",
    createdAt: "2026-01-26T10:00:00.000Z",
    updatedAt: "2026-02-18T15:10:00.000Z",
  },
  {
    id: "mng_01hzt6p10u8x4t7k9e4n010",
    title: "Cipher Bloom",
    chapters: 76,
    volumes: 9,
    coverId: "cover_cipher_bloom",
    description:
      "A codebreaker and a florist decode messages hidden in rare petals.",
    createdAt: "2026-01-29T10:00:00.000Z",
    updatedAt: "2026-02-18T15:10:00.000Z",
  },
];


export const volumes: MockVolume[] = [
  {
    id: "vol_001_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 1,
    title: "Void Chronicle Volume 1",
    chapterCount: 5,
  },
  {
    id: "vol_001_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 2,
    title: "Void Chronicle Volume 2",
    chapterCount: 5,
  },
  {
    id: "vol_001_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 3,
    title: "Void Chronicle Volume 3",
    chapterCount: 5,
  },
  {
    id: "vol_001_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 4,
    title: "Void Chronicle Volume 4",
    chapterCount: 5,
  },
  {
    id: "vol_001_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 5,
    title: "Void Chronicle Volume 5",
    chapterCount: 5,
  },
  {
    id: "vol_002_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 1,
    title: "Temple of Glass Volume 1",
    chapterCount: 5,
  },
  {
    id: "vol_002_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 2,
    title: "Temple of Glass Volume 2",
    chapterCount: 5,
  },
  {
    id: "vol_002_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 3,
    title: "Temple of Glass Volume 3",
    chapterCount: 5,
  },
  {
    id: "vol_002_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 4,
    title: "Temple of Glass Volume 4",
    chapterCount: 5,
  },
  {
    id: "vol_002_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 5,
    title: "Temple of Glass Volume 5",
    chapterCount: 5,
  },
  {
    id: "vol_003_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 1,
    title: "Neon Ronin Volume 1",
    chapterCount: 5,
  },
  {
    id: "vol_003_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 2,
    title: "Neon Ronin Volume 2",
    chapterCount: 5,
  },
  {
    id: "vol_003_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 3,
    title: "Neon Ronin Volume 3",
    chapterCount: 5,
  },
  {
    id: "vol_003_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 4,
    title: "Neon Ronin Volume 4",
    chapterCount: 5,
  },
  {
    id: "vol_003_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 5,
    title: "Neon Ronin Volume 5",
    chapterCount: 5,
  },
  {
    id: "vol_004_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 1,
    title: "Bloom Theory Volume 1",
    chapterCount: 5,
  },
  {
    id: "vol_004_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 2,
    title: "Bloom Theory Volume 2",
    chapterCount: 5,
  },
  {
    id: "vol_004_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 3,
    title: "Bloom Theory Volume 3",
    chapterCount: 5,
  },
  {
    id: "vol_004_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 4,
    title: "Bloom Theory Volume 4",
    chapterCount: 5,
  },
  {
    id: "vol_004_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 5,
    title: "Bloom Theory Volume 5",
    chapterCount: 5,
  },
  {
    id: "vol_005_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 1,
    title: "Night Harbor Volume 1",
    chapterCount: 5,
  },
  {
    id: "vol_005_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 2,
    title: "Night Harbor Volume 2",
    chapterCount: 5,
  },
  {
    id: "vol_005_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 3,
    title: "Night Harbor Volume 3",
    chapterCount: 5,
  },
  {
    id: "vol_005_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 4,
    title: "Night Harbor Volume 4",
    chapterCount: 5,
  },
  {
    id: "vol_005_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 5,
    title: "Night Harbor Volume 5",
    chapterCount: 5,
  },
  {
    id: "vol_006_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 1,
    title: "Iron Rain Volume 1",
    chapterCount: 5,
  },
  {
    id: "vol_006_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 2,
    title: "Iron Rain Volume 2",
    chapterCount: 5,
  },
  {
    id: "vol_006_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 3,
    title: "Iron Rain Volume 3",
    chapterCount: 5,
  },
  {
    id: "vol_006_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 4,
    title: "Iron Rain Volume 4",
    chapterCount: 5,
  },
  {
    id: "vol_006_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 5,
    title: "Iron Rain Volume 5",
    chapterCount: 5,
  },
  {
    id: "vol_007_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 1,
    title: "Paper Moon District Volume 1",
    chapterCount: 5,
  },
  {
    id: "vol_007_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 2,
    title: "Paper Moon District Volume 2",
    chapterCount: 5,
  },
  {
    id: "vol_007_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 3,
    title: "Paper Moon District Volume 3",
    chapterCount: 5,
  },
  {
    id: "vol_007_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 4,
    title: "Paper Moon District Volume 4",
    chapterCount: 5,
  },
  {
    id: "vol_007_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 5,
    title: "Paper Moon District Volume 5",
    chapterCount: 5,
  },
  {
    id: "vol_008_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 1,
    title: "Gravity Orchard Volume 1",
    chapterCount: 5,
  },
  {
    id: "vol_008_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 2,
    title: "Gravity Orchard Volume 2",
    chapterCount: 5,
  },
  {
    id: "vol_008_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 3,
    title: "Gravity Orchard Volume 3",
    chapterCount: 5,
  },
  {
    id: "vol_008_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 4,
    title: "Gravity Orchard Volume 4",
    chapterCount: 5,
  },
  {
    id: "vol_008_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 5,
    title: "Gravity Orchard Volume 5",
    chapterCount: 5,
  },
  {
    id: "vol_009_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 1,
    title: "Ashes of Meridian Volume 1",
    chapterCount: 5,
  },
  {
    id: "vol_009_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 2,
    title: "Ashes of Meridian Volume 2",
    chapterCount: 5,
  },
  {
    id: "vol_009_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 3,
    title: "Ashes of Meridian Volume 3",
    chapterCount: 5,
  },
  {
    id: "vol_009_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 4,
    title: "Ashes of Meridian Volume 4",
    chapterCount: 5,
  },
  {
    id: "vol_009_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 5,
    title: "Ashes of Meridian Volume 5",
    chapterCount: 5,
  },
  {
    id: "vol_010_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 1,
    title: "Cipher Bloom Volume 1",
    chapterCount: 5,
  },
  {
    id: "vol_010_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 2,
    title: "Cipher Bloom Volume 2",
    chapterCount: 5,
  },
  {
    id: "vol_010_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 3,
    title: "Cipher Bloom Volume 3",
    chapterCount: 5,
  },
  {
    id: "vol_010_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 4,
    title: "Cipher Bloom Volume 4",
    chapterCount: 5,
  },
  {
    id: "vol_010_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 5,
    title: "Cipher Bloom Volume 5",
    chapterCount: 5,
  },
];

export const chapters: MockChapter[] = [
  {
    id: "ch_001_01_001",
    volumeId: "vol_001_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_001_01_002",
    volumeId: "vol_001_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_001_01_003",
    volumeId: "vol_001_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_001_01_004",
    volumeId: "vol_001_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_001_01_005",
    volumeId: "vol_001_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_001_02_001",
    volumeId: "vol_001_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_001_02_002",
    volumeId: "vol_001_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_001_02_003",
    volumeId: "vol_001_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_001_02_004",
    volumeId: "vol_001_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_001_02_005",
    volumeId: "vol_001_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_001_03_001",
    volumeId: "vol_001_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_001_03_002",
    volumeId: "vol_001_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_001_03_003",
    volumeId: "vol_001_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_001_03_004",
    volumeId: "vol_001_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_001_03_005",
    volumeId: "vol_001_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_001_04_001",
    volumeId: "vol_001_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_001_04_002",
    volumeId: "vol_001_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_001_04_003",
    volumeId: "vol_001_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_001_04_004",
    volumeId: "vol_001_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_001_04_005",
    volumeId: "vol_001_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_001_05_001",
    volumeId: "vol_001_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_001_05_002",
    volumeId: "vol_001_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_001_05_003",
    volumeId: "vol_001_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_001_05_004",
    volumeId: "vol_001_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_001_05_005",
    volumeId: "vol_001_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_002_01_001",
    volumeId: "vol_002_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_002_01_002",
    volumeId: "vol_002_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_002_01_003",
    volumeId: "vol_002_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_002_01_004",
    volumeId: "vol_002_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_002_01_005",
    volumeId: "vol_002_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_002_02_001",
    volumeId: "vol_002_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_002_02_002",
    volumeId: "vol_002_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_002_02_003",
    volumeId: "vol_002_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_002_02_004",
    volumeId: "vol_002_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_002_02_005",
    volumeId: "vol_002_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_002_03_001",
    volumeId: "vol_002_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_002_03_002",
    volumeId: "vol_002_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_002_03_003",
    volumeId: "vol_002_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_002_03_004",
    volumeId: "vol_002_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_002_03_005",
    volumeId: "vol_002_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_002_04_001",
    volumeId: "vol_002_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_002_04_002",
    volumeId: "vol_002_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_002_04_003",
    volumeId: "vol_002_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_002_04_004",
    volumeId: "vol_002_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_002_04_005",
    volumeId: "vol_002_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_002_05_001",
    volumeId: "vol_002_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_002_05_002",
    volumeId: "vol_002_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_002_05_003",
    volumeId: "vol_002_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_002_05_004",
    volumeId: "vol_002_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_002_05_005",
    volumeId: "vol_002_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_003_01_001",
    volumeId: "vol_003_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_003_01_002",
    volumeId: "vol_003_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_003_01_003",
    volumeId: "vol_003_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_003_01_004",
    volumeId: "vol_003_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_003_01_005",
    volumeId: "vol_003_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_003_02_001",
    volumeId: "vol_003_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_003_02_002",
    volumeId: "vol_003_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_003_02_003",
    volumeId: "vol_003_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_003_02_004",
    volumeId: "vol_003_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_003_02_005",
    volumeId: "vol_003_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_003_03_001",
    volumeId: "vol_003_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_003_03_002",
    volumeId: "vol_003_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_003_03_003",
    volumeId: "vol_003_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_003_03_004",
    volumeId: "vol_003_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_003_03_005",
    volumeId: "vol_003_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_003_04_001",
    volumeId: "vol_003_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_003_04_002",
    volumeId: "vol_003_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_003_04_003",
    volumeId: "vol_003_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_003_04_004",
    volumeId: "vol_003_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_003_04_005",
    volumeId: "vol_003_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_003_05_001",
    volumeId: "vol_003_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_003_05_002",
    volumeId: "vol_003_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_003_05_003",
    volumeId: "vol_003_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_003_05_004",
    volumeId: "vol_003_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_003_05_005",
    volumeId: "vol_003_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_004_01_001",
    volumeId: "vol_004_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_004_01_002",
    volumeId: "vol_004_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_004_01_003",
    volumeId: "vol_004_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_004_01_004",
    volumeId: "vol_004_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_004_01_005",
    volumeId: "vol_004_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_004_02_001",
    volumeId: "vol_004_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_004_02_002",
    volumeId: "vol_004_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_004_02_003",
    volumeId: "vol_004_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_004_02_004",
    volumeId: "vol_004_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_004_02_005",
    volumeId: "vol_004_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_004_03_001",
    volumeId: "vol_004_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_004_03_002",
    volumeId: "vol_004_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_004_03_003",
    volumeId: "vol_004_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_004_03_004",
    volumeId: "vol_004_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_004_03_005",
    volumeId: "vol_004_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_004_04_001",
    volumeId: "vol_004_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_004_04_002",
    volumeId: "vol_004_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_004_04_003",
    volumeId: "vol_004_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_004_04_004",
    volumeId: "vol_004_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_004_04_005",
    volumeId: "vol_004_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_004_05_001",
    volumeId: "vol_004_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_004_05_002",
    volumeId: "vol_004_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_004_05_003",
    volumeId: "vol_004_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_004_05_004",
    volumeId: "vol_004_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_004_05_005",
    volumeId: "vol_004_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_005_01_001",
    volumeId: "vol_005_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_005_01_002",
    volumeId: "vol_005_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_005_01_003",
    volumeId: "vol_005_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_005_01_004",
    volumeId: "vol_005_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_005_01_005",
    volumeId: "vol_005_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_005_02_001",
    volumeId: "vol_005_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_005_02_002",
    volumeId: "vol_005_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_005_02_003",
    volumeId: "vol_005_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_005_02_004",
    volumeId: "vol_005_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_005_02_005",
    volumeId: "vol_005_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_005_03_001",
    volumeId: "vol_005_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_005_03_002",
    volumeId: "vol_005_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_005_03_003",
    volumeId: "vol_005_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_005_03_004",
    volumeId: "vol_005_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_005_03_005",
    volumeId: "vol_005_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_005_04_001",
    volumeId: "vol_005_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_005_04_002",
    volumeId: "vol_005_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_005_04_003",
    volumeId: "vol_005_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_005_04_004",
    volumeId: "vol_005_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_005_04_005",
    volumeId: "vol_005_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_005_05_001",
    volumeId: "vol_005_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_005_05_002",
    volumeId: "vol_005_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_005_05_003",
    volumeId: "vol_005_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_005_05_004",
    volumeId: "vol_005_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_005_05_005",
    volumeId: "vol_005_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_006_01_001",
    volumeId: "vol_006_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_006_01_002",
    volumeId: "vol_006_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_006_01_003",
    volumeId: "vol_006_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_006_01_004",
    volumeId: "vol_006_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_006_01_005",
    volumeId: "vol_006_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_006_02_001",
    volumeId: "vol_006_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_006_02_002",
    volumeId: "vol_006_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_006_02_003",
    volumeId: "vol_006_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_006_02_004",
    volumeId: "vol_006_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_006_02_005",
    volumeId: "vol_006_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_006_03_001",
    volumeId: "vol_006_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_006_03_002",
    volumeId: "vol_006_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_006_03_003",
    volumeId: "vol_006_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_006_03_004",
    volumeId: "vol_006_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_006_03_005",
    volumeId: "vol_006_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_006_04_001",
    volumeId: "vol_006_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_006_04_002",
    volumeId: "vol_006_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_006_04_003",
    volumeId: "vol_006_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_006_04_004",
    volumeId: "vol_006_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_006_04_005",
    volumeId: "vol_006_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_006_05_001",
    volumeId: "vol_006_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_006_05_002",
    volumeId: "vol_006_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_006_05_003",
    volumeId: "vol_006_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_006_05_004",
    volumeId: "vol_006_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_006_05_005",
    volumeId: "vol_006_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_007_01_001",
    volumeId: "vol_007_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_007_01_002",
    volumeId: "vol_007_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_007_01_003",
    volumeId: "vol_007_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_007_01_004",
    volumeId: "vol_007_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_007_01_005",
    volumeId: "vol_007_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_007_02_001",
    volumeId: "vol_007_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_007_02_002",
    volumeId: "vol_007_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_007_02_003",
    volumeId: "vol_007_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_007_02_004",
    volumeId: "vol_007_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_007_02_005",
    volumeId: "vol_007_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_007_03_001",
    volumeId: "vol_007_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_007_03_002",
    volumeId: "vol_007_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_007_03_003",
    volumeId: "vol_007_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_007_03_004",
    volumeId: "vol_007_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_007_03_005",
    volumeId: "vol_007_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_007_04_001",
    volumeId: "vol_007_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_007_04_002",
    volumeId: "vol_007_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_007_04_003",
    volumeId: "vol_007_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_007_04_004",
    volumeId: "vol_007_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_007_04_005",
    volumeId: "vol_007_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_007_05_001",
    volumeId: "vol_007_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_007_05_002",
    volumeId: "vol_007_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_007_05_003",
    volumeId: "vol_007_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_007_05_004",
    volumeId: "vol_007_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_007_05_005",
    volumeId: "vol_007_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_008_01_001",
    volumeId: "vol_008_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_008_01_002",
    volumeId: "vol_008_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_008_01_003",
    volumeId: "vol_008_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_008_01_004",
    volumeId: "vol_008_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_008_01_005",
    volumeId: "vol_008_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_008_02_001",
    volumeId: "vol_008_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_008_02_002",
    volumeId: "vol_008_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_008_02_003",
    volumeId: "vol_008_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_008_02_004",
    volumeId: "vol_008_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_008_02_005",
    volumeId: "vol_008_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_008_03_001",
    volumeId: "vol_008_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_008_03_002",
    volumeId: "vol_008_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_008_03_003",
    volumeId: "vol_008_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_008_03_004",
    volumeId: "vol_008_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_008_03_005",
    volumeId: "vol_008_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_008_04_001",
    volumeId: "vol_008_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_008_04_002",
    volumeId: "vol_008_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_008_04_003",
    volumeId: "vol_008_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_008_04_004",
    volumeId: "vol_008_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_008_04_005",
    volumeId: "vol_008_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_008_05_001",
    volumeId: "vol_008_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_008_05_002",
    volumeId: "vol_008_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_008_05_003",
    volumeId: "vol_008_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_008_05_004",
    volumeId: "vol_008_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_008_05_005",
    volumeId: "vol_008_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_009_01_001",
    volumeId: "vol_009_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_009_01_002",
    volumeId: "vol_009_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_009_01_003",
    volumeId: "vol_009_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_009_01_004",
    volumeId: "vol_009_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_009_01_005",
    volumeId: "vol_009_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_009_02_001",
    volumeId: "vol_009_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_009_02_002",
    volumeId: "vol_009_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_009_02_003",
    volumeId: "vol_009_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_009_02_004",
    volumeId: "vol_009_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_009_02_005",
    volumeId: "vol_009_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_009_03_001",
    volumeId: "vol_009_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_009_03_002",
    volumeId: "vol_009_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_009_03_003",
    volumeId: "vol_009_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_009_03_004",
    volumeId: "vol_009_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_009_03_005",
    volumeId: "vol_009_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_009_04_001",
    volumeId: "vol_009_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_009_04_002",
    volumeId: "vol_009_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_009_04_003",
    volumeId: "vol_009_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_009_04_004",
    volumeId: "vol_009_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_009_04_005",
    volumeId: "vol_009_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_009_05_001",
    volumeId: "vol_009_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_009_05_002",
    volumeId: "vol_009_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_009_05_003",
    volumeId: "vol_009_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_009_05_004",
    volumeId: "vol_009_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_009_05_005",
    volumeId: "vol_009_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_010_01_001",
    volumeId: "vol_010_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_010_01_002",
    volumeId: "vol_010_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_010_01_003",
    volumeId: "vol_010_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_010_01_004",
    volumeId: "vol_010_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_010_01_005",
    volumeId: "vol_010_01",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_010_02_001",
    volumeId: "vol_010_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_010_02_002",
    volumeId: "vol_010_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_010_02_003",
    volumeId: "vol_010_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_010_02_004",
    volumeId: "vol_010_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_010_02_005",
    volumeId: "vol_010_02",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_010_03_001",
    volumeId: "vol_010_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_010_03_002",
    volumeId: "vol_010_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_010_03_003",
    volumeId: "vol_010_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_010_03_004",
    volumeId: "vol_010_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_010_03_005",
    volumeId: "vol_010_03",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_010_04_001",
    volumeId: "vol_010_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_010_04_002",
    volumeId: "vol_010_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_010_04_003",
    volumeId: "vol_010_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_010_04_004",
    volumeId: "vol_010_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_010_04_005",
    volumeId: "vol_010_04",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
  {
    id: "ch_010_05_001",
    volumeId: "vol_010_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 1,
    title: "Chapter 1",
    pageCount: 20,
  },
  {
    id: "ch_010_05_002",
    volumeId: "vol_010_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 2,
    title: "Chapter 2",
    pageCount: 20,
  },
  {
    id: "ch_010_05_003",
    volumeId: "vol_010_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 3,
    title: "Chapter 3",
    pageCount: 20,
  },
  {
    id: "ch_010_05_004",
    volumeId: "vol_010_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 4,
    title: "Chapter 4",
    pageCount: 20,
  },
  {
    id: "ch_010_05_005",
    volumeId: "vol_010_05",
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    number: 5,
    title: "Chapter 5",
    pageCount: 20,
  },
];

export const pages: MockPage[] = chapters.flatMap((chapter) =>
  Array.from({ length: chapter.pageCount }, (_, pageIndex) => {
    const pageNumber = pageIndex + 1;

    return {
      id: chapter.id + "_pg_" + String(pageNumber).padStart(3, "0"),
      chapterId: chapter.id,
      mangaId: chapter.mangaId,
      volumeId: chapter.volumeId,
      chapterNumber: chapter.number,
      pageNumber,
      imageUrl:
        "https://cdn.lumina.mock/" +
        chapter.id +
        "/page-" +
        String(pageNumber).padStart(3, "0") +
        ".jpg",
    };
  }),
);

export const mangaVolumes: MockMangaVolume[] = volumes.map((volume) => ({
  mangaId: volume.mangaId,
  volumeId: volume.id,
}));

export const volumeChapters: MockVolumeChapter[] = chapters.map((chapter) => ({
  volumeId: chapter.volumeId,
  chapterId: chapter.id,
}));

export const volumesByMangaId: Record<string, MockVolume[]> = Object.fromEntries(
  mangas.map((manga) => [
    manga.id,
    volumes.filter((volume) => volume.mangaId === manga.id),
  ]),
);

export const chaptersByVolumeId: Record<string, MockChapter[]> =
  Object.fromEntries(
    volumes.map((volume) => [
      volume.id,
      chapters.filter((chapter) => chapter.volumeId === volume.id),
    ]),
  );

export const pagesByChapterId: Record<string, MockPage[]> = Object.fromEntries(
  chapters.map((chapter) => [
    chapter.id,
    pages.filter((page) => page.chapterId === chapter.id),
  ]),
);

export const favoriteListItems: MockFavoriteListItem[] = [
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
];

export const authors: MockAuthor[] = [
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
];

export const mangaAuthors: MockMangaAuthor[] = [
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    authorId: "aut_01hzt6p10u8x4t7k9e4q001",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    authorId: "aut_01hzt6p10u8x4t7k9e4q001",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    authorId: "aut_01hzt6p10u8x4t7k9e4q003",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    authorId: "aut_01hzt6p10u8x4t7k9e4q002",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    authorId: "aut_01hzt6p10u8x4t7k9e4q001",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    authorId: "aut_01hzt6p10u8x4t7k9e4q003",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    authorId: "aut_01hzt6p10u8x4t7k9e4q003",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    authorId: "aut_01hzt6p10u8x4t7k9e4q002",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    authorId: "aut_01hzt6p10u8x4t7k9e4q001",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    authorId: "aut_01hzt6p10u8x4t7k9e4q003",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    authorId: "aut_01hzt6p10u8x4t7k9e4q002",
  },
];

export const genres: MockGenre[] = [
  { id: "gnr_01hzt6p10u8x4t7k9e4r001", name: "Sci-Fi" },
  { id: "gnr_01hzt6p10u8x4t7k9e4r002", name: "Action" },
  { id: "gnr_01hzt6p10u8x4t7k9e4r003", name: "Mystery" },
  { id: "gnr_01hzt6p10u8x4t7k9e4r004", name: "Drama" },
  { id: "gnr_01hzt6p10u8x4t7k9e4r005", name: "Fantasy" },
];

export const mangaGenres: MockMangaGenre[] = [
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    genreId: "gnr_01hzt6p10u8x4t7k9e4r001",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n001",
    genreId: "gnr_01hzt6p10u8x4t7k9e4r003",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    genreId: "gnr_01hzt6p10u8x4t7k9e4r005",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n002",
    genreId: "gnr_01hzt6p10u8x4t7k9e4r003",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    genreId: "gnr_01hzt6p10u8x4t7k9e4r001",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n003",
    genreId: "gnr_01hzt6p10u8x4t7k9e4r002",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n004",
    genreId: "gnr_01hzt6p10u8x4t7k9e4r004",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    genreId: "gnr_01hzt6p10u8x4t7k9e4r002",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n005",
    genreId: "gnr_01hzt6p10u8x4t7k9e4r003",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    genreId: "gnr_01hzt6p10u8x4t7k9e4r002",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n006",
    genreId: "gnr_01hzt6p10u8x4t7k9e4r005",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    genreId: "gnr_01hzt6p10u8x4t7k9e4r004",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n007",
    genreId: "gnr_01hzt6p10u8x4t7k9e4r003",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    genreId: "gnr_01hzt6p10u8x4t7k9e4r001",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n008",
    genreId: "gnr_01hzt6p10u8x4t7k9e4r005",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    genreId: "gnr_01hzt6p10u8x4t7k9e4r002",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n009",
    genreId: "gnr_01hzt6p10u8x4t7k9e4r004",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    genreId: "gnr_01hzt6p10u8x4t7k9e4r004",
  },
  {
    mangaId: "mng_01hzt6p10u8x4t7k9e4n010",
    genreId: "gnr_01hzt6p10u8x4t7k9e4r003",
  },
];

export type MockMangaWithGenres = MockManga & {
  genres: MockGenre[];
};
export type MockMangaWithAuthors = MockManga & {
  authors: MockAuthor[];
};
export type MockMangaWithRelations = MockManga & {
  authors: MockAuthor[];
  genres: MockGenre[];
};

function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

export const getGenresByMangaId = (mangaId: string): MockGenre[] =>
  mangaGenres
    .filter((link) => link.mangaId === mangaId)
    .map((link) => genres.find((genre) => genre.id === link.genreId))
    .filter(isDefined);

export const getAuthorsByMangaId = (mangaId: string): MockAuthor[] =>
  mangaAuthors
    .filter((link) => link.mangaId === mangaId)
    .map((link) => authors.find((author) => author.id === link.authorId))
    .filter(isDefined);

export const mangasWithAuthors: MockMangaWithAuthors[] = mangas.map(
  (manga) => ({
    ...manga,
    authors: getAuthorsByMangaId(manga.id),
  }),
);

export const mangasWithGenres: MockMangaWithGenres[] = mangas.map((manga) => ({
  ...manga,
  genres: getGenresByMangaId(manga.id),
}));

export const mangasWithRelations: MockMangaWithRelations[] = mangas.map(
  (manga) => ({
    ...manga,
    authors: getAuthorsByMangaId(manga.id),
    genres: getGenresByMangaId(manga.id),
  }),
);

export const mangaAuthorsByMangaId: Record<string, MockAuthor[]> =
  Object.fromEntries(
    mangasWithAuthors.map((manga) => [manga.id, manga.authors]),
  );

export const mangaGenresByMangaId: Record<string, MockGenre[]> =
  Object.fromEntries(mangasWithGenres.map((manga) => [manga.id, manga.genres]));

export const mockDatabase = {
  users,
  favoriteLists,
  favoriteListItems,
  mangas,
  volumes,
  chapters,
  pages,
  volumesByMangaId,
  chaptersByVolumeId,
  pagesByChapterId,
  mangasWithAuthors,
  mangasWithGenres,
  mangasWithRelations,
  authors,
  mangaAuthors,
  mangaAuthorsByMangaId,
  genres,
  mangaGenres,
  mangaGenresByMangaId,
};

export const mockTenantFavorites = users.map((user) => {
  const tenantLists = favoriteLists
    .filter((list) => list.userId === user.id)
    .map((list) => {
      const items = favoriteListItems
        .filter((item) => item.favoriteListId === list.id)
        .map((item) => {
          const manga = mangas.find((m) => m.id === item.mangaId) || null;
          const authorLinks = mangaAuthors.filter(
            (link) => link.mangaId === item.mangaId,
          );
          const genreLinks = mangaGenres.filter(
            (link) => link.mangaId === item.mangaId,
          );

          return {
            ...item,
            manga,
            authors: authorLinks
              .map((link) =>
                authors.find((author) => author.id === link.authorId),
              )
              .filter(Boolean),
            genres: genreLinks
              .map((link) => genres.find((genre) => genre.id === link.genreId))
              .filter(Boolean),
          };
        });

      return {
        ...list,
        items,
      };
    });

  return {
    user,
    lists: tenantLists,
  };
});
