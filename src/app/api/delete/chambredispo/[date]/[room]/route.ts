import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function DELETE(req: Request, context: any) {
    const { params } = context
    const date = params.date
    const datetime = new Date(date)
    const room: string = params.room
    const chambreadelete = await prisma.chambredispo.findMany({
        where: {
            date: datetime,
            numero: room
        }
    })
    if (chambreadelete.length != 1){
        return NextResponse.json({ "status": "not ok" })
    }
    const deleteChambredispo = await prisma.chambredispo.delete({
        where: {id: chambreadelete[0].id}
    })
    return NextResponse.json({ "status": "ok" })
}