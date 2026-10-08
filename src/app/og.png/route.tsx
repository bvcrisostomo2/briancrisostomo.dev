import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { profile } from "@/data/profile";

export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

// Colors match the site's default dark theme with the green accent (globals.css).
const colors = { bg: "#222226", fg: "#ececef", muted: "#a6a6ae", border: "#38383e", accent: "#4ade80" };

/**
 * Loads a TTF from Google Fonts, the same source next/font uses for the site.
 * ImageResponse can't read the WOFF2 files next/font serves to browsers, so this
 * requests the CSS without a browser user agent, which returns TTF links instead.
 */
async function loadGoogleFont(family: string, weight: number) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}`,
  ).then((res) => res.text());
  const url = css.match(/src: url\((.+?)\) format\('truetype'\)/)?.[1];
  if (!url) throw new Error(`Could not find a TTF for ${family} ${weight}`);
  return fetch(url).then((res) => res.arrayBuffer());
}

export async function GET() {
  const [geist, geistSemiBold, geistMono, geistMonoSemiBold] = await Promise.all([
    loadGoogleFont("Geist", 400),
    loadGoogleFont("Geist", 600),
    loadGoogleFont("Geist Mono", 400),
    loadGoogleFont("Geist Mono", 600),
  ]);

  // ImageResponse can't read WebP, so convert the profile photo to JPEG first.
  const photo = await sharp(await readFile(join(process.cwd(), "public", profile.photo)))
    .resize(400, 400)
    .jpeg({ quality: 85 })
    .toBuffer();
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: 80,
          background: colors.bg,
          color: colors.fg,
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            flex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignSelf: "flex-start",
              gap: 14,
              padding: "10px 22px",
              border: `2px solid ${colors.border}`,
              borderRadius: 999,
              fontFamily: "Geist Mono",
              fontSize: 24,
              color: colors.muted,
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 999, background: colors.accent }} />
            {profile.role} @ {profile.currentCompany}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ fontSize: 72, fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.05 }}>
              {profile.name}
            </div>
            <div style={{ fontSize: 32, lineHeight: 1.4, color: colors.muted }}>{profile.headline}</div>
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Geist Mono",
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: "-0.025em",
              color: colors.accent,
            }}
          >
            {profile.domain}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- rendered by ImageResponse, not the browser */}
        <img
          src={photoSrc}
          alt=""
          width={340}
          height={340}
          style={{ borderRadius: 48, border: `2px solid ${colors.border}` }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geist, weight: 400, style: "normal" },
        { name: "Geist", data: geistSemiBold, weight: 600, style: "normal" },
        { name: "Geist Mono", data: geistMono, weight: 400, style: "normal" },
        { name: "Geist Mono", data: geistMonoSemiBold, weight: 600, style: "normal" },
      ],
    },
  );
}
