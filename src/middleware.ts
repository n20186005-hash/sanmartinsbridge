import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';
import { NON_WWW_HOST, SITE_HOST } from './lib/site';

const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const host = request.headers.get('host');

  if (host === NON_WWW_HOST) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.protocol = 'https:';
    redirectUrl.host = SITE_HOST;
    return NextResponse.redirect(redirectUrl, 301);
  }

  return handleI18nRouting(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en|fr|zh-Hant)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
