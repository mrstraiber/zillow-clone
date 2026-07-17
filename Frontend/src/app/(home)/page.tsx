'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import SearchableDropdown from '@/components/ui/SearchableDropdown';
import BuyAbilityCard from '@/components/ui/cards/BuyAbilityCard';
import BuyAbilityEstimate from '@/components/modules/BuyAbilityEstimate';
import AuthForm from '@/components/modules/AuthForm';

import recommendedHouse from '@/assets/images/home-page/example-recommended-homes.webp';
import exampleHouse1 from '@/assets/images/home-page/example-house-1.webp';
import exampleHouse2 from '@/assets/images/home-page/example-house-2.webp';
import exampleHouse3 from '@/assets/images/home-page/example-house-3.webp';
import buyHomeLogo from '@/assets/images/home-page/buy-home.webp';
import rentHomeLogo from '@/assets/images/home-page/rent-home.webp';
import sellHomeLogo from '@/assets/images/home-page/sell-home.webp';

export default function App() {
  const [searchInput, setSearchInput] = useState<string>('');
  const [showSearchDropDownList, setShowSearchDropDownList] = useState<boolean>(false);
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false);
  const [coords, setCoords] = useState<{ latitude: number; longitude: number } | null>(null);

  // drived state to show reset button when search input is not empty
  const showResetButton = searchInput.length > 0;

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
    setSearchInput(input);
    setShowSearchDropDownList(true);
  }

  function handleSearchSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function handleResetButton() {
    setSearchInput('');
    document.getElementById('search')?.focus();
  }

  // get user current position using geolocation api
  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude });
        console.log('Current Position:', latitude, longitude);
      },
      () => {
        alert('Error getting geolocation, please try again.');
      },
    );
  }

  function handleLocationSelected() {}

  /*- Side Effects -*/
  // hide dropdown list when user click outside of it
  useEffect(() => {
    function callBack() {
      setShowSearchDropDownList(false);
    }
    document.addEventListener('click', callBack);
    return () => {
      document.removeEventListener('click', callBack);
    };
  });

  // prevent scrolling when login form is open and hide it when user press escape key or click outside of it
  useEffect(() => {
    function CloseModalOnEscapeKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setShowLoginForm(false);
      }
    }

    // function callBack() {
    //   setShowLoginForm(false);
    // }

    // toggle overflow-hidden class on body element to prevent scrolling when login form is open
    document.body.classList.toggle('overflow-hidden', showLoginForm);

    // listen for escape key to close login form
    document.addEventListener('keydown', CloseModalOnEscapeKey);

    // listen for clicks outside of login form to close it
    // document.addEventListener('click', callBack);
    return () => {
      document.removeEventListener('keydown', CloseModalOnEscapeKey);
      // document.removeEventListener('click', callBack);
    };
  });

  return (
    <div>
      <section className="w-full flex">
        <div className="relative w-full h-100 order-0">
          <Image
            src="https://zillowstatic.com/bedrock/app/uploads/sites/55/2026/02/image2-xl%401x.jpg"
            className="object-cover"
            alt="real state agent with family outside home"
            fill={true}
            priority={true}
            // sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="absolute lg:px-35 py-20 w-full order-2">
          <div className="container mx-auto w-full px-20">
            <h1 className="text-6xl/[72px] flex flex-col font-black text-white">
              <span>Rentals. Homes.</span>
              <span>Agents. Loans.</span>
            </h1>
            <div className="w-full mt-5">
              <form onSubmit={handleSearchSubmit}>
                <div className="flex flex-row border-2 bg-white rounded-lg border-gray-300 max-w-full w-130">
                  <input
                    type="text"
                    id="search"
                    placeholder="Enter an address, neighborhood, city, or ZIP code"
                    className="w-full py-6 px-4 focus-within:outline-none"
                    value={searchInput}
                    onChange={handleSearchChange}
                  />
                  <div className="flex flex-row justify-center items-center cursor-pointer">
                    {/* hide button */}
                    {showResetButton && (
                      <button
                        className="px-5 h-full cursor-pointer flex items-center hover:bg-gray-300/50"
                        type="reset"
                        onClick={handleResetButton}
                      >
                        <span>
                          <svg
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                            focusable="false"
                            role="img"
                            className="h-6"
                          >
                            <path
                              stroke="none"
                              d="M16 2a14 14 0 1014 14A14 14 0 0016 2zm5.71 18.29a1 1 0 010 1.42 1 1 0 01-1.42 0L16 17.41l-4.29 4.3a1 1 0 01-1.42 0 1 1 0 010-1.42l4.3-4.29-4.3-4.29a1 1 0 011.42-1.42l4.29 4.3 4.29-4.3a1 1 0 011.42 1.42L17.41 16z"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    )}
                    {/* search button */}
                    <button
                      className="px-5 h-full flex items-center hover:bg-gray-300/50 cursor-pointer"
                      type="submit"
                    >
                      <span>
                        <svg
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          className="h-6"
                        >
                          <path
                            stroke="none"
                            d="M29.41,26.59,23.77,21A12,12,0,0,0,14,2c-.17,0-.33,0-.5,0s-.33,0-.5,0A11,11,0,0,0,2,13c0,.17,0,.33,0,.5s0,.33,0,.5a12,12,0,0,0,19,9.77l5.64,5.64a2,2,0,0,0,2.82-2.82ZM14,22a8,8,0,1,1,8-8A8,8,0,0,1,14,22Z"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                {showSearchDropDownList && (
                  <SearchableDropdown
                    getCurrentPosition={getCurrentPosition}
                    handleLocationSelected={handleLocationSelected}
                    className="absolute z-100 flex flex-row border-2 bg-white rounded-lg border-gray-300 mt-2 max-w-140 w-full h-fit max-h-80 overflow-y-auto"
                  />
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto w-full lg:px-35">
        <div className="p-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-20">
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-xl">Get home recommendations</h1>
              <p className="text-base">Sign in for a more personalized experience.</p>
              <button
                className="px-4 py-2 rounded-xl border border-blue-custom text-blue-custom cursor-pointer w-fit hover:bg-blue-custom/5"
                onClick={() => setShowLoginForm(true)}
              >
                <strong>Sign in</strong>
              </button>
            </div>
            <div className="relative">
              <Image
                src={recommendedHouse}
                alt="example of recommended house"
                className="object-cover"
                priority={true}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
        {showLoginForm && <AuthForm onCloseButton={() => setShowLoginForm(false)} />}
      </section>
      <section className="flex flex-col gap-4 py-12 lg:px-35 container mx-auto w-full h-fit">
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-xl">Find homes you can afford with BuyAbility℠</h1>
          <p className="text-sm font-normal text-[#535364]">
            Answer a few questions. We&apos;ll highlight homes you&apos;re likely to qualify for.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <BuyAbilityEstimate />
          <div className="w-full flex flex-row gap-4 md:overflow-hidden max-[480px]:hidden">
            <BuyAbilityCard imageSrc={exampleHouse1.src} alt="Example of homes" />
            <BuyAbilityCard imageSrc={exampleHouse2.src} alt="Example of homes" />
            <BuyAbilityCard imageSrc={exampleHouse3.src} alt="Example of homes" />
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container mx-auto w-full h-fit lg:px-35 py-15">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 max-h-fit">
            <li className="flex flex-col gap-2 items-center rounded-3xl shadow-xl cursor-pointer min-h-full w-full max-w-95 px-4 py-15 border border-[#cdcdd3] bg-white">
              <div className="relative w-40 h-40">
                <Image
                  src={buyHomeLogo}
                  alt="Buy a home logo"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="text-center">
                <h1 className="font-bold text-xl">Buy a home</h1>
                <p>
                  A real estate agent can provide you with a clear breakdown of costs so that you
                  can avoid surprise expenses.
                </p>
              </div>
              <div className="mt-5 mb-6">
                <button className="px-4 py-2 rounded-xl border border-blue-custom text-blue-custom cursor-pointer w-fit hover:bg-blue-custom/5 font-bold">
                  Find a local agent
                </button>
              </div>
            </li>
            <li className="flex flex-col gap-2 items-center rounded-3xl shadow-xl cursor-pointer min-h-full w-full max-w-95 px-4 py-15 border border-[#cdcdd3] bg-white">
              <div className="relative w-40 h-40">
                <Image
                  src={rentHomeLogo}
                  alt="Rent a home logo"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="text-center">
                <h1 className="font-bold text-xl">Rent a home</h1>
                <p>
                  We’re creating a seamless online experience – from shopping on the largest rental
                  network, to applying, to paying rent.
                </p>
              </div>
              <div className="mt-5 mb-6">
                <button className="px-4 py-2 rounded-xl border border-blue-custom text-blue-custom cursor-pointer w-fit hover:bg-blue-custom/5 font-bold">
                  Find rentals
                </button>
              </div>
            </li>
            <li className="flex flex-col gap-2 items-center rounded-3xl shadow-xl cursor-pointer min-h-full w-full max-w-95 px-4 py-15 border border-[#cdcdd3] bg-white">
              <div className="relative w-40 h-40">
                <Image
                  src={sellHomeLogo}
                  alt="Sell a home logo"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="text-center">
                <h1 className="font-bold text-xl">Sell a home</h1>
                <p>
                  No matter what path you take to sell your home, we can help you navigate a
                  successful sale.
                </p>
              </div>
              <div className="mt-5 mb-6">
                <button className="px-4 py-2 rounded-xl border border-blue-custom text-blue-custom cursor-pointer w-fit hover:bg-blue-custom/5 font-bold">
                  Sell a home
                </button>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
