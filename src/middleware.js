import { NextResponse } from 'next/server';

export function middleware(request) {
  const accessToken = request.cookies.get('access_token');
  const refreshToken = request.cookies.get('refresh_token');

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!accessToken || !refreshToken) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }
  if (request.nextUrl.pathname.startsWith('/auth')) {
    if (accessToken && refreshToken) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth/:path*'],
};
