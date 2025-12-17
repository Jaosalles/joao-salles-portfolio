import { LanguageProvider } from '@/features/common/context/LanguageContext';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import Hero from './Hero';

describe('Hero', () => {
  beforeEach(() => {
    // Garantir idioma PT para assert de disponibilidade
    localStorage.setItem('language', 'pt');
  });

  it('should render the main headline', () => {
    render(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>
    );
    const headline = screen.getByText('Senior Frontend Engineer');
    expect(headline).toBeInTheDocument();
  });

  it('should render the availability status', () => {
    render(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>
    );
    const status = screen.getByText('Disponível para novas oportunidades');
    expect(status).toBeInTheDocument();
  });

  it('should render social links', () => {
    render(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>
    );
    const githubLink = screen.getByLabelText(/GitHub profile/i);
    const linkedinLink = screen.getByLabelText(/LinkedIn profile/i);
    const emailLink = screen.getByLabelText(/email/i);

    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(emailLink).toBeInTheDocument();
  });

  it('should have correct GitHub link', () => {
    render(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>
    );
    const githubLink = screen.getByLabelText(/GitHub profile/i);
    expect(githubLink).toHaveAttribute('href', 'https://github.com/jaosalles');
  });

  it('should have correct LinkedIn link', () => {
    render(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>
    );
    const linkedinLink = screen.getByLabelText(/LinkedIn profile/i);
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/joao-pedro-salles-dos-santos-a5358a11a/'
    );
  });
});
