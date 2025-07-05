// app/api/hello/route.ts
import { get_allPosts_service } from '@/lib/postsService'
import { NextResponse } from 'next/server'

export async function GET() {

    return NextResponse.json({
        data: get_allPosts_service(),
        length: get_allPosts_service().length || 0,
        message: 'all posts',
        status: 200
    })
}



export async function POST(request: Request) {
    const body = await request.json()
    return NextResponse.json({ dataReceived: body })
}


