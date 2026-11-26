import { NextRequest, NextResponse } from 'next/server';
import { getTenant } from './src/lib/tenants';
import { rootDomain } from './src/lib';

export function proxy(request: NextRequest) {
    const host = request.headers.get('host') ?? '';
    const { pathname } = request.nextUrl;

    // Let's consider the /sites routes are internal, so we return a 404 when a user
    // tries to open them directly.
    if (pathname === '/sites' || pathname.startsWith('/sites/')) {
        return new NextResponse('Not found', { status: 404 });
    }

    // Requests to the root domain go to the SaaS hosting company own pages, such as
    // marketing site and dashboard.
    if (host === rootDomain || host === `www.${rootDomain}`) {
        return NextResponse.next();
    }

    // we find the tenant name here. For acme.yourapp.com, the tenant is "acme".
    // For a custom domain, such as acme.com, we then use the full host as the name.
    const suffix = `.${rootDomain}`;
    const tenant = host.endsWith(suffix) ? host.slice(0, -suffix.length) : host;

    // Here, we return the 404 in the proxy, before any page renders.
    // A page that calls notFound() inside Suspense still responds with status 200.
    if (!getTenant(tenant)) {
        return new NextResponse(`Not found tenant - ${tenant}`, { status: 404 });
    }

    // We clone nextUrl instead of building a new URL, so that the query
    // string, such as ?page=2, stays on the request. So this will be just a URL rewrite
    const url = request.nextUrl.clone();
    url.pathname = `/sites/${tenant}${pathname}`;

    return NextResponse.rewrite(url);
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};