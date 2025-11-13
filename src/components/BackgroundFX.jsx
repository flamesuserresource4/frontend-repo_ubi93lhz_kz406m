import { motion } from 'framer-motion'

export default function BackgroundFX() {
  const blobs = [
    { c: 'from-fuchsia-500/30 to-purple-500/10', x: '-20%', y: '-10%', s: 420, d: 18 },
    { c: 'from-cyan-500/30 to-blue-500/10', x: '60%', y: '0%', s: 520, d: 22 },
    { c: 'from-amber-500/30 to-pink-500/10', x: '20%', y: '40%', s: 460, d: 20 }
  ]
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.2, scale: 0.9 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
          className="absolute"
          style={{ left: b.x, top: b.y }}
        >
          <motion.div
            className={`bg-gradient-to-br ${b.c} blur-3xl rounded-full`}
            style={{ width: b.s, height: b.s }}
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: b.d, ease: 'easeInOut', repeat: Infinity }}
          />
        </motion.div>
      ))}

      {/* subtle scanlines / vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(transparent_0px,rgba(255,255,255,0.2)_1px,transparent_2px)] bg-[length:100%_3px]" />
    </div>
  )
}
