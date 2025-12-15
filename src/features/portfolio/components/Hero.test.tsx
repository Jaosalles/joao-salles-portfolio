import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from './Hero'

describe('Hero', () => {
  it('should render the main headline', () => {
    render(<Hero />)
    const headline = screen.getByText('Senior Frontend Engineer')
    expect(headline).toBeInTheDocument()
  })

  it('should render the availability status', () => {
    render(<Hero />)
    const status = screen.getByText('Disponível para novas oportunidades')
    expect(status).toBeInTheDocument()
  })

  it('should render social links', () => {
    render(<Hero />)
    const githubLink = screen.getByLabelText('GitHub')
    const linkedinLink = screen.getByLabelText('LinkedIn')
    const emailLink = screen.getByLabelText('Email')

    expect(githubLink).toBeInTheDocument()
    expect(linkedinLink).toBeInTheDocument()
    expect(emailLink).toBeInTheDocument()
  })

  it('should have correct GitHub link', () => {
    render(<Hero />)
    const githubLink = screen.getByLabelText('GitHub')
    expect(githubLink).toHaveAttribute('href', 'https://github.com/jaosalles')
  })

  it('should have correct LinkedIn link', () => {
    render(<Hero />)
    const linkedinLink = screen.getByLabelText('LinkedIn')
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/joao-pedro-salles-dos-santos-a5358a11a/')
  })
})
