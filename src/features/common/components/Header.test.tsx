import { render, screen } from '@testing-library/react'
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
})
