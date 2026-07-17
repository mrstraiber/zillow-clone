import Link from 'next/link';
export default function SellDropdown() {
  return (
    <div className="flex sm:flex-row gap-5">
      <div className="flex flex-col gap-4">
        <h6 className="font-semibold text-[15px]">Resources</h6>
        <ul className="flex flex-col gap-4">
          <li className="hover:underline text-blue-custom text-[15px]">
            <Link href="sell">Explore your options</Link>
          </li>
          <li className="hover:underline text-blue-custom text-[15px]">
            <Link href="home-valuation">See your home&apos;s Zestimate</Link>
          </li>
          <li className="hover:underline text-blue-custom text-[15px]">
            <Link href="housing-market">US housing market</Link>
          </li>
          <li className="hover:underline text-blue-custom text-[15px]">
            <Link href="learn/category/selling">Sellers guide</Link>
          </li>
        </ul>
      </div>
      <div className="border border-[#cdcdd3] mx-8 sm:min-h-fit"></div>

      <div className="flex flex-col gap-4">
        <h6 className="font-semibold text-[15px]">Selling options</h6>
        <ul className="flex flex-col gap-4">
          <li className="hover:underline text-blue-custom text-[15px]">
            <Link href="professionals/real-estate-agent-reviews">Home Buying Guide</Link>
          </li>
          <li className="hover:underline text-blue-custom text-[15px]">
            <Link href="for-sale-by-owner">Post For Sale by Owner</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
