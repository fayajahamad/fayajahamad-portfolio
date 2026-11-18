export const siteUrl = (): string => {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  try {
    const url = new URL(raw);
    return url.protocol === "https:" || url.hostname === "localhost" ? url.origin : "http://localhost:3000";
  } catch {
    return "http://localhost:3000";
  }
};

export function isVerifiedExternalLink(url: string | undefined): url is string {
  if (!url) return false;
  try { return new URL(url).protocol === "https:"; } catch { return false; }
}
