import Link from "next/link";

export function SearchInputForBusiness() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex w-full flex-col items-start gap-[16px] sm:flex-row sm:items-center sm:gap-4">
        <div className="flex w-full flex-1 flex-col items-start gap-1.5">
          <div className="relative w-full">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 pointer-events-none">
              <img src="/figmaAssets/google maps.svg" alt="Location" className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search for Zip, State, or City"
              className="w-full h-[50px] pl-10 pr-4 rounded-lg border border-gray-300 bg-white text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-light400 focus:border-transparent"
            />
          </div>
        </div>
        <button
          className="h-[50px] w-full sm:w-auto px-[18px] py-3 rounded-lg border border-solid border-[#36bff9] bg-blue-light400 text-white shadow-sm transition-colors hover:border-blue-light700 hover:bg-blue-light700 font-semibold text-sm sm:flex sm:items-center sm:justify-center whitespace-nowrap"
        >
          Get started
        </button>
      </div>
      <Link href="/our-top-locations/" prefetch={false}>
        <p className="cursor-pointer text-sm font-bold leading-normal text-gray-600 transition-colors hover:text-[#181d27]">
          Browse Our Top Locations
        </p>
      </Link>
    </div>
  );
}

