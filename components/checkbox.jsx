export default function Checkbox({ label, ...props }) {
  return (
    <label className="flex items-start space-x-3 cursor-pointer">
      <div className="relative flex items-start pt-0.5">
        <input
          type="checkbox"
          className="w-4 h-4 border border-[#2C2C2E] rounded bg-[#1C1C1E] checked:bg-[#00ff9d] checked:border-[#00ff9d] transition-colors cursor-pointer"
          {...props}
        />
      </div>
      <span className="text-[13px] text-[#9CA3AF] leading-5">{label}</span>
    </label>
  )
}

