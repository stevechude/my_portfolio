"use client";
import React from "react";

const Hero = () => {
  // bg-pay.jpg , kdot.jpeg

  return (
    <div className='mt-16 md:pt-10 w-full h-[30rem] md:h-[40rem] bg-[url("/bg-pay.jpg")] bg-no-repeat object-cover bg-cover flex flex-col justify-center'>
      <div className="flex flex-col justify-center gap-1 md:gap-3 p-6 px-10 md:px-20 md:w-[50%]">
        <p className="font-semibold text-lg md:text-3xl">
          Hello, I am Steve Chude.
        </p>
        <p className="md:font-semibold font-medium text-sm md:text-lg text-[#bcbcbc]">
          {/* I am a proactive, smart, driven software engineer with 4 years of
          development experience. I have developed software solutions for
          business use cases from conceptualization to deployment. I am a
          proficient React.Js, Next.Js, Angular, JavaScript and TypeScript
          developer. Softwares i have built includes Fintech Payment Website,
          Health Tech solution, logistics web app, etc. I have great
          communication skills, problem solving, decision making and a team
          player. */}
          A Frontend Developer with 4 years of development experience. Welcome
          to my world.
        </p>
        <button
          href="projects"
          className="bg-gradient-to-r from-[#8168d4] to-[#41a4c8] rounded-3xl p-1 md:p-2 w-40 animate-bounce transition duration-1000 ease-in-out mt-4 cursor-pointer text-center"
        >
          Let's begin
        </button>
      </div>
    </div>
  );
};

export default Hero;
