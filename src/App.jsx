import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CafeCard from './components/CafeCard'
import SlotPicker from './components/SlotPicker'

function App() {
  const [cafes, setCafes] = useState([])
  const [selectedCafe, setSelectedCafe] = useState(null)
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [bookingStatus, setBookingStatus] = useState(null)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/api/cafes`)
      .then(r => r.json())
      .then(setCafes)
      .catch(() => setCafes([]))
  }, [])

  const handleBook = async (slot) => {
    setSelectedSlot(slot)
    setBookingStatus('processing')
    try {
      const res = await fetch(`${baseUrl}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cafe_id: selectedCafe.id || selectedCafe._id,
          slot_id: slot.id || slot._id,
          customer_name: 'Guest',
          customer_email: 'guest@example.com'
        })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Booking failed')
      setBookingStatus('success')
    } catch (e) {
      setBookingStatus(`error:${e.message}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b12] via-[#0b0b12] to-[#111122] text-white">
      <Navbar />
      <Hero />

      <section id="cafes" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-6">Top Gaming Cafes</h2>
        <p className="text-white/70 mb-8">Pick a cafe to view available slots and book instantly.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {cafes.map(c => (
            <CafeCard key={c.id || c._id} cafe={c} onSelect={setSelectedCafe} />
          ))}
        </div>

        {selectedCafe && (
          <div className="mt-12">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-semibold">{selectedCafe.name}</h3>
              <button onClick={() => setSelectedCafe(null)} className="text-white/70 hover:text-white">Close</button>
            </div>
            <SlotPicker cafe={selectedCafe} onBook={handleBook} />
            {bookingStatus && (
              <div className="mt-4">
                {bookingStatus === 'processing' && <p className="text-white/80">Booking your slot...</p>}
                {bookingStatus === 'success' && <p className="text-green-400">Booking confirmed! Check your email.</p>}
                {bookingStatus.startsWith?.('error') && <p className="text-red-400">{bookingStatus.replace('error:', '')}</p>}
              </div>
            )}
          </div>
        )}
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-white/60">
        Built with love for gamers. © {new Date().getFullYear()} GameBook
      </footer>
    </div>
  )
}

export default App
