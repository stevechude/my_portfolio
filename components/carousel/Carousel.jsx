"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { listProjects } from "@/data/projects";

const Carousel = ({ autoSlideInterval = 3000 }) => {
  const slides = listProjects;
  const [curr, setCurr] = useState(0);
  const [numVisibleSlides, setNumVisibleSlides] = useState(1);
  // const [autoSlide] = useState(true);

  // useEffect(() => {
  //   if (!autoSlide) return;
  //   const slideInterval = setInterval(next, autoSlideInterval);
  //   return () => clearInterval(slideInterval);
  // }, [autoSlide]);

  useEffect(() => {
    const updateNumVisibleSlides = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setNumVisibleSlides(3); // Show 4 slides on desktop
      } else if (screenWidth >= 768) {
        setNumVisibleSlides(2); // Show 3 slides on tablet
      } else {
        setNumVisibleSlides(1); // Show 1 slide on mobile
      }
    };

    updateNumVisibleSlides();
    window.addEventListener("resize", updateNumVisibleSlides);

    return () => {
      window.removeEventListener("resize", updateNumVisibleSlides);
    };
  }, []);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <>
      <div className="w-full">
        <div
          className="flex md:gap-6 transition-transform ease-out duration-500"
          style={{
            transform: `translateX(-${(100 / numVisibleSlides) * curr}%)`,
          }}
        >
          {slides.map((proj, i) => (
            <div
              key={i}
              className={`border-2 border-[#656a72] rounded-tl-3xl rounded-tr-sm rounded-bl-sm rounded-br-3xl mb-2 md:mb-0 flex-shrink-0 w-full md:w-96 h-96 md:h-[26rem]`}
              data-aos={`${i % 2 === 0 ? "fade-left" : "fade-right"}`}
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="p-3 md:p-4 flex flex-col gap-2">
                <div className="rounded-md md:w-fit">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    width={500}
                    height={500}
                    className="w-full rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-0.5 items-center">
                  <p>{proj.title}</p>
                  <div className="h-0.5 w-[50%] bg-gradient-to-r from-[#8168d4] to-[#41a4c8]" />
                </div>

                <div className="flex flex-col gap-2">
                  <p className="md:text-sm text-xs text-[#cdcccc]">
                    {proj.description}
                  </p>
                  <Link
                    target="_blank"
                    href={proj.link}
                    className="bg-gradient-to-r from-[#8168d4] to-[#41a4c8] rounded-3xl p-1 w-32 md:w-40 cursor-pointer text-center text-sm hover:animate-pulse"
                  >
                    Look it up
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute right-0 left-0 top-[50%] md:top-[40%] bottom-[50%] flex items-center justify-between p-1 md:p-4">
          <button
            onClick={prev}
            style={{ boxShadow: "0px 0px 15px 2px #ccc" }}
            className="p-1 rounded-full bg-white/80 text-gray-800 hover:bg-white"
          >
            <FaAngleLeft size={30} />
          </button>
          <button
            onClick={next}
            style={{ boxShadow: "0px 0px 15px 2px #ccc" }}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <FaAngleRight size={30} />
          </button>
        </div>

        {/* indicators */}
        <div className="md:mt-4 py-1">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`transition-all w-3 h-3 rounded-full bg-white ${
                  curr === i ? "p-2" : "bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
