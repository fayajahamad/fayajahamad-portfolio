import { describe, expect, it } from "vitest";
import { campusInvolvement, workExperience } from "../src/data/experience";

describe("experience and involvement", () => {
  it("lists the two user-provided employment records", () => {
    expect(workExperience.map(item => item.organization)).toEqual(["Medifit Pharmacy", "We Are Team Rocket"]);
  });
  it("retains the dates and work arrangements", () => {
    expect(workExperience[0].period).toBe("Jan 2023 – Present");
    expect(workExperience[1].type).toBe("Contract");
    expect(workExperience[1].period).toBe("Nov 2025 – Feb 2026");
  });
  it("lists both NSBM society memberships", () => {
    expect(campusInvolvement).toHaveLength(2);
    expect(campusInvolvement[0].role).toBe("Faculty of Computing Coordinator");
    expect(campusInvolvement[1].role).toBe("Member");
  });
});
