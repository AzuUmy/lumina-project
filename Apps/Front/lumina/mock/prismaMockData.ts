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
