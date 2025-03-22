import Link from "next/link";
import AnalysisHeader from "../components/AnalysisHeader";
import Image from "next/image";

const Analysis = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnalysisHeader />
      <div className="ml-15 mt-5 font-semibold tracking-tight">
        A. I. ANALYSIS
      </div>
      <div className="ml-15 mt-3 font-light tracking-tight text-gray-700 text-sm">
        A. I HAS ESTIMATED THE FOLLOWING.
        <br />
        FIX ESTIMATED INFORMATION IF NEEDED.
      </div>
      <div className="flex-grow flex items-center justify-center w-full relative">
        {/* Outer Rectangle */}
        <div className="absolute">
          <Image
            src="/assets/RectangleOuter.png"
            alt="Outer Rectangle"
            width={762}
            height={762}
            className="object-contain hidden md:block"
          />
        </div>
        {/* Second Outer Rectangle */}
        <div className="absolute">
          <Image
            src="/assets/RectangleOuter2.png"
            alt="Outer Rectangle 2"
            width={682}
            height={682}
            className="object-contain hidden md:block"
          />
        </div>
        {/* Inner Rectangle */}
        <div className="absolute">
          <Image
            src="/assets/RectangleInner.png"
            alt="Inner Rectangle"
            width={602}
            height={602}
            className="object-contain hidden md:block"
          />
        </div>

        {/* BUTTONS */}
        <div className="grid grid-cols=1 sm:grid-cols-2 gap-4 md:flex md:flex-wrap md:w-[308px] md:h-[308px] relative">
          {/* TOP */}
          <Link href="/demographics">
            <div className="md:absolute bg-[#e7e7e7] hover:bg-[#c7c4c4] transition-all cursor-pointer w-[154px] h-[154px] md:h-[154px] md:w-[154px] top-[-35px] left-[77px] md:rotate-45">
              <div className="md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-[50%] md:-translate-y-[50%] text-center text-black md:text-[16px] font-bold md:rotate-315 h-full flex items-center justify-center">
                DEMOGRAPHICS
              </div>
            </div>
          </Link>
          {/* RIGHT */}
          <div className="md:absolute bg-[#e7e7e7] w-[154px] h-[154px] md:h-[154px] md:w-[154px] top-[77px] left-[190px] md:rotate-135 cursor-not-allowed">
            <div className="md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-[50%] md:-translate-y-[50%] text-center text-black md:text-[16px] font-bold md:rotate-225 h-full flex items-center justify-center">
              COSMETIC CONCERNS
            </div>
          </div>

          {/* BOTTOM */}
          <div className="md:absolute bg-[#e7e7e7] w-[154px] h-[154px] md:h-[154px] md:w-[154px] top-[190px] left-[77px] md:rotate-45 cursor-not-allowed">
            <div className="md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-[50%] md:-translate-y-[50%] text-center text-black md:text-[16px] font-bold md:rotate-315 h-full flex items-center justify-center">
              WEATHER
            </div>
          </div>

          {/* LEFT */}
          <div className="md:absolute bg-[#e7e7e7] w-[154px] h-[154px] md:h-[154px] md:w-[154px] top-[77px] left-[-35px] md:rotate-135 cursor-not-allowed">
            <div className="md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-[50%] md:-translate-y-[50%] text-center text-black md:text-[16px] font-bold md:rotate-225 h-full flex items-center justify-center">
              SKIN TYPE
              <br />
              DETAILS
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center place-content-between ml-10 mr-10 mb-2 gap-5 cursor-pointer">
        <Link className="flex items-center gap-2" href="upload">
          <Image
            src="/assets/ButtonIcon.png"
            alt="back-button"
            width={44}
            height={44}
          />
          <p className="whitespace-nowrap text-gray-700 font-semibold">BACK</p>
        </Link>
        <Link className="flex items-center gap-2" href="demographics">
          <p className="whitespace-nowrap text-gray-700 font-semibold">
            GET SUMMARY
          </p>
          <Image
            className="rotate-180"
            src="/assets/ButtonIcon.png"
            alt="get-summary"
            width={44}
            height={44}
          />
        </Link>
      </div>
    </div>
  );
};

export default Analysis;
