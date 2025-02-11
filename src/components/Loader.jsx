import React from "react";

const Loader = () => {
  return (
    <div className="loader h-dvh w-screen flex flex-row gap-2 justify-center items-center text-md font-extrabold text-gray-800">
      <span className="leading-none tracking-none animate-ping">L</span>
      <span className="leading-none tracking-none animate-ping delay_1">O</span>
      <span className="leading-none tracking-none animate-ping delay_2">A</span>
      <span className="leading-none tracking-none animate-ping delay_3">D</span>
      <span className="leading-none tracking-none animate-ping delay_4">I</span>
      <span className="leading-none tracking-none animate-ping delay_5">N</span>
      <span className="leading-none tracking-none animate-ping delay_6">G</span>
      <span className="leading-none tracking-none animate-ping delay_7">…</span>
    </div>
  );
};

export default Loader;
