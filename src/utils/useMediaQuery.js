
import { useEffect, useState } from 'react';

export const useMediaQuery = (mediaQuery) => {
  const query = mediaQuery
  const [isVerified, setIsVerified] = useState(
    typeof window === 'object' && !!window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setIsVerified(!!mediaQueryList.matches);

    try {
      mediaQueryList.addEventListener('change', documentChangeHandler);
    } catch (e) {
      mediaQueryList.addListener(documentChangeHandler);
    }

    documentChangeHandler();
    return () => {
      try {
        mediaQueryList.removeEventListener('change', documentChangeHandler);
      } catch (e) {
        mediaQueryList.removeListener(documentChangeHandler);
      }
    };
  }, [query]);

  return isVerified;
};
