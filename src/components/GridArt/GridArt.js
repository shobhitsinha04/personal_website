// src/components/GridArt/GridArt.js - decorative schematic grid for detail blocks
import { useRef, useEffect } from 'react'
import './GridArt.css'

const mulberry = (a) => () => {
  a |= 0
  a = (a + 0x6d2b79f5) | 0
  let t = Math.imul(a ^ (a >>> 15), 1 | a)
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}

const hexToRgba = (hex, al) => {
  const h = (hex || '').replace('#', '')
  if (h.length !== 6) return `rgba(41,120,181,${al})`
  const n = parseInt(h, 16)
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${al})`
}

const GridArt = ({ seed = 0 }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W = 0
    let H = 0

    const palette = () => {
      const host = document.querySelector('.app') || document.documentElement
      const s = getComputedStyle(host)
      return {
        accent: s.getPropertyValue('--clr-primary').trim() || '#2978b5',
        fg: s.getPropertyValue('--clr-fg').trim() || '#555555',
      }
    }

    const draw = () => {
      const { accent, fg } = palette()
      const rng = mulberry(seed * 97 + 7)
      const cols = 8
      const cell = W / cols
      const rows = Math.max(3, Math.round(H / cell))
      ctx.clearRect(0, 0, W, H)

      // faint grid
      ctx.strokeStyle = hexToRgba(fg, 0.1)
      ctx.lineWidth = 1
      for (let c = 1; c < cols; c++) {
        ctx.beginPath()
        ctx.moveTo(c * cell, 0)
        ctx.lineTo(c * cell, H)
        ctx.stroke()
      }
      for (let r = 1; r < rows; r++) {
        ctx.beginPath()
        ctx.moveTo(0, r * cell)
        ctx.lineTo(W, r * cell)
        ctx.stroke()
      }

      // a couple of nested outlined rectangles snapped to the grid
      const rects = 2
      for (let i = 0; i < rects; i++) {
        const x = Math.floor(rng() * (cols - 3)) + 1
        const y = Math.floor(rng() * (rows - 2)) + 1
        const w = Math.floor(rng() * 2) + 2
        const h = Math.floor(rng() * 2) + 1
        ctx.strokeStyle = hexToRgba(fg, 0.22)
        ctx.strokeRect(x * cell, y * cell, w * cell, h * cell)
      }

      // node dots at intersections
      const nodes = 3
      for (let i = 0; i < nodes; i++) {
        const x = (Math.floor(rng() * (cols - 1)) + 1) * cell
        const y = (Math.floor(rng() * (rows - 1)) + 1) * cell
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fillStyle = hexToRgba(accent, 0.9)
        ctx.fill()
        ctx.beginPath()
        ctx.arc(x, y, 9, 0, Math.PI * 2)
        ctx.strokeStyle = hexToRgba(accent, 0.35)
        ctx.stroke()
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
      draw()
    }

    resize()
    window.addEventListener('resize', resize)

    const host = document.querySelector('.app')
    let observer
    if (host) {
      observer = new MutationObserver(draw)
      observer.observe(host, { attributes: true, attributeFilter: ['class'] })
    }

    return () => {
      window.removeEventListener('resize', resize)
      if (observer) observer.disconnect()
    }
  }, [seed])

  return <canvas ref={canvasRef} className='gridart' aria-hidden='true' />
}

export default GridArt
