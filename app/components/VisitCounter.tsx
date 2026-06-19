'use client'
import { useEffect, useState } from 'react'

export default function VisitCounter() {
  const [count, setCount] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://azizzoaib.goatcounter.com/counter/TOTAL.json')
      .then(r => r.json())
      .then(d => setCount(d.count))
      .catch(() => {})
  }, [])

  if (count === null) return null

  return (
    <div className="mt-3 flex justify-center items-center gap-2 text-slate-500 text-sm">
      <span>👁</span>
      <span className="text-slate-400 font-semibold text-base">{count}</span>
      <span>visits</span>
    </div>
  )
}
