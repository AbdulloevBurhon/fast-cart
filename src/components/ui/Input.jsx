function Input({
 leftIcon,
 rightIcon,
 width = '100%',
 height = '40px',
 borderColor = '#ccc',
 backgroundColor = '#fff',
 placeholder = '',
 value,
 onChange,
 className
}) {
 return (
  <div style={{ width }} className="relative flex items-center">
   {/* Left Icon */}
   {leftIcon && (
    <div className="absolute left-3 flex items-center">{leftIcon}</div>
   )}

   <input
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    style={{
     height,
     borderColor,
     backgroundColor,
     paddingLeft: leftIcon ? '35px' : '12px',
     paddingRight: rightIcon ? '35px' : '12px'
    }}
    className={`w-full border rounded-lg outline-none transition focus:ring-2 focus:ring-blue-400 ${className}`}
   />

   {/* Right Icon */}
   {rightIcon && (
    <div className="absolute right-3 flex items-center">{rightIcon}</div>
   )}
  </div>
 )
}

export default Input
