import { useEffect, useRef } from 'react'

export default function ParallaxSection({ children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const r = el.getBoundingClientRect()
      const p = Math.min(1, Math.max(0, (window.innerHeight - r.top) / (window.innerHeight + r.height)))
      el.style.setProperty('--parallax', String(p))
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section ref={ref} className="relative py-20">
      <div className="absolute inset-0 -z-10" style={{ transform: 'translate3d(0, calc(var(--parallax, 0) * -40px), 0)' }}>
        <div className="h-full w-full opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.08),transparent_40%)]" />
      </div>
      <div className="relative z-10">{children}</div>
    </section>
  )
}
