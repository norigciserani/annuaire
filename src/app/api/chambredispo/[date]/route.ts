import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


const prisma = new PrismaClient()

export async function GET(req:Request, context: any) {
    const { params } = context
    const date: string = params.date  // 2024-02-24
    const datetime: Date = new Date(date)
    const datetime2: Date = new Date(date)
    datetime2.setDate(datetime2.getDate() + 1)
    const chambres = await prisma.chambredispo.findMany({
        where: {
            date: {
                gte: datetime,
                lt: datetime2
            }
        }
    })
    console.log(chambres)
    return NextResponse.json(chambres)
    
}