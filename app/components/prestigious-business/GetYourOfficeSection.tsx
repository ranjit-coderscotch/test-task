import Image from "next/image";
import Link from "next/link";

export function GetYourOfficeSection() {
  return (
    <section className="flex w-full py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="flex w-full max-w-[1216px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row w-full bg-[#065986] rounded-2xl overflow-hidden lg:h-[400px] lg:min-h-[400px]">
          {/* Content Section */}
          <div className="flex flex-col gap-4 sm:gap-6 justify-center w-full lg:flex-1 p-6 sm:p-8 lg:p-10 lg:pr-8">
            <h2 className="font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-white text-[28px] sm:text-[32px] lg:text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[36px] sm:leading-[40px] lg:leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]">
              Get Your Office Solution Today!
            </h2>
            <p className="font-text-xl-regular font-[number:var(--text-xl-regular-font-weight)] text-[#B9E6FE] text-[18px] sm:text-[19px] lg:text-[length:var(--text-xl-regular-font-size)] tracking-[var(--text-xl-regular-letter-spacing)] leading-[28px] sm:leading-[29px] lg:leading-[var(--text-xl-regular-line-height)] [font-style:var(--text-xl-regular-font-style)]">
              Business Address for only $59/Month - No Hidden Fees
            </p>
            <Link href="#" prefetch={false} className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-3 bg-white text-gray-700 font-semibold text-base rounded-lg hover:bg-gray-100 transition-colors">
                Get started
              </button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0 w-full lg:w-[480px] h-[300px] sm:h-[350px] lg:h-[400px] min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] relative">
            <Image
              src="/assets/getoffer.png"
              alt="Get Your Office Solution"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 480px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

