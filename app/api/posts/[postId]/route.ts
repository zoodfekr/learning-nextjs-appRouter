import { get_postById_service } from "@/lib/postsService";
import { NextResponse } from "next/server";


type requestParams = { params: Promise<{ postId: string }> }

export async function GET(request: Request, { params }: requestParams) {

    const { postId } = await params;

    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");

    console.log(request, name, searchParams);

    const response = {
        data: get_postById_service(Number(postId)) || [],
        id: postId,
    }

    return NextResponse.json(response)
}