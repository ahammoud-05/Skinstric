'use client'
import Image from "next/image";
import DiscoverBtn from "../components/DiscoverBtn";
import TestBtn from "../components/TestBtn";
import gsap from 'gsap'
import { useEffect, useRef } from "react";
import Header from "../components/Header";

const Main = () => {

  const discoverBtnRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.set(discoverBtnRef.current, { opacity: 1 })
    gsap.set(titleRef.current, { x: 0 })
  }, [])

  const handleHover = () => {
    gsap.to(discoverBtnRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    })

    gsap.to(titleRef.current, {
      x: "-95%",
      duration: 0.8,
      ease: "power2.out",
    })
  }

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
  };

  return (
    <div className="main bg-[#FCFCFC] text-black min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center w-full">
        <div ref={titleRef} className="title text-center text-8xl tracking-[-0.12em]">
          Sophisticated
          <br />
          skincare
        </div>
        <div ref={discoverBtnRef}>
          <DiscoverBtn />
        </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <div className="relative w-[302px] h-[602px]">
                <Image
                  src="/assets/RightRectangle.png"
                  alt="rectangle"
                  width={360}
                  height={360}
                  className="w-full h-full"
                />
                <div onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                  <TestBtn />
                </div>
              </div>
            </div>
      </div>
      <div className="p-4 w-[30%] uppercase text-[14px]">
        <p>
          Skinstric developed an A.I. that creates a highly-personalised routine
          tailored to what your skin needs.
        </p>
      </div>
    </div>
  );
};

export default Main;
