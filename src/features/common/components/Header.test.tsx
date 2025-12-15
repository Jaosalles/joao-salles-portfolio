import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from './Header'

describe('Header', () => {
  it('renders logo', () => {
    render(<Header />)
    const logo = screen.getByText(/Dev/i)
    expect(logo).toBeInTheDocument()
  })
})
