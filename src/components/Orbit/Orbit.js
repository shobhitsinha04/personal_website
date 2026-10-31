// src/components/Orbit/Orbit.js - decorative orbit animation for the hero
import { useRef, useEffect } from 'react'
import './Orbit.css'

const SATS = [
  { r: 0.34, speed: 0.55, size: 4.5, phase: 0.2, squash: 0.92 },
  { r: 0.52, speed: -0.36, size: 3.5, phase: 2.1, squash: 0.74 },
  { r: 0.72, speed: 0.22, size: 5.5, phase: 4.0, squash: 0.86 },
]

const hexToRgba = (hex, a) => {
  const h = (hex || '').replace('#', '')
  if (h.length !== 6) return `rgba(41,120,181,${a})`
  const n = parseInt(h, 16)
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`
}

const Orbit = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let W = 0
    let H = 0
    let cx = 0
    let cy = 0
    const start = performance.now()

    const palette = () => {
      const host = document.querySelector('.app') || document.documentElement
      const s = getComputedStyle(host)
      return {
        accent: s.getPropertyValue('--clr-primary').trim() || '#2978b5',
        fg: s.getPropertyValue('--clr-fg').trim() || '#555555',
      }
    }

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      W = rect.width
      H = rect.height
      canvas.width = Math.round(W * dpr)
      canvas.height = Math.round(H * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cx = W / 2
      cy = H / 2
    }

    const draw = (now) => {
      const t = (now - start) / 1000
      const { accent, fg } = palette()
      const base = Math.min(W, H) / 2 - 10
      ctx.clearRect(0, 0, W, H)

      // orbit rings
      ctx.lineWidth = 1
      SATS.forEach((s) => {
        const rad = s.r * base
        ctx.strokeStyle = hexToRgba(fg, 0.14)
        ctx.beginPath()
        ctx.ellipse(cx, cy, rad, rad * s.squash, 0, 0, Math.PI * 2)
        ctx.stroke()
      })

      // core
      ctx.fillStyle = hexToRgba(accent, 0.13)
      ctx.beginPath()
      ctx.arc(cx, cy, base * 0.12, 0, Math.PI * 2)
      ctx.fill()
      ctx.strokeStyle = hexToRgba(accent, 0.85)
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.arc(cx, cy, base * 0.12, 0, Math.PI * 2)
      ctx.stroke()

      // satellites with trails
      SATS.forEach((s) => {
        const rad = s.r * base
        const a = s.phase + t * s.speed
        const dir = Math.sign(s.speed) || 1
        for (let i = 10; i >= 1; i--) {
          const ta = a - i * 0.045 * dir
          const x = cx + rad * Math.cos(ta)
          const y = cy + rad * s.squash * Math.sin(ta)
          ctx.fillStyle = hexToRgba(accent, 0.22 * (1 - i / 11))
          ctx.beginPath()
          ctx.arc(x, y, s.size * (1 - i / 16), 0, Math.PI * 2)
          ctx.fill()
        }
        const x = cx + rad * Math.cos(a)
        const y = cy + rad * s.squash * Math.sin(a)
        ctx.fillStyle = accent
        ctx.beginPath()
        ctx.arc(x, y, s.size, 0, Math.PI * 2)
        ctx.fill()
      })

      if (!reduce) raf = requestAnimationFrame(draw)
    }

    resize()
    draw(performance.now())

    const onResize = () => {
      resize()
      if (reduce) draw(performance.now())
    }
    window.addEventListener('resize', onResize)

    const onVisibility = () => {
      if (reduce) return
      if (document.hidden) {
        cancelAnimationFrame(raf)
      } else {
        raf = requestAnimationFrame(draw)
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} className='orbit' aria-hidden='true' />
}

export default Orbit
