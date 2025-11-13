import { useEffect, useState } from 'react'
import GlassCard from './GlassCard'

export default function SlotPicker({ cafe, onBook }) {
  const [date, setDate] = useState(new Date().toISOString().slice(0,10))
  const [slots, setSlots] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    if (!cafe) return
    fetch(`${baseUrl}/api/cafes/${cafe.id || cafe._id}/slots?date=${date}`)
      .then(r => r.json())
      .then(setSlots)
      .catch(() => setSlots([]))
  }, [cafe, date])

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-white text-xl font-semibold">Available slots</h3>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} className="rounded-lg bg-white/10 border border-white/20 text-white px-3 py-2" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {slots.length === 0 ? (
          <p className="text-white/70">No slots found for this date.</p>
        ) : (
          slots.map(s => (
            <GlassCard key={s.id} className="p-4 flex items-center justify-between">
              <div>
                <p className="text-white font-medium">{s.start_time} - {s.end_time}</p>
                <p className="text-white/70 text-sm">${s.price.toFixed(2)}</p>
              </div>
              <button onClick={() => onBook(s)} className="rounded-lg bg-white text-gray-900 font-semibold px-4 py-2 hover:bg-white/90">Book</button>
            </GlassCard>
          ))
        )}
      </div>
    </div>
  )
}
