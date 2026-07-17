import Link from 'next/link';
export default function BuyDropdown() {
  return (
    <div className="flex sm:flex-row gap-5">
      <div className="flex flex-col gap-5">
        <h6 className="font-semibold text-[15px]">Home for sale</h6>
        <div className="flex flex-row gap-5">
          <ul className="flex flex-col gap-4">
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/homes/for-sale">Homes for sale</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/homes/for-sale/foreclosures">Foreclosures</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/homes/fsbo">For sale by owner</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/homes/for-sale/open-houses">Open houses</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/homes/new-homes">New construction</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/homes/coming-soon">Coming soon</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/homes/recently-sold">Recent home sales</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="browse/homes">All homes</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border border-[#cdcdd3] mx-8 sm:min-h-fit"></div>

      <div className="flex flex-col gap-4">
        <h6 className="font-semibold text-[15px]">Resources</h6>
        <ul className="flex flex-col gap-4">
          <li className="hover:underline text-blue-custom text-[15px]">
            <Link href="learn/category/buying">Home Buying Guide</Link>
          </li>
          <li className="hover:underline text-blue-custom text-[15px]">
            <Link href="learn/tag/foreclosure">Foreclosure center</Link>
          </li>
          <li className="hover:underline text-blue-custom text-[15px]">
            <Link href="buy/app-download">Real estate app</Link>
          </li>
          <li className="hover:underline text-blue-custom text-[15px]">
            <Link href="down-payment-assistance">Down payment assistance</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
