function Button({ children, variant = 'primary', ...props }) {
 const styles = {
  primary: 'bg-red-500 text-white',
  outline: 'border border-gray-400'
 }

 return (
  <button className={`px-6 py-2 rounded ${styles[variant]}`} {...props}>
   {children}
  </button>
 )
}
export default Button
