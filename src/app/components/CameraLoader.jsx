import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { BsDiamond } from "react-icons/bs";

const CameraLoader = () => {

  const outerRef = useRef(null);
  const middleRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    gsap.to(outerRef.current, { rotation: 360, repeat: -1, duration: 8, ease: "linear" });
    gsap.to(middleRef.current, { rotation: -360, repeat: -1, duration: 6, ease: "linear" });
    gsap.to(innerRef.current, { rotation: 360, repeat: -1, duration: 4, ease: "linear" });
  }, []);

  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-white">
      <div className="relative w-[605px] h-[605px] flex items-center justify-center">
        <Image
        ref={outerRef}
          src="/assets/RectangleOuter.png"
          alt="outer rectangle"
          width={605}
          height={605}
          className="absolute rotate-35"
        />
        <Image
        ref={middleRef}
          src="/assets/RectangleOuter2.png"
          alt="middle rectangle"
          width={498}
          height={498}
          className="absolute rotate-30"
        />
        <Image
        ref={innerRef}
          src="/assets/RectangleInner.png"
          alt="inner rectangle"
          width={405}
          height={405}
          className="absolute rotate-20"
        />
        <Image
          src="/assets/camera-icon.png"
          alt="camera icon"
          width={152}
          height={152}
          className="absolute"
        />
        <div className="mt-40">Setting up camera...</div>
      </div>
      <div className="absolute bottom-30 z-10 text-black bg-transparent w-full flex flex-col items-center text-sm">
        <p className="mb-2 tracking-wide">
          TO GET BETTER RESULTS MAKE SURE TO HAVE
        </p>
        <div className="flex items-center gap-6">
          <p className="flex items-center gap-2">
            <BsDiamond /> NEUTRAL EXPRESSION
          </p>
          <p className="flex items-center gap-2">
            <BsDiamond /> FRONTAL POSE
          </p>
          <p className="flex items-center gap-2">
            <BsDiamond /> ADEQUATE LIGHTING
          </p>
        </div>
      </div>
    </div>
  );
};

export default CameraLoader;
