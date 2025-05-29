import Cookies from 'js-cookie';

export const setAuthTokens = (accessToken, refreshToken) => {
  Cookies.set('access_token', accessToken, {
    expires: 7, // 7 days
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  });
  
  Cookies.set('refresh_token', refreshToken, {
    expires: 7,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  });
};

export const getAuthTokens = () => {
  return {
    accessToken: Cookies.get('access_token'),
    refreshToken: Cookies.get('refresh_token')
  };
};

export const removeAuthTokens = () => {
  Cookies.remove('access_token');
  Cookies.remove('refresh_token');
};

export const isAuthenticated = () => {
  return !!(Cookies.get('access_token') && Cookies.get('refresh_token'));
}; 