'use client';
import { useState } from 'react';
import ArrowSvg from '../svg/Arrow';
import RealEstateDropdown from '../ui/footer-dropdowns/RealEstateDropdown';
import RentalsDropdown from '../ui/footer-dropdowns/RentalsDropdown';
import MortgageRatesDropdown from '../ui/footer-dropdowns/MortgageRatesDropdown';
import BrowseHomesDropdown from '../ui/footer-dropdowns/BrowseHomesDropdown';
import Link from 'next/link';

type FooterLink = 'realEstate' | 'rental' | 'mortgage' | 'homes';

export default function Footer() {
  const [activeLink, setActiveLink] = useState<FooterLink | null>(null);

  return (
    <section className="container mx-auto w-full h-fit lg:px-35 py-15">
      <div className="p-5">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="font-bold text-xl">About Zillow&apos;s Recommendations</h1>
          <p className="text-[#535364] text-base text-center">
            Recommendations are based on your location and search activity, such as the homes
            you&apos;ve viewed and saved and the filters you&apos;ve used. We use this information
            to bring similar homes to your attention, so you don&apos;t miss out.
          </p>
        </div>
      </div>
      <div className="p-2">
        <ul className="flex flex-row py-6 items-center justify-evenly border-b border-[#cdcdd3]">
          <li className="flex md:flex-row group py-2">
            <button
              type="button"
              className="px-10 group-hover:cursor-pointer "
              onClick={() => {
                setActiveLink((currState) => (currState === 'realEstate' ? null : 'realEstate'));
              }}
            >
              <div className="flex flex-row gap-1.5 items-center group-hover:cursor-pointer">
                <span
                  className={`group-hover:underline group-hover:cursor-pointer ${activeLink === 'realEstate' ? 'underline' : ''}`}
                >
                  Real Estate
                </span>
                <ArrowSvg isOpen={activeLink === 'realEstate'} className="h-4 fill-blue-custom" />
              </div>
            </button>
          </li>
          <div className="md:border-r md:border-[#cdcdd3] w-2 h-8"></div>
          <li className="group py-2">
            <button
              type="button"
              className="px-10 group-hover:cursor-pointer "
              onClick={() => {
                setActiveLink((currState) => (currState === 'rental' ? null : 'rental'));
              }}
            >
              <div className="flex flex-row gap-1.5 items-center group-hover:cursor-pointer">
                <span
                  className={`group-hover:underline group-hover:cursor-pointer ${activeLink === 'rental' ? 'underline' : ''}`}
                >
                  Rentals
                </span>
                <ArrowSvg isOpen={activeLink === 'rental'} className="h-4 fill-blue-custom" />
              </div>
            </button>
          </li>
          <div className="md:border-r md:border-[#cdcdd3] w-2 h-8"></div>
          <li className="group py-2">
            <button
              type="button"
              className="px-10 group-hover:cursor-pointer "
              onClick={() => {
                setActiveLink((currState) => (currState === 'mortgage' ? null : 'mortgage'));
              }}
            >
              <div className="flex flex-row gap-1.5 items-center group-hover:cursor-pointer">
                <span
                  className={`group-hover:underline group-hover:cursor-pointer ${activeLink === 'mortgage' ? 'underline' : ''}`}
                >
                  Mortgage Rates
                </span>
                <ArrowSvg isOpen={activeLink === 'mortgage'} className="h-4 fill-blue-custom" />
              </div>
            </button>
          </li>
          <div className="md:border-r md:border-[#cdcdd3] w-2 h-8"></div>
          <li className="group py-2">
            <button
              type="button"
              className="px-10 group-hover:cursor-pointer "
              onClick={() => {
                setActiveLink((currState) => (currState === 'homes' ? null : 'homes'));
              }}
            >
              <div className="flex flex-row gap-1.5 items-center group-hover:cursor-pointer">
                <span
                  className={`group-hover:underline group-hover:cursor-pointer ${activeLink === 'homes' ? 'underline' : ''}`}
                >
                  Browse Homes
                </span>
                <ArrowSvg isOpen={activeLink === 'homes'} className="h-4 fill-blue-custom" />
              </div>
            </button>
          </li>
        </ul>
      </div>
      <div className="p-5">
        {activeLink === 'realEstate' && <RealEstateDropdown />}
        {activeLink === 'rental' && <RentalsDropdown />}
        {activeLink === 'mortgage' && <MortgageRatesDropdown />}
        {activeLink === 'homes' && <BrowseHomesDropdown />}
      </div>
      <div className="py-5">
        <nav>
          <ul className="grid grid-col-2  gap-4 items-center justify-center">
            <li>
              <Link href="/about" className="hover:underline text-[#2A2A37] text-sm">
                About
              </Link>
            </li>
            <li>
              <Link href="/zestimates" className="hover:underline text-[#2A2A37] text-sm">
                Zestimates
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:underline text-[#2A2A37] text-sm">
                News
              </Link>
            </li>
            <li>
              <Link href="/research" className="hover:underline text-[#2A2A37] text-sm">
                Research
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:underline text-[#2A2A37] text-sm">
                Careers
              </Link>
            </li>
          </ul>
        </nav>
        <div className="text-center py-5">
          <p className="group text-blue-custom text-sm cursor-pointer">
            <span className="hover:underline">Do Not Sell or Share My Personal Information</span>
            <span className="group-hover:pl-3 text-lg px-2 transition">→</span>
          </p>
        </div>
      </div>
    </section>
  );
}
