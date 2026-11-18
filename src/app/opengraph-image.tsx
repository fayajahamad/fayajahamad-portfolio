import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "74px", backgroundColor: "#3F0D0C", color: "#F7EFE5", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", fontSize: 28, fontWeight: 700, color: "#D9B061" }}>fa.</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", fontSize: 16, letterSpacing: 2, color: "#D9C4A9" }}>SOFTWARE · NETWORKS · SECURITY</div>
        <div style={{ display: "flex", fontSize: 70, fontWeight: 750, letterSpacing: -3 }}>Engineering with purpose.</div>
        <div style={{ display: "flex", fontSize: 30, color: "#D9C4A9" }}>{profile.fullName}</div>
      </div>
      <div style={{ display: "flex", fontSize: 20, color: "#D8D0C5" }}>Network Engineering Undergraduate · NSBM Green University · Sri Lanka</div>
    </div>,
    size,
  );
}
