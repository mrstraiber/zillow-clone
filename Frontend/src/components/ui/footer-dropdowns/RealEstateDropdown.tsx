import { statesNames, statesCodes } from '@/app/data/USState';
import Link from 'next/link';

export default function RealEstateDropdown() {
  return (
    <nav className="p-3 pb-8 border-b border-[#cdcdd3]">
      <ul className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <li className="text-blue-custom hover:underline text-[15px]">
          <Link target="_blank" href="browse/homes">
            Browse all homes
          </Link>
        </li>
        {statesNames.map((stateName, index) => (
          <li key={index} className="text-blue-custom hover:underline text-[15px]">
            <Link target="_blank" href={`/homes/${statesCodes[index].toLowerCase()}`}>
              {stateName} real estate
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
