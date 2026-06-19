import { generatePoster } from "../utils/posterGenerator.js";

/* ============================================================
   SAMPLE MOVIE DATASET
   20 movies stored as a plain JS array — no backend, no external
   API. Each movie's "poster" is generated locally (see
   utils/posterGenerator.js) so the whole app works fully offline.
============================================================ */

const rawMovies = [
  {
    id: 1,
    title: "Edge of Tomorrow Protocol",
    rating: 8.4,
    year: 2024,
    genre: "Sci-Fi",
    description:
      "A soldier relives the same brutal battle over and over, growing stronger each time, as he races to stop an alien invasion before it consumes Earth.",
  },
  {
    id: 2,
    title: "The Last Heist",
    rating: 7.8,
    year: 2023,
    genre: "Action",
    description:
      "A retired thief is pulled back for one final job that spirals into a citywide chase against a ruthless crime syndicate.",
  },
  {
    id: 3,
    title: "Laughing Stock",
    rating: 7.2,
    year: 2022,
    genre: "Comedy",
    description:
      "A failing stand-up comedian accidentally becomes an internet sensation for all the wrong reasons, and has to decide if fame is worth his dignity.",
  },
  {
    id: 4,
    title: "Quiet Rivers",
    rating: 8.7,
    year: 2021,
    genre: "Drama",
    description:
      "Three estranged siblings reunite at their childhood home after their father's death, uncovering long-buried family secrets.",
  },
  {
    id: 5,
    title: "Nebula's Edge",
    rating: 8.1,
    year: 2024,
    genre: "Sci-Fi",
    description:
      "A deep-space mining crew discovers an ancient signal that may not be a distress call — but a warning.",
  },
  {
    id: 6,
    title: "Whispers in the Dark",
    rating: 7.5,
    year: 2023,
    genre: "Horror",
    description:
      "A family moves into an old countryside manor, only to realize something has been waiting for them in the walls.",
  },
  {
    id: 7,
    title: "Hearts in Paris",
    rating: 7.0,
    year: 2020,
    genre: "Romance",
    description:
      "Two strangers keep crossing paths across the city of Paris over the course of a single unforgettable summer.",
  },
  {
    id: 8,
    title: "Kingdom of Embers",
    rating: 8.9,
    year: 2022,
    genre: "Fantasy",
    description:
      "An exiled princess must reclaim her throne with the help of a dragon bound to her by an ancient, dangerous pact.",
  },
  {
    id: 9,
    title: "The Wire Room",
    rating: 8.3,
    year: 2021,
    genre: "Thriller",
    description:
      "An FBI analyst uncovers a conspiracy inside her own agency, and has only 24 hours to expose it before evidence disappears.",
  },
  {
    id: 10,
    title: "Sunny Side Adventures",
    rating: 7.6,
    year: 2023,
    genre: "Animation",
    description:
      "A curious young fox sets off on a colorful journey across the Whispering Forest to find a legendary lost treasure.",
  },
  {
    id: 11,
    title: "Midnight Verdict",
    rating: 8.0,
    year: 2020,
    genre: "Crime",
    description:
      "A rookie defense attorney takes on a case that exposes corruption running through the entire city justice system.",
  },
  {
    id: 12,
    title: "Iron Horizon",
    rating: 7.9,
    year: 2024,
    genre: "Action",
    description:
      "An elite mercenary squad is sent to retake a hijacked oil platform before it's used as a weapon against the mainland.",
  },
  {
    id: 13,
    title: "The Gravity of Us",
    rating: 8.5,
    year: 2022,
    genre: "Drama",
    description:
      "A single father and his daughter navigate grief, love, and second chances in the year following a life-changing accident.",
  },
  {
    id: 14,
    title: "Comet Chasers",
    rating: 7.4,
    year: 2021,
    genre: "Sci-Fi",
    description:
      "A group of teenage astronomy students discover an incoming comet that scientists have somehow missed — with seven days to convince the world.",
  },
  {
    id: 15,
    title: "Office Chaos",
    rating: 6.9,
    year: 2023,
    genre: "Comedy",
    description:
      "A chronically disorganized startup team has 48 hours to prepare for an investor visit that could make or break the company.",
  },
  {
    id: 16,
    title: "The Hollow Woods",
    rating: 7.1,
    year: 2024,
    genre: "Horror",
    description:
      "Five friends on a camping trip discover the legend of the Hollow Woods is far more real — and far more hungry — than they believed.",
  },
  {
    id: 17,
    title: "Stardust Letters",
    rating: 8.2,
    year: 2020,
    genre: "Romance",
    description:
      "A astronaut and a letter-writer on Earth fall in love through years of correspondence, never having met in person.",
  },
  {
    id: 18,
    title: "Crown of Ashes",
    rating: 8.6,
    year: 2023,
    genre: "Fantasy",
    description:
      "A blacksmith's apprentice discovers she's the last heir to a fallen kingdom, and must choose between hiding or reclaiming her birthright.",
  },
  {
    id: 19,
    title: "The Cartographer",
    rating: 8.8,
    year: 2022,
    genre: "Biography",
    description:
      "The true story of a self-taught mapmaker whose work quietly reshaped how the modern world understood its own borders.",
  },
  {
    id: 20,
    title: "Vault 9 Breach",
    rating: 7.7,
    year: 2024,
    genre: "Thriller",
    description:
      "A cybersecurity expert is forced to break into the very vault she designed after her family is taken hostage.",
  },
];

// Attach a locally-generated poster (SVG data URI) to every movie
const moviesData = rawMovies.map((movie) => ({
  ...movie,
  poster: generatePoster(movie),
}));

export default moviesData;
