import { motion } from 'framer-motion'
import GlassCard from './GlassCard'

export default function CafeCard({ cafe, onSelect }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
      <GlassCard className="p-4 hover:bg-white/15 transition relative overflow-hidden">
        <div className="flex gap-4 items-center">
          <div className="relative">
            <img src={cafe.cover_image || `https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop`} alt={cafe.name} className="h-20 w-28 object-cover rounded-xl" />
            <div className="absolute inset-0 rounded-xl bg-black/0 hover:bg-black/10 transition" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold text-lg">{cafe.name}</h3>
            <p className="text-white/70 text-sm">{cafe.city} • {cafe.address}</p>
          </div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} onClick={() => onSelect(cafe)} className="rounded-xl bg-white text-gray-900 font-semibold px-4 py-2 hover:bg-white/90">
            View Slots
          </motion.button>
        </div>

        {/* subtle moving shine */}
        <motion.div className="pointer-events-none absolute -inset-20 opacity-0 hover:opacity-50" animate={{ x: ['-10%', '110%'] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}>
          <div className="w-40 rotate-12 h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>
      </GlassCard>
    </motion.div>
  )
}
