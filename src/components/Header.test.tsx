import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Header from "./Header";

// Mock the useHashNavigation hook
vi.mock("../hooks/useHashNavigation", () => ({
  useHashNavigation: () => ({
    navigateToSection: vi.fn(),
  }),
}));

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe("Header", () => {
  beforeEach(() => {
    // Mock window.scrollY
    Object.defineProperty(window, "scrollY", {
      value: 0,
      writable: true,
    });
  });

  it("should render the logo", () => {
    render(<Header />, { wrapper });

    const logo = screen.getByText("<Dev />");
    expect(logo).toBeInTheDocument();
  });

  it("should render navigation links", () => {
    render(<Header />, { wrapper });

    const navLinks = ["Sobre", "Projetos", "Experiência", "Contato"];
    navLinks.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it("should render CTA button", () => {
    render(<Header />, { wrapper });

    const ctaButton = screen.getByText("Contratar");
    expect(ctaButton).toBeInTheDocument();
  });

  it("should show mobile menu button", () => {
    render(<Header />, { wrapper });

    const menuButton = screen.getByLabelText("Toggle menu");
    expect(menuButton).toBeInTheDocument();
  });

  it("should toggle mobile menu", () => {
    render(<Header />, { wrapper });

    const menuButton = screen.getByLabelText("Toggle menu");

    // Initially menu should not be visible
    expect(screen.queryByText("Sobre")).toBeInTheDocument(); // Desktop version

    // Click to open mobile menu
    fireEvent.click(menuButton);

    // Mobile menu should be visible
    expect(screen.getAllByText("Sobre")).toHaveLength(2); // Desktop and mobile
  });

  it("should apply scrolled class when scrolled", () => {
    // Mock scroll
    Object.defineProperty(window, "scrollY", {
      value: 100,
      writable: true,
    });

    render(<Header />, { wrapper });

    const header = screen.getByRole("banner");
    expect(header).toHaveClass("glass");
  });

  it("should not apply scrolled class when at top", () => {
    Object.defineProperty(window, "scrollY", {
      value: 0,
      writable: true,
    });

    render(<Header />, { wrapper });

    const header = screen.getByRole("banner");
    expect(header).not.toHaveClass("glass");
  });

  it("should close mobile menu when navigation link is clicked", async () => {
    render(<Header />, { wrapper });

    const menuButton = screen.getByLabelText("Toggle menu");

    // Open mobile menu
    fireEvent.click(menuButton);

    // Click on a mobile navigation link
    const mobileLinks = screen.getAllByText("Sobre");
    const mobileLink = mobileLinks[1]; // Second instance (mobile version)

    fireEvent.click(mobileLink);

    // Menu should be closed (only desktop version should remain)
    await waitFor(() => expect(screen.getAllByText("Sobre")).toHaveLength(1));
  });

  it("should close mobile menu when CTA button is clicked", async () => {
    render(<Header />, { wrapper });

    const menuButton = screen.getByLabelText("Toggle menu");

    // Open mobile menu
    fireEvent.click(menuButton);

    // Click on mobile CTA button
    const mobileCTAButton = screen.getAllByText("Contratar")[1];

    fireEvent.click(mobileCTAButton);

    // Menu should be closed
    await waitFor(() => expect(screen.getAllByText("Sobre")).toHaveLength(1));
  });
});
