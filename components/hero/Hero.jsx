"use client";
import React, { useEffect } from "react";
import {
  Link as ScrollLink,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="hero" className="w-full h-[30rem] md:h-[40rem] mt-16 md:pt-10">
      <div className='bg-[url("/bg-pay.jpg")] bg-no-repeat object-cover bg-cover flex flex-col justify-center w-full h-full'>
        <div className="flex flex-col justify-center gap-1 md:gap-3 p-6 px-10 md:px-20 md:w-[50%]">
          <p
            className="font-semibold text-lg md:text-3xl"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            Hello, I am Steve Chude.
          </p>
          <p
            className="md:font-semibold font-medium text-sm md:text-lg text-[#bcbcbc]"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
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
            className="bg-gradient-to-r from-[#8168d4] to-[#41a4c8] rounded-3xl p-1 md:p-2 w-40 animate-bounce transition duration-1000 ease-in-out mt-4 cursor-pointer text-center hover:opacity-80"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <ScrollLink
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Let's begin
            </ScrollLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
