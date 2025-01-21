import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Add auth-page header for login and other auth routes
const isAuthPage = request.nextUrl.pathname === '/login' ||
                                request.nextUrl.pathname === '/signup' ||
                                request.nextUrl.pathname === '/register' ||
                                request.nextUrl.pathname === '/forgot-password' ||
                                request.nextUrl.pathname === '/dashboard/' ||
                                request.nextUrl.pathname.startsWith('/dashboard/') ||
                                request.nextUrl.pathname === '/settings' ||
                                request.nextUrl.pathname.startsWith('/settings/')

  const headers = new Headers(request.headers)
  headers.set('x-auth-page', isAuthPage ? '1' : '0')

  return NextResponse.next({
    request: {
      headers: headers,
    },
  })
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
