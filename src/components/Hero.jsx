import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#07070c]/30 via-[#07070c]/20 to-[#07070c]/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl will-change-transform"
        >
          <motion.h1
            initial={{ scale: 0.96 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
          >
            Book Your Perfect Gaming Cafe Slot
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-lg text-white/85"
          >
            Discover top gaming cafes, browse real-time availability, and lock your slot in seconds. Built for speed, crafted for vibes.
          </motion.p>
          <div className="mt-8 flex gap-4">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              href="#cafes"
              className="rounded-2xl bg-white text-gray-900 font-semibold px-6 py-3 shadow-2xl shadow-white/10"
            >
              Explore Cafes
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              href="#how"
              className="rounded-2xl bg-transparent border border-white/30 text-white font-semibold px-6 py-3 backdrop-blur-xl"
            >
              How it works
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating glass chips */}
      <motion.div
        className="absolute right-10 bottom-16 hidden md:block"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: [20, -10, 20], opacity: 1 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-2xl px-4 py-3 text-white/90 text-sm shadow-xl">
          🎮 Pro tip: weekends fill fast!
        </div>
      </motion.div>
    </section>
  )
}
