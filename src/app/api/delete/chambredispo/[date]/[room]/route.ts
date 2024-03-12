import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function DELETE(req: Request, context: any) {
    const { params } = context
    const date = params.date
    const datetime = new Date(date)
    const room: string = params.room
    const chambreadelete = await prisma.chambredispo.deleteMany({
        where: {
            date: datetime,
            numero: room
        }
    })
    // if (chambreadelete.length == 0){
    //     return NextResponse.json({ "status": "not exist" })
    // } else if (chambreadelete.length == 1){
    //     const deleteChambredispo = await prisma.chambredispo.delete({
    //         where: {id: chambreadelete[0].id}
    //     })
    //     return NextResponse.json({ "status": "ok" })
    // } else {
    //     const deleteChambredispo = await prisma.chambredispo.deleteMany(chambreadelete)
    // }
    return NextResponse.json({ "status": "ok" })
}