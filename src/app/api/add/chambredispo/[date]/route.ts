import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"


const prisma = new PrismaClient()
export async function POST(req: Request, context: any) {
    const { params } = context
    const dataIn = await req.json()
    const date: string = params.date  // 2024-02-24
    const datetime: Date = new Date(date)
    // const rooms = prisma.chambredispo.findMany()
    const chambredispo = await prisma.chambredispo.create({
        data: {
            date: datetime,
            numero: dataIn.numero,
            typechambre: dataIn.typechambre,
            prix: dataIn.prix,
            occupation: dataIn.occupation,
            boitier: dataIn.boitier,
            code: dataIn.code,
            disponibilite: true
        }
    })
    
    return NextResponse.json({message: "ok"})
}