"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsDiamond, BsDiamondFill } from "react-icons/bs";

const AIPercent = ({
  setRaceData,
  setAgeData,
  setGenderData,
  selectedRaceIndex,
  setSelectedRaceIndex,
  selectedAgeIndex,
  setSelectedAgeIndex,
  selectedGenderIndex,
  setSelectedGenderIndex,
  selectedBox,
}) => {
  const [raceData, setLocalRaceData] = useState([]);
  const [ageData, setLocalAgeData] = useState([]);
  const [genderData, setLocalGenderData] = useState([]);

  const sortedRaceData = Object.entries(raceData).sort((a, b) => b[1] - a[1]);
  const sortedAgeData = Object.entries(ageData).sort((a, b) => b[1] - a[1]);
  const sortedGenderData = Object.entries(genderData).sort((a, b) => b[1] - a[1]);

  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const fetchData = async () => {
    try {
      const res = await axios.post(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
        {
          image: "base64_encoded_string",
        }
      );

      if (res.data && res.data.data && res.data.data.race) {
        const raceData = res.data.data.race;
        const ageData = res.data.data.age;
        const genderData = res.data.data.gender;

        setLocalRaceData(raceData);
        setLocalAgeData(ageData);
        setLocalGenderData(genderData);
        setGenderData(genderData);
        setAgeData(ageData);
        setRaceData(raceData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelected = (index) => {
    if (selectedBox === "race") {
      setSelectedRaceIndex(index);
    } else if (selectedBox === "age") {
      setSelectedAgeIndex(index);
    } else if (selectedBox === "gender") {
      setSelectedGenderIndex(index);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-between mx-3 mt-4 text-[1rem] text-gray-700">
        <span>RACE</span>
        <span>A.I. CONFIDENCE</span>
      </div>
      {selectedBox === "race" ? (
        sortedRaceData.map(([key, value], index) => (
          <div
            key={key}
            className={` text-[1rem] transition-all flex items-center justify-between mb-2 px-3 h-[3rem] cursor-pointer mt-3 ${
              selectedRaceIndex === index
                ? "transition-all bg-black text-white"
                : "bg-gray-100"
            }`}
            onClick={() => handleSelected(index)}
          >
            <span className="flex items-center gap-3">
              {selectedRaceIndex === index ? <BsDiamondFill /> : <BsDiamond />}
              {capitalizeWords(key)}
            </span>
            <span>{Math.round(value * 100)} %</span>
          </div>
        ))
      ) : selectedBox === "age" ? (
        sortedAgeData.map(([key, value], index) => (
          <div
            key={key}
            className={` text-[1rem] transition-all flex items-center justify-between mb-2 px-3 h-[3rem] cursor-pointer mt-3 ${
              selectedAgeIndex === index
                ? "transition-all bg-black text-white"
                : "bg-gray-100"
            }`}
            onClick={() => handleSelected(index)}
          >
            <span className="flex items-center gap-3">
              {selectedAgeIndex === index ? <BsDiamondFill /> : <BsDiamond />}
              {key}
            </span>
            <span>{Math.round(value * 100)} %</span>
          </div>
        ))
      ) : (
        sortedGenderData.map(([key, value], index) => (
          <div
            key={key}
            className={` text-[1rem] transition-all flex items-center justify-between mb-2 px-3 h-[3rem] cursor-pointer mt-3 ${
              selectedGenderIndex === index
                ? "transition-all bg-black text-white"
                : "bg-gray-100"
            }`}
            onClick={() => handleSelected(index)}
          >
            <span className="flex items-center gap-3">
              {selectedGenderIndex === index ? <BsDiamondFill /> : <BsDiamond />}
              {capitalizeWords(key)}
            </span>
            <span>{Math.round(value * 100)} %</span>
          </div>
        ))
      )}
    </>
  );
};

export default AIPercent;