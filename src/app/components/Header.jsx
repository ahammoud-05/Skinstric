import React from "react";

const Header = () => {
  return (
    <div className="items-center">
      <header className="flex mt-8 mx-2 md:mx-10 md:mr-10 items-center">
        <div className="font-semibold pr-2">SKINSTRIC</div>
        <div className="font-semibold text-gray-600">[ INTRO ]</div>
        <button className="ml-auto text-white text-sm bg-black rounded-[2px] p-2 cursor-not-allowed">
          ENTER CODE
        </button>
      </header>
    </div>
  );
};

export default Header;
