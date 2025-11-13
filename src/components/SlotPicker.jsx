import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GlassCard from './GlassCard'

export default function SlotPicker({ cafe, onBook }) {
  const [date, setDate] = useState(new Date().toISOString().slice(0,10))
  const [slots, setSlots] = useState([])
  const [loading, setLoading] = useState(false)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    if (!cafe) return
    setLoading(true)
    fetch(`${baseUrl}/api/cafes/${cafe.id || cafe._id}/slots?date=${date}`)
      .then(r => r.json())
      .then(d => setSlots(d))
      .catch(() => setSlots([]))
      .finally(() => setLoading(false))
  }, [cafe, date])

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-white text-xl font-semibold">Available slots</h3>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} className="rounded-lg bg-white/10 border border-white/20 text-white px-3 py-2" />
      </div>
      <AnimatePresence mode="popLayout">
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-24 rounded-2xl bg-white/5 border border-white/10 animate-pulse" />
            ))}
          </div>
        ) : slots.length === 0 ? (
          <p className="text-white/70">No slots found for this date.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {slots.map(s => (
              <motion.div key={s.id || s._id} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
                <GlassCard className="p-4 flex items-center justify-between group overflow-hidden relative">
                  <div>
                    <p className="text-white font-medium">{s.start_time} - {s.end_time}</p>
                    <p className="text-white/70 text-sm">${Number(s.price).toFixed(2)}</p>
                  </div>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} onClick={() => onBook(s)} className="rounded-lg bg-white text-gray-900 font-semibold px-4 py-2">
                    Book
                  </motion.button>
                  <div className="pointer-events-none absolute -inset-0 opacity-0 group-hover:opacity-100 transition">
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
