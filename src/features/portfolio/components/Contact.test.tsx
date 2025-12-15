import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Contact from './Contact'

describe('Contact', () => {
  it('renders contact heading', () => {
    render(<Contact />)
    expect(screen.getByText(/Vamos/i)).toBeInTheDocument()
  })
})
