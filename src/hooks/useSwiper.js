// src/hooks/useSwiper.js
//
// ╔═══════════════════════════════════════════════════════════════════════╗
// ║  УНИВЕРСАЛЬНЫЙ ХУК СВАЙПА                                             ║
// ║  Основа для любого слайдера / карусели в проекте                      ║
// ║                                                                       ║
// ║  Цепочка вызовов:                                                     ║
// ║  Hero.jsx  →  useHeroSlider.js  →  useSwiper.js  (этот файл)         ║
// ║                                                                       ║
// ║  Где ещё можно использовать напрямую:                                 ║
// ║  • Карусель товаров     useSwiper({ total, autoplay: false })         ║
// ║  • Карусель категорий   useSwiper({ total, loop: false })             ║
// ║  • Любой слайдер        useSwiper({ total, ...опции })                ║
// ╚═══════════════════════════════════════════════════════════════════════╝
//
// МИНИМУМ:
//   const { current, goTo, swiperHandlers } = useSwiper({ total: 3 })
//   <div {...swiperHandlers}>...</div>
//
// ВСЕ ОПЦИИ:
//   useSwiper({
//     total,            // number  — кол-во слайдов (обязательно)
//     autoplay,         // boolean — авто-переключение       (default: false)
//     delay,            // number  — мс между слайдами       (default: 4000)
//     pauseOnHover,     // boolean — пауза при hover          (default: true)
//     swipeThreshold,   // number  — мин. px для свайпа       (default: 50)
//     loop,             // boolean — зацикленность            (default: true)
//     onChange,         // (index) => void — колбэк при смене (default: -)
//   })
//
// ВОЗВРАЩАЕТ:
//   current         — текущий индекс (number)
//   prevIndex       — предыдущий индекс (number | null)
//   direction       — 'left' | 'right'  (для CSS анимации)
//   goTo(i)         — перейти на i-й слайд
//   next()          — следующий слайд
//   prevSlide()     — предыдущий слайд
//   swiperHandlers  — { onTouchStart, onTouchEnd, onMouseEnter, onMouseLeave }
//                     просто spread на контейнер: <div {...swiperHandlers}>

import { useCallback, useEffect, useRef, useState } from 'react'

export function useSwiper({
 total,
 autoplay = false,
 delay = 4000,
 pauseOnHover = true,
 swipeThreshold = 50,
 loop = true,
 onChange
} = {}) {
 const [current, setCurrent] = useState(0)
 const [prevIndex, setPrevIndex] = useState(null)
 const [direction, setDirection] = useState('left')

 const isPaused = useRef(false)
 const touchStartX = useRef(null)
 const touchStartY = useRef(null)

 // ─── Ядро: переключить слайд ────────────────────────────────────────────
 const switchTo = useCallback(
  (nextIndex, dir) => {
   if (nextIndex === current) return
   setDirection(dir)
   setPrevIndex(current)
   setCurrent(nextIndex)
   onChange?.(nextIndex)
  },
  [current, onChange]
 )

 // ─── next / prevSlide ────────────────────────────────────────────────────
 const next = useCallback(() => {
  const i = loop ? (current + 1) % total : Math.min(current + 1, total - 1)
  switchTo(i, 'left')
 }, [current, total, loop, switchTo])

 const prevSlide = useCallback(() => {
  const i = loop ? (current - 1 + total) % total : Math.max(current - 1, 0)
  switchTo(i, 'right')
 }, [current, total, loop, switchTo])

 // ─── Перейти на конкретный индекс (dots / стрелки) ──────────────────────
 const goTo = useCallback(
  (index) => {
   switchTo(index, index > current ? 'left' : 'right')
  },
  [current, switchTo]
 )

 // ─── Автоплей ────────────────────────────────────────────────────────────
 useEffect(() => {
  if (!autoplay || total <= 1) return
  const timer = setInterval(() => {
   if (!isPaused.current) next()
  }, delay)
  return () => clearInterval(timer)
 }, [autoplay, total, delay, next])

 // ─── Touch-свайп ─────────────────────────────────────────────────────────
 //
 // Логика:
 //   1. onTouchStart — запоминаем координату X и Y начала касания
 //   2. onTouchEnd   — считаем deltaX и deltaY
 //      • если |deltaY| > |deltaX| → вертикальный скролл, НЕ перехватываем
 //      • если |deltaX| < threshold → слишком короткий, игнорируем
 //      • deltaX < 0 → свайп влево  → next()
 //      • deltaX > 0 → свайп вправо → prevSlide()
 //
 const onTouchStart = useCallback((e) => {
  touchStartX.current = e.touches[0].clientX
  touchStartY.current = e.touches[0].clientY
 }, [])

 const onTouchEnd = useCallback(
  (e) => {
   if (touchStartX.current === null) return

   const deltaX = e.changedTouches[0].clientX - touchStartX.current
   const deltaY = e.changedTouches[0].clientY - touchStartY.current
   touchStartX.current = null
   touchStartY.current = null

   if (Math.abs(deltaY) > Math.abs(deltaX)) return // вертикальный скролл
   if (Math.abs(deltaX) < swipeThreshold) return // слишком короткий

   if (deltaX < 0)
    next() // ← свайп влево  → следующий
   else prevSlide() // → свайп вправо → предыдущий
  },
  [next, prevSlide, swipeThreshold]
 )

 // ─── Пауза автоплея при наведении мыши ──────────────────────────────────
 const onMouseEnter = useCallback(() => {
  if (pauseOnHover) isPaused.current = true
 }, [pauseOnHover])

 const onMouseLeave = useCallback(() => {
  if (pauseOnHover) isPaused.current = false
 }, [pauseOnHover])

 return {
  current, // текущий индекс
  prevIndex, // предыдущий индекс
  direction, // 'left' | 'right'
  goTo, // goTo(i)
  next, // next()
  prevSlide, // prevSlide()
  swiperHandlers: { onTouchStart, onTouchEnd, onMouseEnter, onMouseLeave }
 }
}
