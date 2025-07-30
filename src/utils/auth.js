import Cookies from 'js-cookie';

export const setAuthTokens = (token) => {
  Cookies.set('Inspire-token', token, {
    expires: 7, // 7 days
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  });
};

export const getAuthTokens = () => {
  return {
    token: Cookies.get('Inspire-token')
  };
};

export const removeAuthTokens = () => {
  Cookies.remove('Inspire-token');
};

export const isAuthenticated = () => {
  return !!Cookies.get('Inspire-token');
}; 