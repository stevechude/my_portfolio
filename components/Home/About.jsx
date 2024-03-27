"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { Oval } from "react-loader-spinner";
import AOS from "aos";
import "aos/dist/aos.css";

const photos = ["/hotelbar.jpg", "/pool.JPG", "/chair.JPG"];

const About = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDownloadCV = () => {
    setLoad(true);
    // Assuming your CV file is located in the public directory
    setTimeout(() => {
      const downloadUrl = "/file/steve_cv.pdf";
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "steve_cv.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setLoad(false);
    }, 1500);
  };

  return (
    <div
      id="about"
      className="flex flex-col gap-6 px-8 md:px-20 mt-8 my-4 w-full"
    >
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
          // data-aos="fade-left"
          // data-aos-easing="linear"
          // data-aos-duration="1000"
        >
          <Image
            src={photos[currentPhotoIndex]}
            // src={"/hotelbar.jpg"}
            alt="My photo"
            width={1000}
            height={1000}
            className="rounded-md w-[20rem] md:w-[25rem] md:h-[25rem] h-[20rem] md:flex-1 object-cover"
          />
        </div>

        <div className="md:w-[60%] w-full flex flex-col gap-3 md:gap-5 md:flex-shrink">
          <p
            className="font-bold text-2xl md:text-3xl"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            A little more about Steve
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

          {/* cv */}
          <div
            className="flex flex-col self-end gap-1 leading-relaxed md:leading-loose tracking-wider md:tracking-widest"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <label htmlFor="" className="font-bold md:text-lg">
              My Resume:
            </label>
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-3 rounded-2xl text-sm md:text-base font-semibold bg-white text-black py-1 md:py-1.5 px-3 md:px-4 hover:bg-opacity-80"
            >
              {load ? (
                <div className="flex items-center justify-center gap-3">
                  <Oval
                    height={25}
                    width={25}
                    color="#000"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#000"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  />
                  <p>Downloading...</p>
                </div>
              ) : (
                <>
                  <IoCloudDownloadOutline
                    size={25}
                    className="animate-bounce transition duration-1000 ease-in-out"
                  />
                  <p>Download CV Here</p>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
