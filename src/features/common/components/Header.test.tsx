import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

describe('Header', () => {
  it('renders logo', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    const logo = screen.getByText(/Dev/i)
    expect(logo).toBeInTheDocument()
  })

  it('opens mobile menu and closes when link clicked or escape pressed', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    const toggle = screen.getByLabelText(/Toggle menu/i)
    await user.click(toggle)

    // Mobile menu item should be visible
    expect(screen.getByText(/Sobre/i)).toBeInTheDocument()

    // Header should have glass class when menu open
    const header = screen.getByRole('banner')
    expect(header.className).toMatch(/glass/)

    // Clicking a link closes the menu
    await user.click(screen.getByText(/Sobre/i))
    expect(screen.queryByText(/Sobre/i)).not.toBeInTheDocument()

    // Re-open and test Escape closes
    await user.click(toggle)
    expect(screen.getByText(/Sobre/i)).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByText(/Sobre/i)).not.toBeInTheDocument()
  })
})
