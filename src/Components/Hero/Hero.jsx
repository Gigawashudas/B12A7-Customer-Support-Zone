import React from "react";

const Hero = ({inProgress, resolvedCount}) => {
  return (
    <section id="hero" className="p-20 max-sm:p-4 flex max-sm:flex-col gap-6 text-white">
      <div className="relative bg-gradient-to-r from-[#632ee3] to-[#9f62f2] h-[250px] w-1/2 max-sm:w-full rounded-xl flex items-center justify-between">
        <img className="max-sm:hidden" src="/bg-img/vector1.png" alt="" />
        <img className="max-sm:hidden scale-x-[-1]" src="/bg-img/vector1.png" alt="" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-no-repeat h-full z-10">
          <h2 className="text-2xl">In-Progress</h2>
          <h2 className="font-semibold text-6xl">{inProgress}</h2>
        </div>
      </div>
      <div className="relative bg-gradient-to-r from-[#54c868] to-[#00827a] h-[250px] w-1/2 max-sm:w-full rounded-xl flex items-center justify-between">
        <img className="max-sm:hidden" src="/bg-img/vector1.png" alt="" />
        <img className="max-sm:hidden scale-x-[-1]" src="/bg-img/vector1.png" alt="" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-no-repeat h-full z-10">
          <h2 className="text-2xl">Resolved</h2>
          <h2 className="font-semibold text-6xl">{resolvedCount}</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
