import { describe, expect, it } from "vitest";
import { projects, getProject } from "@/data/projects";
import { profile } from "@/data/profile";
import { isVerifiedExternalLink } from "@/lib/site";

describe("portfolio content", () => {
  it("has unique routable project slugs", () => {
    expect(projects.length).toBeGreaterThanOrEqual(4);
    expect(new Set(projects.map((project) => project.slug)).size).toBe(projects.length);
    for (const project of projects) expect(getProject(project.slug)).toEqual(project);
  });
  it("includes honest, inspectable case studies", () => {
    for (const project of projects) {
      expect(project.problem.length).toBeGreaterThan(20);
      expect(project.architecture.length).toBeGreaterThan(1);
      expect(project.validation.length).toBeGreaterThan(0);
      expect(project.technologies.length).toBeGreaterThan(1);
    }
  });
  it("does not render made-up credentials", () => {
    expect(profile.fullName).toBe("Fawsil Ameer Fayaj Ahamad");
    expect(isVerifiedExternalLink("")).toBe(false);
    expect(isVerifiedExternalLink("javascript:alert(1)")).toBe(false);
    expect(isVerifiedExternalLink("https://github.com/fayajahamad")).toBe(true);
  });
});
