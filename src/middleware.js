import { NextResponse } from 'next/server';

export function middleware(request) {
  const inspireToken = request.cookies.get('Inspire-token');

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!inspireToken) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  if (request.nextUrl.pathname.startsWith('/login')) {
    if (inspireToken) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
