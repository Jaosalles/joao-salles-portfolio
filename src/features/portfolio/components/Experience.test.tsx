import { LanguageProvider } from '@/features/common/context/LanguageContext';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import Experience from './Experience';

describe('Experience', () => {
  beforeEach(() => {
    localStorage.setItem('language', 'pt');
  });
  it('renders experience header', () => {
    render(
      <LanguageProvider>
        <Experience />
      </LanguageProvider>
    );
    expect(screen.getByText(/Experiência/i)).toBeInTheDocument();
  });
});
