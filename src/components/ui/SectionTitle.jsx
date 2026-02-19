// src/components/ui/SectionTitle.jsx
//
// Заголовок секции — красная полоска + лейбл + жирный заголовок
// Используется в TodayProducts, Categories, ThisMonth и т.д.

function SectionTitle({ label, title }) {
 return (
  <div className="flex flex-col gap-2">
   {/* Красная полоска + лейбл */}
   <div className="flex items-center gap-3">
    <div className="w-4 h-9 bg-red-500 rounded-sm" />
    <span className="text-red-500 text-sm font-semibold">{label}</span>
   </div>
   {/* Заголовок */}
   {title && (
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
   )}
  </div>
 )
}

export default SectionTitle
