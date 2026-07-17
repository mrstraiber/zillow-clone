import Image from 'next/image';
import zillowHomeLoanLogo from '@/assets/images/logo/zillow-home-loan-logo.png';

export default function BuyAbilityEstimate() {
  return (
    <div className="flex flex-col gap-3 max-w-90 w-full">
      <div className="rounded-xl border border-[#cdcdd3] p-6">
        <div className="flex flex-col gap-5">
          <div>
            <Image alt="zillow home loans" src={zillowHomeLoanLogo} width={145} height={20} />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row items-center gap-5 justify-between">
              <div>
                <h1 className="font-black text-xl leading-6">$ - -</h1>
                <span className="text-sm font-normal text-[#535364]">Suggested target price</span>
              </div>
              <div>
                <h1 className="font-black text-xl leading-6">$ - -</h1>
                <span className="text-sm font-normal text-[#535364]">BuyAbility℠</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div>
                <h1 className="font-black text-xl leading-6">$ - -</h1>
                <span className="text-sm font-normal text-[#535364]">Mo. payment</span>
              </div>
              <div>
                <h1 className="font-black text-xl leading-6">- - %</h1>
                <span className="text-sm font-normal text-[#535364]">Today&apos;s rate</span>
              </div>
              <div>
                <h1 className="font-black text-xl leading-6">- - %</h1>
                <span className="text-sm font-normal text-[#535364]">APR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          className="w-full rounded-xl bg-blue-custom hover:bg-[#0e3797] py-3 px-4 text-white font-bold cursor-pointer"
          // onClick={}
        >
          Let&apos;s get started
        </button>
      </div>
    </div>
  );
}
