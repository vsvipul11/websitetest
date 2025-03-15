export default function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`w-full px-6 py-[14px] text-center font-medium rounded-lg 
      bg-gradient-to-r from-[#FFA500] to-[#FFB800] hover:from-[#FF9500] hover:to-[#FFA500]
      text-black text-[15px] transition-all duration-200 flex items-center justify-center
      disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
      {!props.disabled && <span className="ml-2">→</span>}
    </button>
  )
}

