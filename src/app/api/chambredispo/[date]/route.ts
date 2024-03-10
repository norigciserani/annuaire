import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


const prisma = new PrismaClient()

export async function GET(req:Request, context: any) {
    const { params } = context
    const date: string = params.date  // 2024-02-24
    const datetime: Date = new Date(date)
    const chambres = await prisma.chambredispo.findMany({
        where: {
            date: datetime
        }
    })
    return NextResponse.json(chambres)
    
}