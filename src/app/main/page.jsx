"use client";
import Image from "next/image";
import DiscoverBtn from "../components/DiscoverBtn";
import TestBtn from "../components/TestBtn";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Link from "next/link";

const Main = () => {
  const discoverBtnRef = useRef(null);
  const titleRef = useRef(null);
  const middleRef = useRef(null);
  const outerRef = useRef(null);

  useEffect(() => {
    gsap.set(discoverBtnRef.current, { opacity: 1 });
    gsap.set(titleRef.current, { x: 0, y: 60, opacity: 0 });
    gsap.set(middleRef.current, { opacity: 0, scale: 0.8 });
    gsap.set(outerRef.current, { opacity: 0, scale: 0.8 });
    gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
    });
  }, []);

  const handleHover = () => {
    gsap.to(discoverBtnRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(titleRef.current, {
      x: "-20vw",
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.to(middleRef.current, {
      opacity: 1,
      scale: 1,
      x: "-20px",
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(outerRef.current, {
      opacity: 1,
      scale: 1,
      x: "-35px",
      duration: 0.6,
      ease: "power2.out",
    });
  };

  const handleHoverLeave = () => {
    gsap.to(discoverBtnRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(titleRef.current, {
      x: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.to(middleRef.current, {
      opacity: 0,
      scale: 0.8,
      x: "0px",
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(outerRef.current, {
      opacity: 0,
      scale: 0.8,
      x: "0px",
      duration: 0.6,
      ease: "power2.out",
    });
  };

  return (
    <div className="main bg-[#FCFCFC] text-black min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center w-full px-6 overflow-hidden">
        <div className="relative w-full text-center overflow-hidden flex flex-col">
          <div
            ref={titleRef}
            className="title inline-block text-4xl md:text-7xl lg:text-8xl tracking-[-0.08em]"
          >
            Sophisticated
            <br />
            skincare
          </div>
          <div className="block lg:hidden flex-col">
            <div className="w-full">
              <Link className="flex items-center justify-center gap-2" href="/intro">
                <p className="tracking-tighter text-gray-700 font-semibold hover:text-black transition-colors duration-600 ease-in-out">
                  TAKE TEST
                </p>
                <div className="">
                  <Image
                    src="/assets/ButtonIcon.png"
                    alt="button-Take-Test"
                    width={30}
                    height={30}
                    className="rotate-180"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block" ref={discoverBtnRef}>
          <DiscoverBtn />
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <div className="relative w-[302px] h-[602px] hidden lg:block">
            <Image
              ref={middleRef}
              src="/assets/RightRectangleOuter.png"
              alt="rectangle"
              width={360}
              height={360}
              className="absolute top-0 left-0 w-full h-full"
            />
            <Image
              ref={outerRef}
              src="/assets/RightRectangleOuter2.png"
              alt="rectangle"
              width={360}
              height={360}
              className="absolute top-0 left-0 w-full h-full"
            />
            <Image
              src="/assets/RightRectangle.png"
              alt="rectangle"
              width={360}
              height={360}
              className="absolute top-0 left-0 w-full h-full"
            />
            <div
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverLeave}
              className="lg:block hidden"
            >
              <TestBtn />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-[30%] uppercase text-[14px] w-full">
        <p>
          Skinstric developed an A.I. that creates a highly-personalised routine
          tailored to what your skin needs.
        </p>
      </div>
    </div>
  );
};

export default Main;
