import React from "react";

const AnalysisHeader = () => {
  return (
    <div className="items-center">
      <header className="flex mt-8 mx-10 mr-10 items-center">
        <div className="font-semibold pr-2">SKINSTRIC</div>
        <div className="font-semibold text-gray-600">[ ANALYSIS ]</div>
        <button className="ml-auto mr-10 text-white text-sm bg-black rounded-[2px] p-2">
          ENTER CODE
        </button>
      </header>
    </div>
  );
};

export default AnalysisHeader;
