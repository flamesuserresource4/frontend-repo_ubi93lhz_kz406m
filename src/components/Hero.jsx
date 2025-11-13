import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight drop-shadow-md">
            Book Your Perfect Gaming Cafe Slot
          </h1>
          <p className="mt-6 text-lg text-white/80">
            Discover top gaming cafes, browse real-time availability, and lock your slot in seconds. Smooth, fast, and built for gamers.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#cafes" className="rounded-xl bg-white text-gray-900 font-semibold px-5 py-3 hover:bg-white/90 transition">
              Explore Cafes
            </a>
            <a href="#how" className="rounded-xl bg-transparent border border-white/30 text-white font-semibold px-5 py-3 hover:bg-white/10 transition">
              How it works
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
