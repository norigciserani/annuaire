import { useRouter } from 'next/router'
import { NextResponse } from 'next/server'

export async function GET(request: Request, context: any) {
    const { params } = context
    return NextResponse.json({"message": params.room})
}