import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as sonner from 'sonner';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Contact from './Contact';

// Mock sonner toast
vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

describe('Contact', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders contact heading', () => {
    render(<Contact />);
    expect(screen.getByText(/Vamos/i)).toBeInTheDocument();
    expect(screen.getByText(/Conversar\?/i)).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<Contact />);
    expect(screen.getByText('joaopedrosalles@hotmail.com')).toBeInTheDocument();
    expect(screen.getByText('@jaosalles')).toBeInTheDocument();
    expect(screen.getByText('Brasil (Remoto)')).toBeInTheDocument();
  });

  it('renders form fields', () => {
    render(<Contact />);
    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensagem/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Enviar Mensagem/i })).toBeInTheDocument();
  });

  it('shows validation errors when submitting empty form', async () => {
    const user = userEvent.setup();
    render(<Contact />);

    const submitButton = screen.getByRole('button', { name: /Enviar Mensagem/i });

    await act(async () => {
      await user.click(submitButton);
    });

    await waitFor(() => {
      expect(screen.getByText(/Nome deve ter pelo menos 2 caracteres/i)).toBeInTheDocument();
      expect(screen.getByText(/Email inválido/i)).toBeInTheDocument();
      expect(screen.getByText(/Mensagem deve ter pelo menos 10 caracteres/i)).toBeInTheDocument();
    });
  });

  it('validates email field correctly', () => {
    render(<Contact />);

    const emailInput = screen.getByLabelText(/Email/i) as HTMLInputElement;

    // The email input should have type="email" for HTML5 validation
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  it('shows error for short name', async () => {
    const user = userEvent.setup();
    render(<Contact />);

    const nameInput = screen.getByLabelText(/Nome/i);
    const submitButton = screen.getByRole('button', { name: /Enviar Mensagem/i });

    await act(async () => {
      await user.type(nameInput, 'A');
      await user.click(submitButton);
    });

    await waitFor(() => {
      expect(screen.getByText(/Nome deve ter pelo menos 2 caracteres/i)).toBeInTheDocument();
    });
  });

  it('shows error for short message', async () => {
    const user = userEvent.setup();
    render(<Contact />);

    const messageInput = screen.getByLabelText(/Mensagem/i);
    const submitButton = screen.getByRole('button', { name: /Enviar Mensagem/i });

    await act(async () => {
      await user.type(messageInput, 'Short');
      await user.click(submitButton);
    });

    await waitFor(() => {
      expect(screen.getByText(/Mensagem deve ter pelo menos 10 caracteres/i)).toBeInTheDocument();
    });
  });

  it('submits form successfully with valid data', async () => {
    const user = userEvent.setup();
    render(<Contact />);

    const nameInput = screen.getByLabelText(/Nome/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageInput = screen.getByLabelText(/Mensagem/i);
    const submitButton = screen.getByRole('button', { name: /Enviar Mensagem/i });

    await act(async () => {
      await user.type(nameInput, 'João Silva');
      await user.type(emailInput, 'joao@example.com');
      await user.type(messageInput, 'Esta é uma mensagem de teste válida');
      await user.click(submitButton);
    });

    // Check if button shows loading state
    await waitFor(() => {
      expect(screen.getByText(/Enviando\.\.\./i)).toBeInTheDocument();
    });

    // Wait for success toast
    await waitFor(
      () => {
        expect(sonner.toast.success).toHaveBeenCalledWith(
          'Mensagem enviada com sucesso!',
          expect.objectContaining({
            description: 'Entrarei em contato em breve.',
          })
        );
      },
      { timeout: 3000 }
    );

    // Check if form is reset
    await waitFor(() => {
      expect(nameInput).toHaveValue('');
      expect(emailInput).toHaveValue('');
      expect(messageInput).toHaveValue('');
    });
  });

  it('disables submit button while submitting', async () => {
    const user = userEvent.setup();
    render(<Contact />);

    const nameInput = screen.getByLabelText(/Nome/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageInput = screen.getByLabelText(/Mensagem/i);
    const submitButton = screen.getByRole('button', { name: /Enviar Mensagem/i });

    await act(async () => {
      await user.type(nameInput, 'João Silva');
      await user.type(emailInput, 'joao@example.com');
      await user.type(messageInput, 'Esta é uma mensagem de teste válida');
      await user.click(submitButton);
    });

    // Button should be disabled during submission
    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });

    // Button should be enabled again after submission
    await waitFor(
      () => {
        expect(submitButton).not.toBeDisabled();
      },
      { timeout: 3000 }
    );
  });

  it('renders contact links with correct href attributes', () => {
    render(<Contact />);

    const emailLink = screen.getByRole('link', { name: /joaopedrosalles@hotmail\.com/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:joaopedrosalles@hotmail.com');

    const linkedinLink = screen.getByRole('link', {
      name: /\/in\/joao-pedro-salles-dos-santos-a5358a11a\//i,
    });
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/joao-pedro-salles-dos-santos-a5358a11a/'
    );
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');

    const githubLink = screen.getByRole('link', { name: /@jaosalles/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/jaosalles');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('applies error styling to invalid fields', async () => {
    const user = userEvent.setup();
    render(<Contact />);

    const nameInput = screen.getByLabelText(/Nome/i);
    const submitButton = screen.getByRole('button', { name: /Enviar Mensagem/i });

    await act(async () => {
      await user.type(nameInput, 'A');
      await user.click(submitButton);
    });

    await waitFor(() => {
      expect(nameInput).toHaveClass('border-red-500');
    });
  });
});
