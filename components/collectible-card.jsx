export default function CollectibleCard({ image, rarity, title, circulation, price }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg bg-[#1C1C1E]">
        <img 
          src={image}
          alt={title}
          className="w-full aspect-[3/4] object-cover transition-transform group-hover:scale-105 duration-300"
        />
        {rarity && (
          <div className={`absolute top-2 left-2 px-2 py-1 rounded text-[11px] font-medium
            ${rarity === 'Legendary' ? 'bg-[#FFD700]/20 text-[#FFD700]' :
              rarity === 'Rare' ? 'bg-[#0080FF]/20 text-[#0080FF]' :
              rarity === 'Limited' ? 'bg-[#00FF00]/20 text-[#00FF00]' :
              'bg-gray-500/20 text-gray-500'
            }`}
          >
            {rarity}
          </div>
        )}
      </div>
      {title && (
        <div className="mt-3 space-y-1">
          <h3 className="text-[15px] font-medium text-white">{title}</h3>
          {circulation && (
            <p className="text-[13px] text-[#6B7280]">{circulation}</p>
          )}
          {price && (
            <div className="flex items-center gap-1 mt-1">
              <span className="text-[13px] text-[#6B7280]">From</span>
              <img src="/coin.svg" alt="LX" className="w-4 h-4" />
              <span className="text-[13px] text-white">{price}</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

