"use client";
import { useEffect, useState } from "react";
import AnalysisHeader from "../components/AnalysisHeader";
import AIPercent from "../components/AIPercent";
import Link from "next/link";
import Image from "next/image";

const Demographics = () => {
  const [raceData, setRaceData] = useState({});
  const [ageData, setAgeData] = useState({});
  const [genderData, setGenderData] = useState({});
  const [selectedRaceIndex, setSelectedRaceIndex] = useState(0);
  const [selectedAgeIndex, setSelectedAgeIndex] = useState(0);
  const [selectedGenderIndex, setSelectedGenderIndex] = useState(0);
  const [selectedBox, setSelectedBox] = useState("race");
  const [confirmedSelection, setConfirmedSelection] = useState({
    race: null,
    age: null,
    gender: null,
  });

  const sortedRaceData = Object.entries(raceData).sort((a, b) => b[1] - a[1]);
  const sortedAgeData = Object.entries(ageData).sort((a, b) => b[1] - a[1]);
  const sortedGenderData = Object.entries(genderData).sort((a, b) => b[1] - a[1]);

  const selectedRace = sortedRaceData[selectedRaceIndex] || ["", 0];
  const selectedAge = sortedAgeData[selectedAgeIndex] || ["", 0];
  const selectedGender = sortedGenderData[selectedGenderIndex] || ["", 0];

  const getCircle = (percentage) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = circumference - (percentage / 100) * circumference;
    return dashOffset;
  };

  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const handleBoxSelection = (box) => {
    if (!confirmedSelection[box]) {
      setSelectedBox(box);
    }
  };

  const handleConfirm = () => {
    if (selectedBox === "race") {
      setConfirmedSelection((prev) => ({
        ...prev,
        race: selectedRace,
      }));
    } else if (selectedBox === "age") {
      setConfirmedSelection((prev) => ({
        ...prev,
        age: selectedAge,
      }));
    } else if (selectedBox === "gender") {
      setConfirmedSelection((prev) => ({
        ...prev,
        gender: selectedGender,
      }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AnalysisHeader />
      <div className="flex justify-center flex-col">
        <div className="ml-15">
          <div className="mt-5 font-semibold tracking-tight">A. I. ANALYSIS</div>
          <div className="text-[4.5rem] leading-none">DEMOGRAPHICS</div>
          <div className="mt-2 text-gray-700">PREDICTED RACE & AGE</div>
        </div>
        <div className="flex items-start justify-center w-full mt-15">
          <div className="flex flex-col h-[100%] ml-5">
            {/* RACE BOX */}
            <div
              className={`w-[208px] h-[104px] transition-all ${selectedBox === "race" ? "bg-black text-white" : "bg-gray-100 text-black hover:bg-gray-300"} border-t-black border-t-2 cursor-pointer`}
              onClick={() => handleBoxSelection("race")}
            >
              <div className="flex flex-col p-2 font-semibold gap-10">
                <div className="race">{capitalizeWords(selectedRace[0])}</div>
                <div className="label">RACE</div>
              </div>
            </div>

            {/* AGE BOX */}
            <div
              className={`mt-2.5 w-[208px] h-[104px] transition-all ${selectedBox === "age" ? "bg-black text-white" : "bg-gray-100 text-black hover:bg-gray-300"} border-t-black border-t-2 cursor-pointer`}
              onClick={() => handleBoxSelection("age")}
            >
              <div className="flex flex-col p-2 font-semibold gap-10">
                <div className="race">{selectedAge[0]}</div>
                <div className="label">AGE</div>
              </div>
            </div>

            {/* GENDER BOX */}
            <div
              className={`mt-2.5 w-[208px] h-[104px] transition-all ${selectedBox === "gender" ? "bg-black text-white" : "bg-gray-100 text-black hover:bg-gray-300"} border-t-black border-t-2 cursor-pointer`}
              onClick={() => handleBoxSelection("gender")}
            >
              <div className="flex flex-col p-2 font-semibold gap-10">
                <div className="gender">{capitalizeWords(selectedGender[0])}</div>
                <div className="label">SEX</div>
              </div>
            </div>
          </div>

          {/* PERCENTAGE BOX */}
          <div className="w-[60%] h-[544px] bg-gray-100 ml-3 border-t-black border-t-2 flex flex-col relative">
            <div className="text-[2.5rem] mt-2 ml-3">
              {selectedBox === "race" ? capitalizeWords(selectedRace[0]) : selectedBox === "age" ? selectedAge[0] : capitalizeWords(selectedGender[0])}
            </div>
            {/* CIRCLE */}
            <div className="absolute bottom-0 right-0 mb-5 mr-5 flex items-center justify-center">
              <svg
                className="w-[30rem] h-[30rem] transform rotate-270"
                viewBox="0 0 120 120"
              >
                <circle
                  className="stroke-gray-300"
                  cx="60"
                  cy="60"
                  r="45"
                  strokeWidth="1"
                  fill="transparent"
                />
                <circle
                  className="stroke-black"
                  cx="60"
                  cy="60"
                  r="45"
                  strokeWidth="1"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 45}
                  strokeDashoffset={getCircle(Math.round(selectedBox === "race" ? selectedRace[1] * 100 : selectedBox === "age" ? selectedAge[1] * 100 : selectedGender[1] * 100))}
                  style={{
                    transition: "stroke-dashoffset 1s ease",
                  }}
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[2rem] font-light">
                {Math.round(selectedBox === "race" ? selectedRace[1] * 100 : selectedBox === "age" ? selectedAge[1] * 100 : selectedGender[1] * 100)}%
              </div>
            </div>
          </div>
          <div className="w-[25%] h-[544px] bg-gray-100 ml-3 border-t-black border-t-2">
            <AIPercent
              setRaceData={setRaceData}
              setAgeData={setAgeData}
              setGenderData={setGenderData}
              selectedRaceIndex={selectedRaceIndex}
              setSelectedRaceIndex={setSelectedRaceIndex}
              selectedAgeIndex={selectedAgeIndex}
              setSelectedAgeIndex={setSelectedAgeIndex}
              selectedGenderIndex={selectedGenderIndex}
              setSelectedGenderIndex={setSelectedGenderIndex}
              selectedBox={selectedBox}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center mt-auto justify-between ml-10 mr-10 mb-5 gap-5 cursor-pointer">
        <Link className="flex items-center gap-2" href="analysis">
          <Image
            src="/assets/ButtonIcon.png"
            alt="back-button"
            width={44}
            height={44}
          />
          <p className="whitespace-nowrap text-gray-700 font-semibold">BACK</p>
        </Link>

        <div className="flex items-center justify-center text-gray-500 text-[1rem] mt-5">
          If A.I. estimate is wrong, select the correct one.
        </div>

        <div className="flex items-center gap-5">
          <button className="mr-2 text-black text-sm border-black border-solid border-1 rounded-[2px] p-2 px-5 cursor-not-allowed">
            RESET
          </button>
          <button onClick={handleConfirm} className="mr-10 text-white text-sm bg-black rounded-[2px] p-2 px-5 cursor-pointer">
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
};

export default Demographics;