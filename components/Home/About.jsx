"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const photos = [
  "/hotelbar.jpg",
  // "/kilmanjaro.jpg",
  "/chair.JPG",
  "/pool.JPG",
  // "/slab.JPG",
];

const About = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="about" className="flex flex-col gap-6 px-10 md:px-20 mt-8 my-4">
      <p
        className="font-semibold text-2xl"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        About Me
      </p>

      <div className="flex flex-col md:flex-row gap-3 md:gap-4 md:h-fit justify-between">
        <div
          className="w-full md:w-[30%]"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <Image
            src={photos[currentPhotoIndex]}
            alt="My photo"
            // layout="responsive"
            width={1000}
            height={1000}
            className="rounded-md w-[20rem] md:w-[25rem] md:h-[25rem] h-[20rem] object-cover"
          />
        </div>

        <div className="md:w-[60%] flex flex-col gap-2 md:gap-5">
          <p
            className="font-bold text-2xl md:text-3xl"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            a little more about Steve
          </p>
          <div
            className="text-sm md:text-base leading-relaxed md:leading-loose tracking-wider md:tracking-widest text-[#e7e3e3] flex flex-col gap-4 md:gap-5"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <p>
              {" "}
              I'm a proactive, smart, driven software engineer with 4 years of
              development experience. I have developed software solutions for
              business use cases from conceptualization to deployment.
            </p>
            <p>
              Proficient in React.Js, Next.Js, Angular, JavaScript and
              TypeScript. Softwares i have built includes Fintech Payment
              Website, Health Tech solution, logistics web app, etc.
            </p>
            <p>
              I have great communication skills, problem solving, decision
              making and a team player.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
