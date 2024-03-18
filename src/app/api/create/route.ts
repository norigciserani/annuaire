import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

import { z } from "zod"

import type { NextApiRequest, NextApiResponse } from 'next'
import { Payload } from "@prisma/client/runtime/library";

const prisma = new PrismaClient()
export async function POST(req: NextRequest) {
    const dataIn = await req.json() // req.formData()
    
    const user = await prisma.user.create({
        data: dataIn
        // WARNING: bien vérifier la data avant de le mettre dans la db
    })
    return NextResponse.json({status: "ok"})
}
