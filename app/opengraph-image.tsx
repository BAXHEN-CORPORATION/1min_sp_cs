import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f8f9ff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.12em",
            color: "#0f172a",
            background: "rgba(15,23,42,0.08)",
            padding: "6px 16px",
            borderRadius: 999,
            marginBottom: 32,
            textTransform: "uppercase",
          }}
        >
          PDF GUIDE
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#0b1c30",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            maxWidth: 820,
            marginBottom: 28,
          }}
        >
          Before you Study Computer Science
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#45464d",
            lineHeight: 1.5,
            maxWidth: 680,
            marginBottom: 48,
          }}
        >
          The practical roadmap I wish I had before spending years learning the
          wrong things.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              background: "#0f172a",
              color: "#ffffff",
              fontSize: 18,
              fontWeight: 600,
              padding: "14px 32px",
              borderRadius: 8,
            }}
          >
            Get the PDF — €7
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#45464d",
              marginLeft: 8,
            }}
          >
            Joined by 12,000+ engineers worldwide
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            fontSize: 20,
            fontWeight: 700,
            color: "#0f172a",
            letterSpacing: "-0.01em",
          }}
        >
          Before CS
        </div>
      </div>
    ),
    size
  );
}
