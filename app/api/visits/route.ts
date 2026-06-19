import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const token = process.env.GOATCOUNTER_TOKEN
    if (!token) {
      return NextResponse.json({ count: null })
    }

    const today = new Date().toISOString().split('T')[0]
    const res = await fetch(
      `https://azizzoaib.goatcounter.com/api/v0/stats/total?start=2020-01-01&end=${today}`,
      {
        headers: { Authorization: `Bearer ${token}` },
        next: { revalidate: 300 } // cache for 5 min
      }
    )

    if (!res.ok) return NextResponse.json({ count: null })

    const data = await res.json()
    return NextResponse.json({ count: data.total ?? 0 })
  } catch {
    return NextResponse.json({ count: null })
  }
}
