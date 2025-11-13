import GlassCard from './GlassCard'

export default function CafeCard({ cafe, onSelect }) {
  return (
    <GlassCard className="p-4 hover:bg-white/15 transition">
      <div className="flex gap-4 items-center">
        <img src={cafe.cover_image || `https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop`} alt={cafe.name} className="h-20 w-28 object-cover rounded-xl" />
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg">{cafe.name}</h3>
          <p className="text-white/70 text-sm">{cafe.city} • {cafe.address}</p>
        </div>
        <button onClick={() => onSelect(cafe)} className="rounded-xl bg-white text-gray-900 font-semibold px-4 py-2 hover:bg-white/90">
          View Slots
        </button>
      </div>
    </GlassCard>
  )
}
