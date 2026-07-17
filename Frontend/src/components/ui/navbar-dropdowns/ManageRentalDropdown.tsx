import Link from 'next/link';
export default function ManageRentalDropdown() {
  return (
    <div className="flex sm:flex-row gap-5">
      <div className="flex flex-col gap-5">
        <h6 className="font-semibold text-[15px]">Management tasks</h6>
        <div className="flex flex-col gap-5">
          <ul className="flex flex-col gap-4">
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="#">List your property for rent</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="#">View your properties</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="#">Read your messages</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border border-[#cdcdd3] mx-8 sm:h-fit"></div>

      <div className="flex flex-col gap-4">
        <h6 className="font-semibold text-[15px]">Tools for rental managers</h6>
        <div className="flex flex-sm gap-5">
          <ul className="flex flex-col gap-3">
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/browse/building">Check your property&apos;s rental value</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/browse/building">Screen renters with applications</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/browse/building">Create and manage leases</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/browse/building">Collect rent</Link>
            </li>
          </ul>
          <div className="sm:mx-8"></div>
          <ul className="flex flex-col gap-3">
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/browse/building">Learn about renting out your property</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/browse/building">Search help center</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/browse/building">Explore Zillow Rental Manager</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
