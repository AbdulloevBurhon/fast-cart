// hooks/useSearch.js
//
// Вся логика поиска:
// - хранит строку запроса (query)
// - навигирует на /search?q=... при сабмите
// - обрабатывает Enter и клик по иконке
//
// ИСПОЛЬЗОВАНИЕ:
//   const { query, setQuery, handleSearch, handleKeyDown } = useSearch()
//
// КОГДА БУДЕТ БЭКЕНД:
//   Вариант А — навигация на страницу поиска (текущее поведение):
//     navigate(`/search?q=${encoded}`)
//
//   Вариант Б — глобальный стейт (Zustand):
//     useSearchStore.getState().setQuery(trimmed)
//     navigate('/search')
//
//   Вариант В — inline поиск без навигации (фильтрация на той же странице):
//     onSearch(trimmed)  ← колбэк пропом из родителя

import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function useSearch() {
 const navigate = useNavigate()
 const [query, setQuery] = useState('')

 // ── Выполнить поиск ───────────────────────────────────────────────────────
 const handleSearch = useCallback(() => {
  const trimmed = query.trim()
  if (!trimmed) return

  // Навигация на страницу результатов
  // Заменить на нужный вариант когда будет бэкенд (см. комментарий выше)
  navigate(`/search?q=${encodeURIComponent(trimmed)}`)
 }, [query, navigate])

 // ── Обработчик клавиши Enter ──────────────────────────────────────────────
 const handleKeyDown = useCallback(
  (e) => {
   if (e.key === 'Enter') handleSearch()
  },
  [handleSearch]
 )

 // ── Сброс поля ────────────────────────────────────────────────────────────
 const clearQuery = useCallback(() => {
  setQuery('')
 }, [])

 return {
  query, // string — текущий текст в инпуте
  setQuery, // (value: string) => void — onChange инпута
  handleSearch, // () => void — клик по иконке
  handleKeyDown, // (e) => void — onKeyDown инпута
  clearQuery // () => void — сброс (опционально)
 }
}
