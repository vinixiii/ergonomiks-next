import { useEffect, useState } from 'react';
import { setCookie, parseCookies } from 'nookies';

export function usePersistedState(key, initialState) {
  const [state, setState] = useState(() => {
    const storageValue = parseCookies().theme;

    if (storageValue) {
      return storageValue;
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    setCookie(null, key, state, {
      path: '/',
      maxAge: 86400 * 7,
    });
  }, [key, state]);

  return [state, setState];
}
