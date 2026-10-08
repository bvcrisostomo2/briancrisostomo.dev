// Generates the site's favicon from the 16x16 pixel-art grid below.
// Edit a pixel, then run `npm run favicon` and commit the regenerated files in src/app/.
import { writeFile } from "node:fs/promises";
import sharp from "sharp";

// Colors from the default dark theme and green accent in src/app/globals.css.
const palette = {
  ".": null, // transparent
  k: "#222226", // --bg (dark)
  m: "#a6a6ae", // --muted (steam)
  g: "#4ade80", // --accent (mug)
  G: "#15803d", // light-theme accent (mug outline and handle)
};

// A green coffee mug with a terminal prompt and three lines of steam.
const grid = `
.....m..........
..m..m..m.......
..m..m..m.......
................
GGGGGGGGGGG.....
GkkkkkkkkkG.....
GgggggggggGGGG..
GgkgggggggGGGGG.
GggkggggggG..GG.
GgggkgggggG..GG.
GggkggggggGGGGG.
GgkggkkkggGGGG..
GgggggggggG.....
.GgggggggG......
..GGGGGGG.......
................
`;

const rows = grid.trim().split("\n");
if (rows.length !== 16 || rows.some((row) => row.length !== 16)) {
  throw new Error("The favicon grid must be exactly 16x16");
}

const pixels = Buffer.alloc(16 * 16 * 4);
rows.forEach((row, y) =>
  [...row].forEach((key, x) => {
    if (!(key in palette)) throw new Error(`Unknown palette key "${key}" at ${x},${y}`);
    const hex = palette[key];
    if (!hex) return;
    const i = (y * 16 + x) * 4;
    pixels.writeUInt32BE(((parseInt(hex.slice(1), 16) << 8) | 0xff) >>> 0, i);
  }),
);

/** Scales the grid up by whole pixels, so edges stay sharp. */
const png = (size) =>
  sharp(pixels, { raw: { width: 16, height: 16, channels: 4 } })
    .resize(size, size, { kernel: sharp.kernel.nearest })
    .png()
    .toBuffer();

/** Packs PNGs into an .ico file (PNG-in-ICO, supported by all modern browsers). */
function ico(images) {
  const header = Buffer.alloc(6 + images.length * 16);
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(({ size, data }, i) => {
    const entry = 6 + i * 16;
    header.writeUInt8(size % 256, entry); // 0 means 256
    header.writeUInt8(size % 256, entry + 1);
    header.writeUInt16LE(1, entry + 4); // color planes
    header.writeUInt16LE(32, entry + 6); // bits per pixel
    header.writeUInt32LE(data.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += data.length;
  });
  return Buffer.concat([header, ...images.map(({ data }) => data)]);
}

const icoSizes = [16, 32, 48];
const icoImages = await Promise.all(icoSizes.map(async (size) => ({ size, data: await png(size) })));
await writeFile("src/app/favicon.ico", ico(icoImages));
await writeFile("src/app/icon.png", await png(512));

// Apple home-screen icons can't be transparent, so put the mug on the site's dark background.
const appleIcon = await sharp({ create: { width: 180, height: 180, channels: 4, background: palette.k } })
  .composite([{ input: await png(160), left: 10, top: 10 }])
  .png()
  .toBuffer();
await writeFile("src/app/apple-icon.png", appleIcon);

console.log("Wrote src/app/favicon.ico, src/app/icon.png and src/app/apple-icon.png");
