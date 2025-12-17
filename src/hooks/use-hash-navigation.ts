import { isGitHubPages } from '@/lib/utils';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useHashNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to section when hash changes
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  const navigateToSection = (sectionId: string) => {
    const hash = `#${sectionId}`;
    if (isGitHubPages()) {
      // For GitHub Pages, update the URL with hash
      navigate(`/${hash}`, { replace: true });
    } else {
      // For local development, just update the hash
      window.location.hash = hash;
    }
  };

  return { navigateToSection };
};
