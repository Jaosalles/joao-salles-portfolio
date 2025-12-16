import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Header from './Header';

// Mock next-themes
vi.mock('next-themes', () => ({
  useTheme: () => ({
    resolvedTheme: 'dark',
    setTheme: vi.fn(),
  }),
}));

describe('Header', () => {
  it('renders logo', () => {
    render(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Header />
      </MemoryRouter>
    );
    const logo = screen.getByText(/Dev/i);
    expect(logo).toBeInTheDocument();
  });

  it('renders theme toggle button in desktop view', () => {
    render(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Header />
      </MemoryRouter>
    );
    const themeToggle = screen.getByLabelText(/Toggle theme/i);
    expect(themeToggle).toBeInTheDocument();
  });

  it('opens mobile menu and closes when link clicked or escape pressed', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Header />
      </MemoryRouter>
    );

    const toggle = screen.getByLabelText(/Toggle menu/i);
    await user.click(toggle);

    // Mobile menu item should be visible inside mobile panel
    const mobileMenu = document.getElementById('mobile-menu');
    expect(mobileMenu).toBeInTheDocument();
    const mobileWithin = within(mobileMenu as HTMLElement);
    expect(mobileWithin.getByText(/Sobre/i)).toBeInTheDocument();

    // Header should have glass class when menu open
    const header = screen.getByRole('banner');
    expect(header.className).toMatch(/glass/);

    // Clicking a link navigates to the hash and closes the menu
    await user.click(mobileWithin.getByText(/Sobre/i));
    await waitFor(() => expect(window.location.hash).toBe('#about'));
    await waitFor(() => expect(document.getElementById('mobile-menu')).toBeNull());
  });
});
