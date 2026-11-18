import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { ProjectExplorer } from "@/components/projects/project-explorer";

describe("ProjectExplorer", () => {
  it("filters project cards by category", () => {
    render(<ProjectExplorer />);
    expect(screen.getByText(/Showing 5 of 5 projects/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Python", exact: true }));
    expect(screen.getByText(/Showing 2 of 5 projects/)).toBeInTheDocument();
  });
  it("searches and resets", () => {
    render(<ProjectExplorer />);
    fireEvent.change(screen.getByRole("textbox", { name: "Search projects" }), {target: {value:"nonexistent-xyz"}});
    expect(screen.getByText("No matching projects")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Reset filters" }));
    expect(screen.getByText(/Showing 5 of 5 projects/)).toBeInTheDocument();
  });
});
