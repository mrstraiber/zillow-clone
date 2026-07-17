import { stateCapitals } from '@/app/data/USState';
import Link from 'next/link';

export default function RentalsDropdown() {
  return (
    <nav className="p-3 pb-8 border-b border-[#cdcdd3]">
      <ul className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <li className="text-blue-custom hover:underline text-[15px]">
          <Link target="_blank" href="/browse/building">
            Browse all apartments
          </Link>
        </li>
        {stateCapitals.map((capital, index) => (
          <li key={index} className="text-blue-custom hover:underline text-[15px]">
            <Link
              target="_blank"
              href={`/apartments/${capital.replace(/\s+/g, '-').toLowerCase()}`}
            >
              {capital} apartments for rent
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
