"use client";
import { useState } from "react";

const CustomInput = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col items-center text-center">
      <p className="text-xs uppercase tracking-wide text-gray-500 pb-3">
        CLICK TO TYPE
      </p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Introduce Yourself"
        className="text-4xl font-semibold text-center outline-none border-b border-black w-full max-w-md placeholder:text-black placeholder:font-roobert focus:placeholder-transparent"
      />
    </div>
  );
};

export default CustomInput;
