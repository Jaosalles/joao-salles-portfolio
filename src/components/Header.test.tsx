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
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    {children}
  </BrowserRouter>
);

describe.skip('Header (moved to features/common)', () => {
  // Tests moved to src/features/common/components/Header.test.tsx
});
