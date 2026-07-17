import Link from 'next/link';
export default function MortgageDropdown() {
  return (
    <div className="flex sm:flex-row gap-5">
      <div className="flex flex-col gap-2">
        <h6 className="font-semibold text-[15px]">Started a loan application?</h6>
        <p>
          Pick up where you left off on your<br></br> Zillow Home Loans dashboard.
        </p>
        <ul>
          <li className="hover:underline text-blue-custom text-[15px]">
            <Link href="/homeloans/mortgage/dashboard/login">Home loans dashboard</Link>
          </li>
        </ul>
      </div>

      <div className="border border-[#cdcdd3] mx-8 sm:min-h-fit"></div>

      <div className="flex flex-col gap-4">
        <h6 className="font-semibold text-[15px]">Your mortgage</h6>
        <ul className="flex flex-col gap-4">
          <li className="hover:underline text-blue-custom text-[15px]">
            <Link href="/homeloans">Discover Zillow Home Loans</Link>
          </li>
          <li className="hover:underline text-blue-custom text-[15px]">
            <Link href="/homeloans/buyability">Calculate your BuyAbility</Link>
          </li>
          <li className="hover:underline text-blue-custom text-[15px]">
            <Link href="homeloans/eligibility">Get pre-qualified</Link>
          </li>
        </ul>
      </div>

      <div className="border border-[#cdcdd3] mx-8 sm:min-h-fit"></div>

      <div className="flex flex-col gap-4">
        <h6 className="font-semibold text-[15px]">Mortgage tools</h6>
        <ul className="flex flex-col gap-4">
          <li className="hover:underline text-blue-custom text-[15px]">
            <Link href="mortgage-calculator">Estimate your mortgage payment</Link>
          </li>
          <li className="hover:underline text-blue-custom text-[15px]">
            <Link href="/mortgage-rates">See current mortgage rates</Link>
          </li>
          <li className="hover:underline text-blue-custom text-[15px]">
            <Link href="/learn/category/financing">Learn about financing a home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
