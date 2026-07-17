import Link from 'next/link';
export default function FindAgentDropdown() {
  return (
    <div className="flex sm:flex-row gap-5">
      <div className="flex flex-col gap-4">
        <h6 className="font-semibold text-[15px]">Looking for pros?</h6>
        <div className="flex flex-row gap-5">
          <ul className="flex flex-col gap-4">
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/professionals/real-estate-agent-reviews">Real estate agents</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/professionals/property-manager-reviews">Property managers</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/professionals/real-estate-agent-reviews">Home builders</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/professionals/photographer-reviews">Real estate photographers</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border border-[#cdcdd3] mx-8 sm:h-fit"></div>

      <div className="flex flex-col gap-4">
        <h6 className="font-semibold text-[15px]">I&apos;m pro</h6>
        <div className="flex flex-row gap-5">
          <ul className="flex flex-col gap-4">
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/agents">Agent solutions</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/premier-agent">Agent advertising</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/agent-resource">Agent resource center</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="/premier-agent/agent-account">Create a free agent account</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="#">Real estate business plan</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="#">Real estate agent scripts</Link>
            </li>
            <li className="hover:underline text-blue-custom text-[15px]">
              <Link href="#">Listing flyer templates</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
