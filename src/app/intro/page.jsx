"use client";
import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

const Intro = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const introRef = useRef(null);
  const outerRef = useRef(null);
  const middleRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    gsap.set(introRef.current, { opacity: 0 })
    gsap.set(innerRef.current, {opacity: 0 })
    gsap.set(middleRef.current, {opacity: 0 })
    gsap.set(outerRef.current, {opacity: 0 })
    gsap.to(introRef.current, {
      opacity: 1,
      duration: 1.5,
      ease: "power2.out"
    })
    gsap.to(innerRef.current, {
      opacity: 1,
      duration: 1.1,
      ease: "power2.out"
    })
    gsap.to(middleRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    })
    gsap.to(outerRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    })
  },[])

  const handleStepOne = async () => {
    if (step === 1) {
      if (typeof name === "string" && name.trim() !== "" && isNaN(name)) {
        console.log(name);
        const res = await sendData(name);
        if (res) {
          setStep(2);
          setName("");
        } else {
          alert("An error has occured.");
        }
      }
    }
  };

  const handleStepTwo = async () => {
    if (step === 2 && location.trim() !== "") {
      setLoading(true);
      const res = await sendData(location);
      if (res) {
        router.push("/upload");
      } else {
        alert("An error has occurred.");
        setLoading(false);
      }
    }
  };

  const handleBackButton = () => {
    if (step === 2) {
      setStep(1);
      setName("");
    }
  };

  const sendData = async (name, location) => {
    console.log({ name, location });
    try {
      const response = await fetch(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: location }),
        }
      );

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error sending data:", error);
      return { success: false };
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="ml-15 mt-5 font-semibold tracking-tight">
          TO START ANALYSIS
        </div>
        <div className="flex-grow flex items-center justify-center w-full">
          <Image
          ref={innerRef}
            src="/assets/RectangleInner.png"
            alt="rombus"
            width={602}
            height={602}
            className="absolute"
          />
          <Image
          ref={middleRef}
            src="/assets/RectangleOuter2.png"
            alt="rombus"
            width={682}
            height={682}
            className="absolute"
          />
          <Image
          ref={outerRef}
            src="/assets/RectangleOuter.png"
            alt="rombus"
            width={762}
            height={762}
            className="absolute"
          />
          {/* INTRODUCE YOURSELF - INPUT */}
          {!loading && step === 1 && (
            <div className="absolute" ref={introRef}>
              <div className="flex flex-col items-center text-center">
                <p className="text-xs uppercase tracking-wide text-gray-500 pb-3">
                  CLICK TO TYPE
                </p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Introduce Yourself"
                  className="md:text-4xl md:w-[395px] w-[198px] text-l text-center outline-none border-b border-black max-w-md 
        placeholder:text-black placeholder:font-light focus:placeholder-transparent tracking-tighter"
                />
              </div>
            </div>
          )}

          {/* WHERE ARE YOU FROM - INPUT */}
          {!loading && step === 2 && (
            <div className="absolute">
              <div className="flex flex-col items-center text-center">
                <p className="text-xs uppercase tracking-wide text-gray-500 pb-3">
                  CLICK TO TYPE
                </p>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Where are you from?"
                  className="md:text-4xl md:w-[395px] w-[198px] text-l text-center outline-none border-b border-black max-w-md 
        placeholder:text-black placeholder:font-light focus:placeholder-transparent tracking-tighter"
                />
              </div>
            </div>
          )}
        </div>

        {/* BACK BUTTON */}
        <div
          onClick={handleBackButton}
          className="flex items-center place-content-between ml-10 mr-10 mb-2 gap-5 cursor-pointer"
        >
          <Link
            className="flex items-center gap-2"
            href={step === 1 ? "/" : "/intro"}
          >
            <Image
              src="/assets/ButtonIcon.png"
              alt="back-button"
              width={44}
              height={44}
            />
            <p className="whitespace-nowrap text-gray-700 font-semibold">
              BACK
            </p>
          </Link>

          {/* PROCEED BUTTON */}
          {(name && step === 1) || (location && step === 2) ? (
            <div
              onClick={step === 1 ? handleStepOne : handleStepTwo}
              className="flex items-center gap-2 cursor-pointer"
            >
              <p className="whitespace-nowrap text-gray-700 font-semibold">
                PROCEED
              </p>
              <Image
                className="rotate-180"
                src="/assets/ButtonIcon.png"
                alt="back-button"
                width={44}
                height={44}
              />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Intro;
