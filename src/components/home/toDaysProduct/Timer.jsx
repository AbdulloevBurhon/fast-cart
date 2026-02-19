// Вспомогательный файл для чистоты кода
import { useEffect, useState } from 'react'

function useCountdown(targetDate) {
 const calc = () => {
  const diff = Math.max(0, targetDate - Date.now())
  return {
   days: Math.floor(diff / 86400000),
   hours: Math.floor((diff % 86400000) / 3600000),
   minutes: Math.floor((diff % 3600000) / 60000),
   seconds: Math.floor((diff % 60000) / 1000)
  }
 }
 const [time, setTime] = useState(calc)
 useEffect(() => {
  const t = setInterval(() => setTime(calc()), 1000)
  return () => clearInterval(t)
 }, [calc, targetDate])
 return time
}

const TimerBlock = ({ value, label }) => (
 <div className="flex flex-col items-center min-w-8">
  <span className="text-[10px] text-black font-bold mb-1">{label}</span>
  <span className="text-3xl font-bold tracking-wider">
   {String(value).padStart(2, '0')}
  </span>
 </div>
)

const Colon = () => (
 <span className="text-[#E07575] font-bold text-2xl self-end mb-1">:</span>
)

export function Timer({ targetDate }) {
 const { days, hours, minutes, seconds } = useCountdown(targetDate)
 return (
  <div className="flex items-center gap-4">
   <TimerBlock value={days} label="Days" />
   <Colon />
   <TimerBlock value={hours} label="Hours" />
   <Colon />
   <TimerBlock value={minutes} label="Minutes" />
   <Colon />
   <TimerBlock value={seconds} label="Seconds" />
  </div>
 )
}
