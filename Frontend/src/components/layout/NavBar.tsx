'use client';
import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import BuyDropdown from '@/components/ui/navbar-dropdowns/BuyDropdown';
import RentDropdown from '@/components//ui/navbar-dropdowns/RentDropdown';
import SellDropdown from '@/components/ui/navbar-dropdowns/SellDropdown';
import MortgageDropdown from '@/components/ui/navbar-dropdowns/MortgageDropdown';
import FindAgentDropdown from '@/components/ui/navbar-dropdowns/FindAgentDropdown';
import ManageRentalDropdown from '@/components/ui/navbar-dropdowns/ManageRentalDropdown';

export default function NavBar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<string | null>(null);

  return (
    <header className="w-full border-[#cdcdd3]">
      <div className="container mx-auto px-5 lg:px-35">
        <nav role="navigation" className="relative flex items-center justify-between">
          <div>
            <ul
              className="flex flex-row items-center h-20"
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              <li
                className="px-4 h-full flex items-center"
                id="buy"
                onMouseEnter={() => setActiveNav('buy')}
              >
                <Link href="/homes/for-sale" className="hover:text-blue-custom">
                  Buy
                </Link>
              </li>
              <li
                className="px-4 h-full flex items-center"
                id="rent"
                onMouseEnter={() => setActiveNav('rent')}
              >
                <Link href="/homes/for-rent" className="hover:text-blue-custom">
                  Rent
                </Link>
              </li>
              <li
                className="px-4 h-full flex items-center"
                id="sell"
                onMouseEnter={() => setActiveNav('sell')}
              >
                <Link href="/sell" className="hover:text-blue-custom">
                  Sell
                </Link>
              </li>
              <li
                className="px-4 h-full flex items-center"
                id="mortgage"
                onMouseEnter={() => setActiveNav('mortgage')}
              >
                <Link href="/homeloans" className="hover:text-blue-custom">
                  Get a mortgage
                </Link>
              </li>
              <li
                className="px-4 h-full flex items-center"
                id="find-agent"
                onMouseEnter={() => setActiveNav('find-agent')}
              >
                <Link href="/professionals/real-estate-agent" className="hover:text-blue-custom">
                  Find an agent
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Logo />
          </div>
          <div>
            <ul className="flex flex-col md:flex-row px-4 justify-center items-center h-20">
              <li
                className="px-4 h-full flex items-center"
                onMouseEnter={() => {
                  setShowMenu(true);
                  setActiveNav('manage-rental');
                }}
                onMouseLeave={() => setShowMenu(false)}
              >
                <Link href="/rental-manager" className="hover:text-blue-custom">
                  Manage rentals
                </Link>
              </li>
              <li className="px-4 h-full flex items-center">
                <Link href="/partner/advertise" className="hover:text-blue-custom">
                  Advertise
                </Link>
              </li>
              <li className="px-4 h-full flex items-center">
                <Link href="/help" className="hover:text-blue-custom">
                  Get help
                </Link>
              </li>
              <li className="bg-blue-custom hover:transform hover:bg-[#0e3797] cursor-pointer rounded-xl px-2 py-1.5 mx-4 text-white">
                <Link href="/login/identifier" className="cursor-pointer" target="_blank">
                  <button type="button" className="cursor-pointer px-2">
                    <strong>Sign in</strong>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {showMenu && (
        <div
          className="flex absolute md:ml-19.25 border border-[#cdcdd3] py-2 px-4 z-100 bg-white w-full h-fit"
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          <div className="flex container my-5 mx-auto w-full">
            {activeNav === 'buy' && <BuyDropdown />}
            {activeNav === 'rent' && <RentDropdown />}
            {activeNav === 'mortgage' && <MortgageDropdown />}
            {activeNav === 'sell' && <SellDropdown />}
            {activeNav === 'find-agent' && <FindAgentDropdown />}
            {activeNav === 'manage-rental' && <ManageRentalDropdown />}
          </div>
        </div>
      )}
    </header>
  );
}
