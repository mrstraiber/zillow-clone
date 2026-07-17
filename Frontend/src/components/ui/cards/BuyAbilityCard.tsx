import Image from 'next/image';

interface BuyAbilityCardProps {
  imageSrc: string;
  alt: string;
}

export default function BuyAbilityCard({ imageSrc, alt }: BuyAbilityCardProps) {
  return (
    <div className="relative flex flex-col rounded-xl shadow-lg border border-[#cdcdd3] w-full md:min-w-85 overflow-hidden">
      <div>
        <div className="absolute z-100 top-1.5 left-2">
          <span className="bg-red-500 rounded-2xl px-2 py-0.5 text-white font-bold text-xs">
            Within BuyAbility
          </span>
        </div>
        <div className="relative w-full h-42">
          <Image src={imageSrc} alt={alt} fill={true} className="object-cover" priority={true} />
        </div>
      </div>
      <div>
        <div className="p-3 space-y-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
        </div>
      </div>
    </div>
  );
}
