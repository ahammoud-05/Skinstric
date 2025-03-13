const Main = () => {
  return (
    <div className="main bg-[#FCFCFC] text-black min-h-screen flex flex-col">
      <div className="items-center">
        <header className="flex mt-8 mx-10 mr-10 items-center">
          <div className="font-semibold pr-2">SKINSTRIC</div>
          <div className="font-semibold text-gray-600">[ INTRO ]</div>
          <button className="ml-auto mr-10 text-white text-sm bg-black rounded-[2px] p-2">
            ENTER CODE
          </button>
        </header>
      </div>
      <div className="flex-grow flex justify-center items-center">
        <div className="title text-center text-8xl">
          Sophisticated
          <br />
          skincare
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
