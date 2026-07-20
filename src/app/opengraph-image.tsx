import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export const alt = "Zumi | Comida saludable en Mexicali";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #15803d 0%, #16a34a 50%, #14532d 100%)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: 96,
          fontWeight: 700,
          color: "white",
          margin: 0,
          letterSpacing: "-0.02em",
        }}
      >
        Zumi
      </h1>
      <p
        style={{
          fontSize: 36,
          color: "#bbf7d0",
          margin: "20px 0 0",
          textAlign: "center",
          maxWidth: 600,
        }}
      >
        Comida saludable en Mexicali
      </p>
      <div
        style={{
          marginTop: 40,
          display: "flex",
          gap: 16,
        }}
      >
        <span
          style={{
            fontSize: 20,
            color: "#86efac",
            padding: "8px 20px",
            border: "2px solid #86efac",
            borderRadius: 999,
          }}
        >
          Ensaladas
        </span>
        <span
          style={{
            fontSize: 20,
            color: "#86efac",
            padding: "8px 20px",
            border: "2px solid #86efac",
            borderRadius: 999,
          }}
        >
          Wraps
        </span>
        <span
          style={{
            fontSize: 20,
            color: "#86efac",
            padding: "8px 20px",
            border: "2px solid #86efac",
            borderRadius: 999,
          }}
        >
          Sándwiches
        </span>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
