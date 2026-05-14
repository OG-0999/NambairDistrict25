import { useEffect } from 'react';
import { useLocation } from 'wouter';

// Scroll restoration helper — scrolls to top when visiting specific routes
export default function RouteScrollTop() {
  const [location] = useLocation();

  useEffect(() => {
    // paths that must always open from the top
    const resetPaths = ['/privacy-policy', '/terms-and-conditions'];
    if (resetPaths.includes(location)) {
      // run after next paint to avoid layout shift
      requestAnimationFrame(() => {
        try {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        } catch (e) {
          // ignore in non-browser environments
        }
      });
    }
  }, [location]);

  return null;
}
