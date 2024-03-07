import { NextResponse } from "next/server";

import { PrismaClient } from '@prisma/client'



export async function GET() {
    const prisma = new PrismaClient()
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
}