import { parseCookies } from 'nookies';
import jwt from 'jsonwebtoken';

export function authService(context) {
  const cookies = parseCookies(context);
  const token = cookies.token;

  return {
    async getToken() {
      return token;
    },
    async getSession() {
      const session = jwt.decode(token);

      return session;
    },
  };
}
