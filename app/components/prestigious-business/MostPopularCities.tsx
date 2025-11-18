'use client';

import Image from "next/image";
import Link from "next/link";

const cities = [
  {
    name: "Atlanta",
    state: "GA",
    image: "/atlanta.webp",
    href: "/virtual-office/atlanta-georgia/",
  },
  {
    name: "Chicago",
    state: "IL",
    image: "/chicago.webp",
    href: "/virtual-office/chicago-illinois/",
  },
  {
    name: "Dallas",
    state: "TX",
    image: "/dallas.webp",
    href: "/virtual-office/dallas-texas/",
  },
  {
    name: "Houston",
    state: "TX",
    image: "/houston.webp",
    href: "/virtual-office/houston-texas/",
  },
  {
    name: "Los Angeles",
    state: "CA",
    image: "/los-angeles.webp",
    href: "/virtual-office/los-angeles-california/",
  },
  {
    name: "Miami",
    state: "FL",
    image: "/miami.webp",
    href: "/virtual-office/miami-florida/",
  },
  {
    name: "New York",
    state: "NY",
    image: "/new-york.webp",
    href: "/virtual-office/new-york-new-york/",
  },
  {
    name: "Tampa",
    state: "FL",
    image: "/tampa.webp",
    href: "/virtual-office/tampa-florida/",
  },
];

export function MostPopularCities() {
  return (
    <section className="flex w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="flex w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col w-full gap-8 md:gap-12">
          {/* Header Section */}
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-semibold leading-[44px] tracking-[-0.72px] text-[#101828]">
              Most Popular Cities
            </h2>
            <div className="flex flex-col gap-2">
              <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[30px] text-gray-600">
                Over 100 Locations Across the USA
              </p>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[30px] text-gray-600">
                Prestigious Business Address for Only $59/mo
              </p>
            </div>
          </div>

          {/* City Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full">
            {cities.map((city, index) => (
              <Link
                key={index}
                href={city.href}
                prefetch={false}
                className="flex flex-col items-center gap-4 group cursor-pointer"
              >
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={city.image}
                    alt={`${city.name}, ${city.state} skyline`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                  />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h3 className="text-[16px] md:text-[18px] font-semibold leading-[24px] text-[#101828] text-center group-hover:text-blue-light400 transition-colors">
                    {city.name}, {city.state}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


