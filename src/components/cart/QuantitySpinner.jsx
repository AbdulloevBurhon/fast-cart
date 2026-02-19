export default function QuantitySpinner({ value, onChange }) {
 return (
  <div
   className="flex items-center justify-between px-3 border border-gray-300 rounded"
   style={{ width: 76, height: 38 }}
  >
   <span className="text-sm text-gray-800">
    {String(value).padStart(2, '0')}
   </span>
   <div className="flex flex-col">
    <button onClick={() => onChange(value + 1)}>▲</button>
    <button onClick={() => onChange(Math.max(1, value - 1))}>▼</button>
   </div>
  </div>
 )
}
