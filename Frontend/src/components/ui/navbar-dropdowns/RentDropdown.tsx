import Link from 'next/link';
export default function RentDropdown() {
  return (
    <div className="flex sm:flex-row gap-5">
      <div className="flex flex-col gap-5">
        <h6 className="font-semibold text-[15px]">Rental listings</h6>
        <ul className="flex flex-col gap-3">
          <li className="hover:underline text-blue-custom text-[15px]">
            <Link href="/homes/for-rent/apartments">Search apartments for rent</Link>
          </li>
          <li className="hover:underline text-blue-custom text-[15px]">
            <Link href="/homes/for-rent/houses">Search houses for rent</Link>
          </li>
          <li className="hover:underline text-blue-custom text-[15px]">
            <Link href="/homes/for-rent">Search all rental listings</Link>
          </li>
          <li className="hover:underline text-blue-custom text-[15px]">
            <Link href="/browse/building">Browse all rental buildings</Link>
          </li>
        </ul>
      </div>

      <div className="border border-[#cdcdd3] mx-8 sm:h-fit"></div>

      <div className="flex flex-col gap-4">
        <h6 className="font-semibold text-[15px]">Tools for renters</h6>
        <div className="flex flex-row gap-5">
          <ul className="flex flex-col gap-4">
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/rent-affordability-calculator">Estimate what you can afford</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/renter-hub/applications">See your applications</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/tours/manage">Manage your tours</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/renter-hub/payment">Pay your rent</Link>
            </li>
          </ul>
          <div className="sm:mx-8"></div>
          <ul className="flex flex-col gap-4">
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/rent/rent-reporting">Build your credit</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/rent/renters-insurance">Get renters insurance</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/rent/rental-vouchers">Explore housing voucher programs</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="learn/category/renting">Learn more about renting</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
