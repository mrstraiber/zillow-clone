import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="sticky h-screen min-w-fit text-center bg-gray-100 border-t border-r border-[#cdcdd3]">
      <div className="flex flex-row lg:flex-col items-center justify-center p-2 gap-4">
        <Link href="/homes" className="group">
          <div className="flex flex-row lg:flex-col items-center">
            <div className="p-2">
              <svg
                viewBox="0 0 32 32"
                aria-hidden="true"
                className="h-6 fill-[#535364] group-hover:fill-blue-custom"
                focusable="false"
                role="img"
              >
                <path
                  stroke="none"
                  d="M29.41,26.59,23.77,21A12,12,0,0,0,14,2c-.17,0-.33,0-.5,0s-.33,0-.5,0A11,11,0,0,0,2,13c0,.17,0,.33,0,.5s0,.33,0,.5a12,12,0,0,0,19,9.77l5.64,5.64a2,2,0,0,0,2.82-2.82ZM14,22a8,8,0,1,1,8-8A8,8,0,0,1,14,22Z"
                ></path>
              </svg>
            </div>

            <span className="text-[10px] font-semibold text-[#535364] group-hover:text-blue-custom">
              Search
            </span>
          </div>
        </Link>
        <Link href="/myzillow/saved-search" className="group">
          <div className="flex flex-row lg:flex-col items-center">
            <div className="p-2">
              <svg
                viewBox="0 0 32 32"
                aria-hidden="true"
                className="h-6 fill-[#535364] group-hover:fill-blue-custom"
                focusable="false"
                role="img"
              >
                <path
                  stroke="none"
                  d="M29.41,26.59,23.77,21A12,12,0,0,0,14,2c-.17,0-.33,0-.5,0s-.33,0-.5,0A11,11,0,0,0,2,13c0,.17,0,.33,0,.5s0,.33,0,.5a12,12,0,0,0,19,9.77l5.64,5.64a2,2,0,0,0,2.82-2.82ZM18.17,14.87l-.23.24-3.7,3.78a.35.35,0,0,1-.51,0L10,15.11l-.23-.24a2.93,2.93,0,0,1,.27-4.29C12,9,14,11.29,14,11.29s1.67-2.34,3.9-.71A2.87,2.87,0,0,1,18.17,14.87Z"
                ></path>
              </svg>
            </div>
            <span className="text-[10px] font-semibold group-hover:text-blue-custom">Updates</span>
          </div>
        </Link>
        <Link href="/myzillow/favorites" className="group">
          <div className="flex flex-row lg:flex-col items-center">
            <div className="p-2">
              <svg
                viewBox="0 0 32 32"
                aria-hidden="true"
                className="h-6 fill-[#535364] group-hover:fill-blue-custom"
                focusable="false"
                role="img"
              >
                <path
                  stroke="none"
                  d="M27 5.6a7.91 7.91 0 00-10.49.87l-.51.47-.46-.47A7.91 7.91 0 005.05 5.6a8 8 0 00-.76 11.92l.65.66L15.29 28.7a1 1 0 001.42 0l10.35-10.52.65-.66A8 8 0 0027 5.6z"
                ></path>
              </svg>
            </div>
            <span className="text-[10px] font-semibold group-hover:text-blue-custom">
              Favorites
            </span>
          </div>
        </Link>
        <Link href="/homeloans" className="group">
          <div className="flex flex-row lg:flex-col items-center">
            <div className="p-2">
              <svg
                viewBox="0 0 32 32"
                aria-hidden="true"
                className="h-6 fill-[#535364] group-hover:fill-blue-custom"
                focusable="false"
                role="img"
              >
                <path
                  stroke="none"
                  d="M16 2a14 14 0 1014 14A14 14 0 0016 2zm.74 20.13v.38a1 1 0 01-2 0v-.43a3.92 3.92 0 01-3.35-2.27 1.38 1.38 0 01-.1-.49c0-.53.36-.85 1-.85a1 1 0 011 .65 3.45 3.45 0 003.26 1.49c1.39-.08 2.22-.74 2.22-1.76s-.6-1.44-2.21-1.83l-1.61-.36c-2.42-.54-3.55-1.59-3.55-3.32s1.31-3.05 3.39-3.4V9.5a1 1 0 012 0v.39c1.84.21 3.21 1.1 3.62 2.39a1.52 1.52 0 01.08.49c0 .45-.35.74-.91.74a1.09 1.09 0 01-1-.64 3.2 3.2 0 00-3-1.47c-1.25.13-2.11.78-2.11 1.7s.64 1.43 2 1.79l1.65.36c2.57.58 3.67 1.57 3.67 3.32-.04 2.34-2.06 3.36-4.05 3.56z"
                ></path>
              </svg>
            </div>
            <span className="text-[10px] font-semibold group-hover:text-blue-custom">
              Home Loans
            </span>
          </div>
        </Link>
        <Link href="/myzillow/inbox" className="group">
          <div className="flex flex-row lg:flex-col items-center">
            <div className="p-2">
              <svg
                viewBox="0 0 32 32"
                aria-hidden="true"
                className="h-6 fill-[#535364] group-hover:fill-blue-custom"
                focusable="false"
                role="img"
              >
                <path
                  stroke="none"
                  d="M29.84,17.62,24.52,5.21A2,2,0,0,0,22.68,4H9.32A2,2,0,0,0,7.48,5.21L2.16,17.62a1.92,1.92,0,0,0-.16.79V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V18.41A1.92,1.92,0,0,0,29.84,17.62ZM25,20H23.41l-1.56,1.57a1.49,1.49,0,0,1-1.06.43H11.21a1.49,1.49,0,0,1-1.06-.43L8.59,20H7a1,1,0,0,1,0-2H8.79a1.5,1.5,0,0,1,1.06.43L11.41,19H13V17a1,1,0,0,1,2,0v2h1.59l1.56-1.57a1.5,1.5,0,0,1,1.06-.43H25a1,1,0,0,1,0,2Z"
                ></path>
              </svg>
            </div>
            <span className="text-[10px] font-semibold group-hover:text-blue-custom">Inbox</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
