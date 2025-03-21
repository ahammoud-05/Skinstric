"use client";
import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AnalysisLoader from "../components/AnalysisLoader";

const Upload = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [accessButton, setAccessButton] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const router = useRouter();

  const handleCameraClick = (event) => {
    setCursorPos({ x: event.clientX, y: event.clientY });
    setAccessButton(true);
  };

  const requestCameraAccess = async (allow) => {
    if (!allow) {
      setAccessButton(false);
      return;
    }

    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      router.push("/camera");
    } catch (error) {
      console.error("Camera access denied", error);
      setAccessButton(false);
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setLoading(true);
      const reader = new FileReader();
      reader.onloadend = async () => {
        setImage(reader.result);
        await uploadImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (base64Image) => {
    try {
      const response = await fetch(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: base64Image }),
        }
      );
      const result = await response.json();
      console.log(result);

      setTimeout(() => {
        setLoading(false);
        router.push("/analysis");
      }, 3000);
    } catch (error) {
      console.error("Error uploading image:", error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {loading ? (
        null
      ) : (
       <Header /> 
      )}
      <div className="ml-15 mt-5 font-semibold tracking-tight">
        TO START ANALYSIS
      </div>
      <div className="flex-grow flex items-center justify-center w-full gap-90">
        {loading ? (
          <div className="flex flex-col items-center justify-center">
            <AnalysisLoader />
          </div>
        ) : (
          <>
            <Image
              className="cursor-pointer"
              src="/assets/camera.png"
              alt="camera"
              width={520}
              height={482}
              style={{ objectFit: "cover" }} 
              onClick={handleCameraClick}
            />
            <label htmlFor="file-upload">
              <Image
                className={accessButton ? "grayscale opacity-50" : "cursor-pointer"}
                src="/assets/gallery.png"
                alt="gallery"
                width={520}
                height={482}
                style={{ objectFit: "cover" }}
              />
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden absolute bg-transparent"
            />
          </>
        )}
        {accessButton && (
          <div
            className="absolute bg-black text-white p-4 rounded-md shadow-md w-[352px] h-[136px]"
            style={{ top: cursorPos.y, left: cursorPos.x }}
          >
            <p className="text-sm">ALLOW A.I. TO ACCESS YOUR CAMERA</p>
            <div className="absolute bottom-0 right-0 flex gap-8 px-8 py-2 border-t border-white w-full justify-end">
              <button
                className="text-gray-400 hover:text-white cursor-pointer"
                onClick={() => requestCameraAccess(false)}
              >
                DENY
              </button>
              <button
                className="text-white cusor-pointer"
                onClick={() => requestCameraAccess(true)}
              >
                ALLOW
              </button>
            </div>
          </div>
        )}
      </div>

      {loading ? (
        ""
      ) : (
        <div className="flex items-center place-content-between ml-10 mr-10 mb-2 gap-5 cursor-pointer">
          <Link className="flex items-center gap-2" href="intro">
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
        </div>
      )}
    </div>
  );
};

export default Upload;
