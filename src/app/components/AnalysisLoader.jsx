import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'

const AnalysisLoader = () => {

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
          <div className="relative w-full h-full flex items-center justify-center">
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
            <div className='absolute text-black font-semibold'>
                PREPARING YOUR ANALYSIS...
            </div>
          </div>

        </div>
  )
}

export default AnalysisLoader