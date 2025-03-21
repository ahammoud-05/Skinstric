"use client";
import { useEffect, useRef, useState } from "react";
import { IoCameraOutline } from "react-icons/io5";
import { BsDiamond } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import CameraLoader from "../components/CameraLoader";

const Camera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [pictureTaken, setPictureTaken] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      });
    }, 3000)

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    });

    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.drawImage(
        videoRef.current,
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );
      const dataUrl = canvasRef.current.toDataURL("image/png");
      localStorage.setItem("capturedPhoto", dataUrl);
      setPictureTaken(true);
    }
  };
  return (
    <>
      <div className="w-screen h-screen overflow-hidden relative bg-white">
        {loading ? (
            <div className="w-screen h-screen">
          <CameraLoader />
          </div>
        ) : (
          <>
            <div className="items-center bg-transparent">
              <header className="flex mt-8 mx-10 mr-10 items-center">
                <div className="font-semibold pr-2 text-white z-10">
                  SKINSTRIC
                </div>
                <div className="font-semibold z-10 text-white">
                  [
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ]
                </div>
              </header>
              {pictureTaken ? (
                <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-light z-50">
                  GREAT SHOT!
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <canvas
              ref={canvasRef}
              width={window.innerWidth}
              height={window.innerHeight}
              className="hidden"
            />
            {pictureTaken ? null : (
              <div className="absolute top-1/2 right-10 transform -translate-y-1/2 flex items-center gap-4 text-white cursor-pointer">
                <div onClick={takePhoto}>TAKE PICTURE</div>
                <button
                  onClick={takePhoto}
                  className="bg-white text-black p-2 rounded-full font-bold text-lg shadow-md flex items-center justify-center w-[62px] h-[62px] cursor-pointer"
                >
                  <div className="flex items-center justify-center border-2 border-gray-400 rounded-full p-3">
                    <IoCameraOutline className="w-8 h-8 text-gray-700" />
                  </div>
                </button>
              </div>
            )}

            <div className="absolute bottom-10 z-10 text-white bg-transparent w-full flex flex-col items-center text-sm">
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

            <div className="flex items-center ml-10 mb-2  cursor-pointer absolute bottom-0 text-white justify-between w-full mr-10">
              {pictureTaken ? (
                <>
                  <div className="flex justify-between w-full mr-15">
                    <div className="text-white z-10 flex items-center gap-2">
                      <Link
                        className="flex items-center gap-2 z-10"
                        href="upload"
                      >
                        <Image
                          src="/assets/WhiteButton.png"
                          alt="back-button"
                          width={44}
                          height={44}
                        />
                      </Link>
                      BACK
                    </div>
                    <div className="text-white z-10 flex items-center gap-2">
                      <Link
                        className="flex items-center gap-2 z-10"
                        href="/analysis"
                      >
                        PROCEED
                        <Image
                          src="/assets/WhiteButton.png"
                          alt="back-button"
                          width={44}
                          height={44}
                          className="rotate-180"
                        />
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <Link className="flex items-center gap-2 z-10" href="upload">
                  <Image
                    src="/assets/WhiteButton.png"
                    alt="back-button"
                    width={44}
                    height={44}
                  />
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Camera;
