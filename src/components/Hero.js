import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1280px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        <div className="absolute flex flex-col justify-center text-gray-200 bg-black/40 w-full h-full max-h-[500px]">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7lg font-bold">
            The <span className="text-orange-500">Best</span>{" "}
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7lg font-bold">
          <span className="text-orange-500">Foods</span> Delivered{" "}
          </h1>
        </div>
        <img className="w-full max-h-[500px] object-cover" src="https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
      </div>
    </div>
  );
};

export default Hero;
