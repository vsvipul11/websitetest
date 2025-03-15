export default function PackCard({ image, title, description, price }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-[#1C1C1E] to-[#1C1C1E]/80">
        <img 
          src={image}
          alt={title}
          className="w-full aspect-square object-contain p-4 transition-transform group-hover:scale-105 duration-300"
        />
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="text-[15px] font-medium text-white">{title}</h3>
        <p className="text-[13px] text-[#6B7280]">{description}</p>
        <button className="mt-2 px-4 py-2 bg-[#1C1C1E] rounded-lg text-[13px] text-white hover:bg-[#2C2C2E] transition-colors flex items-center">
          Buy Now
          <div className="flex items-center gap-1 ml-2">
            <img src="/coin.svg" alt="LX" className="w-4 h-4" />
            <span className="text-[#FFA500]">{price}</span>
          </div>
        </button>
      </div>
    </div>
  )
}

