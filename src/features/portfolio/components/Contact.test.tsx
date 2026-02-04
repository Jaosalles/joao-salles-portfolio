import { LanguageProvider } from '@/features/common/context/LanguageContext';
import emailjs from '@emailjs/browser';
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

// Mock emailjs
vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn(),
  },
}));

describe('Contact', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.setItem('language', 'pt');
    // Setup default environment variables
    import.meta.env.VITE_EMAILJS_SERVICE_ID = 'service_test';
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID = 'template_test';
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY = 'public_test';
  });

  const renderWithLang = (ui: React.ReactNode) => render(<LanguageProvider>{ui}</LanguageProvider>);

  it('renders contact heading', () => {
    renderWithLang(<Contact />);
    expect(screen.getByText(/Vamos/i)).toBeInTheDocument();
    expect(screen.getByText(/Conversar\?/i)).toBeInTheDocument();
  });

  it('renders contact information', () => {
    renderWithLang(<Contact />);
    expect(screen.getByText('joaopedrosalles@hotmail.com')).toBeInTheDocument();
    expect(screen.getByText('@jaosalles')).toBeInTheDocument();
    expect(screen.getByText('Brasil (Remoto)')).toBeInTheDocument();
  });

  it('renders form fields', () => {
    renderWithLang(<Contact />);
    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensagem/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Enviar Mensagem/i })).toBeInTheDocument();
  });

  it('shows validation errors when submitting empty form', async () => {
    const user = userEvent.setup();
    renderWithLang(<Contact />);

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
    renderWithLang(<Contact />);

    const emailInput = screen.getByLabelText(/Email/i) as HTMLInputElement;

    // The email input should have type="email" for HTML5 validation
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  it('shows error for short name', async () => {
    const user = userEvent.setup();
    renderWithLang(<Contact />);

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
    renderWithLang(<Contact />);

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
    const mockSend = vi.mocked(emailjs.send);
    mockSend.mockResolvedValueOnce({ ok: true } as any);

    renderWithLang(<Contact />);

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

  it('handles form submission state correctly', async () => {
    const user = userEvent.setup();
    const mockSend = vi.mocked(emailjs.send);
    mockSend.mockResolvedValueOnce({ ok: true } as any);

    renderWithLang(<Contact />);

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

    // Wait for success toast to confirm submission completed
    await waitFor(
      () => {
        expect(sonner.toast.success).toHaveBeenCalled();
      },
      { timeout: 3000 }
    );
  });

  it('renders contact links with correct href attributes', () => {
    renderWithLang(<Contact />);

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
    renderWithLang(<Contact />);

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

  describe('EmailJS Integration', () => {
    it('sends email via EmailJS with correct parameters', async () => {
      const user = userEvent.setup();
      const mockSend = vi.mocked(emailjs.send);
      mockSend.mockResolvedValueOnce({ ok: true } as any);

      renderWithLang(<Contact />);

      const nameInput = screen.getByLabelText(/Nome/i);
      const emailInput = screen.getByLabelText(/Email/i);
      const messageInput = screen.getByLabelText(/Mensagem/i);
      const submitButton = screen.getByRole('button', { name: /Enviar Mensagem/i });

      const testName = 'João Silva';
      const testEmail = 'joao@example.com';
      const testMessage = 'Esta é uma mensagem de teste válida';

      await act(async () => {
        await user.type(nameInput, testName);
        await user.type(emailInput, testEmail);
        await user.type(messageInput, testMessage);
        await user.click(submitButton);
      });

      await waitFor(() => {
        expect(mockSend).toHaveBeenCalledWith(
          'service_test',
          'template_test',
          expect.objectContaining({
            name: testName,
            email: testEmail,
            message: testMessage,
            phone: '',
          }),
          'public_test'
        );
      });
    });

    it('shows success toast when email is sent successfully', async () => {
      const user = userEvent.setup();
      const mockSend = vi.mocked(emailjs.send);
      mockSend.mockResolvedValueOnce({ ok: true } as any);

      renderWithLang(<Contact />);

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

      await waitFor(() => {
        expect(sonner.toast.success).toHaveBeenCalledWith(
          'Mensagem enviada com sucesso!',
          expect.objectContaining({
            description: 'Entrarei em contato em breve.',
          })
        );
      });
    });

    it('shows error toast when EmailJS fails', async () => {
      const user = userEvent.setup();
      const mockSend = vi.mocked(emailjs.send);
      mockSend.mockRejectedValueOnce(new Error('EmailJS Error'));

      renderWithLang(<Contact />);

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

      await waitFor(() => {
        expect(sonner.toast.error).toHaveBeenCalledWith(
          'Erro ao enviar mensagem',
          expect.objectContaining({
            description: 'Por favor, tente novamente ou entre em contato diretamente por email.',
          })
        );
      });
    });

    it('shows error when EmailJS is not configured', async () => {
      const user = userEvent.setup();
      // Simulate missing configuration
      import.meta.env.VITE_EMAILJS_SERVICE_ID = '';
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID = '';
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY = '';

      renderWithLang(<Contact />);

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

      await waitFor(() => {
        expect(sonner.toast.error).toHaveBeenCalledWith(
          'Erro ao enviar mensagem',
          expect.objectContaining({
            description: 'Configuração de email incompleta. Entre em contato diretamente.',
          })
        );
      });

      // EmailJS should not be called when configuration is missing
      expect(emailjs.send).not.toHaveBeenCalled();
    });

    it('includes sent_date in email parameters', async () => {
      const user = userEvent.setup();
      const mockSend = vi.mocked(emailjs.send);
      mockSend.mockResolvedValueOnce({ ok: true } as any);

      renderWithLang(<Contact />);

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

      await waitFor(() => {
        const callArgs = mockSend.mock.calls[0][2];
        expect(callArgs).toHaveProperty('sent_date');
        expect(typeof callArgs.sent_date).toBe('string');
      });
    });

    it('resets form after successful email submission', async () => {
      const user = userEvent.setup();
      const mockSend = vi.mocked(emailjs.send);
      mockSend.mockResolvedValueOnce({ ok: true } as any);

      renderWithLang(<Contact />);

      const nameInput = screen.getByLabelText(/Nome/i) as HTMLInputElement;
      const emailInput = screen.getByLabelText(/Email/i) as HTMLInputElement;
      const messageInput = screen.getByLabelText(/Mensagem/i) as HTMLTextAreaElement;
      const submitButton = screen.getByRole('button', { name: /Enviar Mensagem/i });

      await act(async () => {
        await user.type(nameInput, 'João Silva');
        await user.type(emailInput, 'joao@example.com');
        await user.type(messageInput, 'Esta é uma mensagem de teste válida');
        await user.click(submitButton);
      });

      await waitFor(() => {
        expect(nameInput.value).toBe('');
        expect(emailInput.value).toBe('');
        expect(messageInput.value).toBe('');
      });
    });

    it('does not reset form when email submission fails', async () => {
      const user = userEvent.setup();
      const mockSend = vi.mocked(emailjs.send);
      mockSend.mockRejectedValueOnce(new Error('EmailJS Error'));

      renderWithLang(<Contact />);

      const nameInput = screen.getByLabelText(/Nome/i) as HTMLInputElement;
      const emailInput = screen.getByLabelText(/Email/i) as HTMLInputElement;
      const messageInput = screen.getByLabelText(/Mensagem/i) as HTMLTextAreaElement;
      const submitButton = screen.getByRole('button', { name: /Enviar Mensagem/i });

      await act(async () => {
        await user.type(nameInput, 'João Silva');
        await user.type(emailInput, 'joao@example.com');
        await user.type(messageInput, 'Esta é uma mensagem de teste válida');
        await user.click(submitButton);
      });

      await waitFor(() => {
        // Form should still have values after error
        expect(nameInput.value).toBe('João Silva');
        expect(emailInput.value).toBe('joao@example.com');
        expect(messageInput.value).toBe('Esta é uma mensagem de teste válida');
      });
    });
  });
});
