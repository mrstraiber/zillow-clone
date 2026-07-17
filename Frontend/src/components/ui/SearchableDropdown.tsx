import LocationSvg from '@/components/svg/LocationSvg';
import RecentHistorySvg from '@/components/svg/RecentHistorySvg';

interface SearchAddressFormProps {
  getCurrentPosition: () => void;
  handleLocationSelected: () => void;
  className: string;
}
export default function SearchAddressForm({
  getCurrentPosition,
  handleLocationSelected,
  className,
}: SearchAddressFormProps) {
  return (
    <section className={className}>
      <div className="w-full">
        <ul className="flex flex-col">
          <li className="hover:bg-sky-50 cursor-pointer">
            <div className="flex flex-row gap-1 items-center px-3 py-2">
              <LocationSvg />
              <button type="button" onClick={getCurrentPosition}>
                <span className="font-normal cursor-pointer">Current Position</span>
              </button>
            </div>
          </li>
        </ul>
        <ul>
          <li className="bg-gray-100">
            <div className="px-3 py-2">
              <span className="font-medium text-sm">SEARCH HISTORY</span>
            </div>
          </li>
        </ul>
        <ul>
          <li className="hover:bg-sky-50 cursor-pointer">
            <div className="flex flex-row gap-1 items-center px-3 py-2">
              <RecentHistorySvg />
              <button type="button" onClick={handleLocationSelected}>
                <span className="font-normal cursor-pointer">Toronto</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
