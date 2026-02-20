import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function useSearch() {
 const [query, setQuery] = useState('')
 const navigate = useNavigate()

 const handleSearch = () => {
  const trimmed = query.trim()
  if (!trimmed) return

  navigate(`/products?search=${encodeURIComponent(trimmed)}`)
 }

 const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
   handleSearch()
  }
 }

 return { query, setQuery, handleSearch, handleKeyDown }
}
