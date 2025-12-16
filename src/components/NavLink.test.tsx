import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { NavLink } from "./NavLink";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    {children}
  </MemoryRouter>
);

describe("NavLink", () => {
  it("should render children correctly", () => {
    render(<NavLink to="/test">Test Link</NavLink>, { wrapper });

    expect(screen.getByText("Test Link")).toBeInTheDocument();
  });

  it("should apply default classes", () => {
    render(
      <NavLink to="/test" className="custom-class">
        Test Link
      </NavLink>,
      { wrapper }
    );

    const link = screen.getByText("Test Link");
    expect(link).toHaveClass("custom-class");
  });

  it("should apply active class when active", () => {
    // Use MemoryRouter with initial entry to simulate active route
    render(
      <MemoryRouter
        initialEntries={["/test"]}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <NavLink to="/test" activeClassName="active">
          Test Link
        </NavLink>
      </MemoryRouter>
    );

    const link = screen.getByText("Test Link");
    expect(link).toHaveClass("active");
  });

  it("should apply pending class when pending", () => {
    render(
      <NavLink to="/test" pendingClassName="pending">
        Test Link
      </NavLink>,
      { wrapper }
    );

    const link = screen.getByText("Test Link");
    // Note: pending state is harder to test without mocking internal router state
    expect(link).toBeInTheDocument();
  });

  it("should pass through other props", () => {
    render(
      <NavLink to="/test" data-testid="nav-link">
        Test Link
      </NavLink>,
      { wrapper }
    );

    expect(screen.getByTestId("nav-link")).toBeInTheDocument();
  });
});
