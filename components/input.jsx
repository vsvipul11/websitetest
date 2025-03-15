export default function Input({ label, error, ...props }) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-[#E5E7EB] text-[15px] font-medium mb-2">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-[14px] bg-[#1C1C1E] border ${
          error ? 'border-red-500' : 'border-[#2C2C2E]'
        } rounded-lg text-[#E5E7EB] placeholder-[#6B7280] focus:outline-none focus:border-[#00ff9d] transition-colors text-[15px]`}
        {...props}
      />
      {error && (
        <p className="text-[#FF4444] text-sm mt-1">{error}</p>
      )}
    </div>
  )
}

