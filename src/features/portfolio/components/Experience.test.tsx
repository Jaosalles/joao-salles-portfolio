import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Experience from './Experience'

describe('Experience', () => {
  it('renders experience header', () => {
    render(<Experience />)
    expect(screen.getByText(/Experiência/i)).toBeInTheDocument()
  })
})
