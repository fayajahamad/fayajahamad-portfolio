import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export async function GET() {
  const username = process.env.GITHUB_USERNAME || site.githubUsername;
  if (!/^[a-zA-Z0-9-]{1,39}$/.test(username)) {
    return NextResponse.json({ error: "Invalid username" }, { status: 400 });
  }
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&per_page=10&type=owner`, {
      headers: { Accept: "application/vnd.github+json", "User-Agent": "engineering-portfolio" },
      next: { revalidate: 3600 },
    });
    if (!response.ok) return NextResponse.json({ error: "GitHub unavailable" }, { status: 503 });
    const payload: unknown = await response.json();
    if (!Array.isArray(payload)) return NextResponse.json({ error: "Invalid API response" }, { status: 502 });
    const repos = payload.filter((p) => p && typeof p === "object" && !p.fork && !p.archived)
      .slice(0, 4).map((p) => ({
        id: p.id, name: p.name, description: p.description, html_url: p.html_url,
        stargazers_count: p.stargazers_count, forks_count: p.forks_count,
        language: p.language, updated_at: p.updated_at,
      }));
    return NextResponse.json({ repos }, { headers: { "Cache-Control": "public, max-age=300, s-maxage=3600" } });
  } catch {
    return NextResponse.json({ error: "Upstream request failed" }, { status: 503 });
  }
}
