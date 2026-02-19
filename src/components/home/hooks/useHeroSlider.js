// src/components/home/hooks/useHeroSlider.js
//
// ╔═══════════════════════════════════════════════════════════════════════╗
// ║  ХУК ДЛЯ HERO БАННЕРА                                                 ║
// ║                                                                       ║
// ║  Цепочка:  Hero.jsx  →  useHeroSlider.js  →  useSwiper.js            ║
// ║                                                                       ║
// ║  Здесь хранится:                                                      ║
// ║  • TEMP_SLIDES — данные баннеров (до подключения бэкенда)             ║
// ║  • useHeroSlider — настройки свайпа специфичные для Hero              ║
// ║                                                                       ║
// ║  Менять логику свайпа → идёшь в useSwiper.js                         ║
// ║  Менять настройки Hero (delay, threshold) → меняешь здесь            ║
// ╚═══════════════════════════════════════════════════════════════════════╝
//
// ─── Структура слайда (контракт с бэкендом) ─────────────────────────────
// {
//   id:           number   — уникальный ID баннера в БД
//   brand:        string   — название бренда
//   brandLogoUrl: string   — URL логотипа бренда (CDN / S3)
//   title:        string   — заголовок, \n = перенос строки
//   ctaText:      string   — текст кнопки ('Shop Now')
//   ctaLink:      string   — ссылка кнопки ('/products?brand=apple')
//   image:        string   — URL изображения товара на баннере
//   theme: {
//     bg:         string   — CSS background (цвет или градиент)
//     glowColor:  string   — hex цвет свечения за изображением
//     textColor:  string   — цвет текста ('white' | '#000' | любой hex)
//     dotActive:  string   — цвет активного dot-индикатора
//   }
// }
//
// ─── Подключение бэкенда (3 шага) ───────────────────────────────────────
//   1. Удалить TEMP_SLIDES ниже
//   2. В HomeTop.jsx получить данные:
//        const { data: slides } = useBanners('home_hero')
//        // GET /api/banners?placement=home_hero  →  { data: Slide[] }
//   3. Передать пропом:
//        <Hero slides={slides} />

import { useSwiper } from '../../../hooks/useSwiper'

// ─── TEMP: удалить когда будет бэкенд ────────────────────────────────────
export const TEMP_SLIDES = [
 {
  id: 1,
  brand: 'iPhone 14 Series',
  title: 'Up to 10%\noff Voucher',
  ctaText: 'Shop Now',
  ctaLink: '/products?brand=apple',
  image: 'banner.png',
  brandLogoType: 'apple', // TEMP → заменится на brandLogoUrl
  // brandLogoUrl: 'https://cdn.example.com/logos/apple.svg',
  theme: {
   bg: '#000000',
   glowColor: '#7c3aed',
   textColor: 'white',
   dotActive: '#ef4444'
  }
 },
 {
  id: 2,
  brand: 'Samsung Galaxy',
  title: 'Galaxy S24\nUp to 20% off',
  ctaText: 'Shop Now',
  ctaLink: '/products?brand=samsung',
  image: 'banner1.png',
  brandLogoType: 'samsung',
  theme: {
   bg: 'linear-gradient(135deg, #0a0a2e 0%, #1a1a4e 100%)',
   glowColor: '#3b82f6',
   textColor: 'white',
   dotActive: '#3b82f6'
  }
 }
 // ── Шаблон нового баннера ──────────────────────────────────────────────
 // {
 //   id: 3,
 //   brand: 'Название бренда',
 //   title: 'Строка 1\nСтрока 2',
 //   ctaText: 'Shop Now',
 //   ctaLink: '/products?brand=...',
 //   image: 'banner-filename.png',
 //   brandLogoType: 'custom',      // или убери и добавь brandLogoUrl
 //   theme: {
 //     bg:        '#1a1a1a',       // любой цвет или CSS градиент
 //     glowColor: '#f59e0b',       // цвет свечения
 //     textColor: 'white',
 //     dotActive: '#f59e0b',
 //   },
 // },
]
// ─────────────────────────────────────────────────────────────────────────

// ─── Хук для Hero: вызывает useSwiper с нужными настройками ─────────────
//
//  Настройки Hero:
//  • autoplay: true        — баннер всегда листается автоматически
//  • delay: 4000           — 4 сек между слайдами
//  • pauseOnHover: true    — пауза когда мышь над баннером
//  • swipeThreshold: 50    — минимум 50px для засчитывания свайпа
//  • loop: true            — бесконечная прокрутка
//
export function useHeroSlider(total) {
 return useSwiper({
  total,
  autoplay: true,
  delay: 4000,
  pauseOnHover: true,
  swipeThreshold: 50,
  loop: true
 })
}
