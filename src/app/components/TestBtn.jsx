'use client'
import Image from "next/image";
import Link from "next/link";


const TestBtn = () => {

  return (
    <>
    <Link href="/intro">
    <div className="group absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center cursor-pointer">
      <p className="tracking-tighter text-gray-700 font-semibold hover:text-black transition-colors duration-600 ease-in-out">
        TAKE TEST
      </p>
      <div className="relative w-[50px] h-[50px] group-hover:w-[60px] group-hover:h-[60px] group-hover:ml-2 transition-all duration-500 ease-in-out">
        <Image
          src="/assets/ButtonIcon.png"
          alt="button-Take-Test"
          width={50}
          height={50}
          className="absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0 rotate-180"
        />
        <Image
          src="/assets/button-icon-expanded.png"
          alt="button-Take-Test-Expanded"
          width={50}
          height={50}
          className="absolute inset-0 opacity-0 transition-opacity transform group-hover:opacity-100 duration-500 ease-in-out"
        />
      </div>
    </div>
    </Link>
    </>
  );
};

export default TestBtn;
