/* ============================================================
   POSTER GENERATOR
   Since this project must not call any external API or load
   remote images, each movie "poster" is generated locally as an
   inline SVG data URI. This keeps the app 100% self-contained
   and works fully offline.

   Each genre gets its own gradient color pair so posters are
   still visually distinct from one another.
============================================================ */

// Color pairs (start, end) for gradient backgrounds, keyed by genre
const genreGradients = {
  Action: ["#7F1D1D", "#1C1C21"],
  Comedy: ["#92400E", "#1C1C21"],
  Drama: ["#374151", "#1C1C21"],
  "Sci-Fi": ["#0E4D64", "#1C1C21"],
  Thriller: ["#3B0764", "#1C1C21"],
  Animation: ["#155E4D", "#1C1C21"],
  Romance: ["#831843", "#1C1C21"],
  Horror: ["#1A1A1A", "#3F0D0D"],
  Adventure: ["#14532D", "#1C1C21"],
  Crime: ["#1E293B", "#0F172A"],
  Fantasy: ["#4C1D95", "#1C1C21"],
  Biography: ["#78350F", "#1C1C21"],
};

const defaultGradient = ["#27272A", "#1C1C21"];

// Escape special XML characters so titles render safely inside SVG <text>
function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Breaks a long title into up to 3 lines so it fits nicely on the poster
function wrapTitle(title, maxCharsPerLine = 14) {
  const words = title.split(" ");
  const lines = [];
  let currentLine = "";

  words.forEach((word) => {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    if (testLine.length > maxCharsPerLine && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  });
  if (currentLine) lines.push(currentLine);

  return lines.slice(0, 3); // cap at 3 lines
}

/**
 * Generates a poster image as an SVG data URI for the given movie.
 * @param {{ title: string, genre: string, year: number }} movie
 * @returns {string} data URI usable directly in an <img src="">
 */
export function generatePoster({ title, genre, year }) {
  const [colorA, colorB] = genreGradients[genre] || defaultGradient;
  const lines = wrapTitle(title);
  const gradientId = `grad-${title.replace(/[^a-zA-Z0-9]/g, "")}`;

  // Vertically center the block of title lines around y=230
  const lineHeight = 30;
  const startY = 230 - ((lines.length - 1) * lineHeight) / 2;

  const titleTSpans = lines
    .map(
      (line, i) =>
        `<tspan x="150" y="${startY + i * lineHeight}">${escapeXml(line)}</tspan>`
    )
    .join("");

  const svg = `
<svg width="300" height="445" viewBox="0 0 300 445" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${colorA}" />
      <stop offset="100%" stop-color="${colorB}" />
    </linearGradient>
  </defs>

  <rect width="300" height="445" fill="url(#${gradientId})" />

  <!-- film-strip perforation motif along the edges -->
  ${Array.from({ length: 11 })
    .map(
      (_, i) =>
        `<rect x="8" y="${20 + i * 38}" width="10" height="18" rx="2" fill="rgba(255,255,255,0.10)" />
         <rect x="282" y="${20 + i * 38}" width="10" height="18" rx="2" fill="rgba(255,255,255,0.10)" />`
    )
    .join("")}

  <!-- subtle film reel icon -->
  <circle cx="150" cy="110" r="38" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="3" />
  <circle cx="150" cy="110" r="8" fill="rgba(255,255,255,0.18)" />
  <circle cx="150" cy="90" r="6" fill="rgba(255,255,255,0.18)" />
  <circle cx="168" cy="118" r="6" fill="rgba(255,255,255,0.18)" />
  <circle cx="132" cy="118" r="6" fill="rgba(255,255,255,0.18)" />

  <!-- movie title -->
  <text font-family="Bebas Neue, sans-serif" font-size="26" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.5">
    ${titleTSpans}
  </text>

  <!-- genre + year footer -->
  <text x="150" y="400" font-family="Inter, sans-serif" font-size="13" fill="rgba(255,255,255,0.65)" text-anchor="middle" letter-spacing="1.5">
    ${escapeXml(genre.toUpperCase())} • ${year}
  </text>

  <rect x="0" y="0" width="300" height="445" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
</svg>`.trim();

  // Encode as a data URI (encodeURIComponent handles special chars safely)
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
