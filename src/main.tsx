import { ThemeProvider } from 'next-themes';
import { createRoot } from 'react-dom/client';
import emailjs from '@emailjs/browser';
import App from './App.tsx';
import './index.css';

// Initialize EmailJS with public key
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
if (publicKey) {
  emailjs.init(publicKey);
}

createRoot(document.getElementById('root')!).render(
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    enableColorScheme
    disableTransitionOnChange={false}
  >
    <App />
  </ThemeProvider>
);
