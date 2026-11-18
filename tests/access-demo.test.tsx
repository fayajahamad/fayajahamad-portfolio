import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { AccessDemo } from "@/components/sections/access-demo";

vi.mock("motion/react", () => ({ motion: { div: ({ children }: {children: React.ReactNode}) => <div>{children}</div> } }));

describe("AccessDemo", () => {
  it("switches from allowed HR identity to denied contractor", () => {
    render(<AccessDemo />);
    expect(screen.getByText("ACCESS GRANTED")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Contractor" }));
    expect(screen.getByText("ACCESS DENIED")).toBeInTheDocument();
    expect(screen.getByText("contractor.user")).toBeInTheDocument();
  });
});
