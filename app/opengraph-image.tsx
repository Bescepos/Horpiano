import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo/siteConfig";

export const alt = `${siteConfig.name}: ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(120% 120% at 15% 0%, #1E3354 0%, #101D30 45%, #0A1320 100%)",
          color: "#ffffff",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#D9AF45",
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 56, height: 2, background: "#C8992E" }} />
          Premium Author Services
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0 22px",
            marginTop: 28,
            fontSize: 84,
            lineHeight: 1.05,
            fontWeight: 700,
            maxWidth: 980,
          }}
        >
          <span>Transform Your Manuscript Into a</span>
          <span style={{ color: "#E4C46B" }}>Published Success Story</span>
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          Horpiano
        </div>
      </div>
    ),
    { ...size },
  );
}
