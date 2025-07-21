import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

    const { pathname } = request.nextUrl
    const token = request.cookies.get('myApp_tokenValue')?.value

    // اگر توکن وجود نداشته باشد و مسیر login نباشد، هدایت به /login
    if (!token && pathname !== '/login') {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    // اگر توکن وجود دارد و کاربر می‌خواهد به login برود، او را به صفحه اصلی بفرست
    if (token && pathname === '/login') {
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
}

// شرط روی مسیر های زیر اجرا نمیشود
export const config = {
    matcher: [
        '/((?!_next|api|static|favicon.ico|users).*)',
    ],
}



