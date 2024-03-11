import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(["SINGLEECO", "SINGLEBALCON", "DOUBLEECO", "DOUBLEBALCON", "TWINECO", "TWINBALCON",
"TRIPLEECO", "TRIPLEBALCON", "FAMILLEECO", "FAMILLEBALCON"])
}