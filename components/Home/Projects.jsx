import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import Carousel from "../carousel/Carousel";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const router = useRouter();

  return (
    <div
      id="projects"
      className="flex flex-col gap-6 px-1 md:px-20 mt-8 my-4 overflow-hidden relative"
    >
      <p
        className="font-semibold text-2xl px-10 md:px-0"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        Projects
      </p>
      <div className="flex flex-col items-center gap-2 md:gap-4 overflow-hidden">
        <Carousel />
        <button
          onClick={() => router.push("/see-projects")}
          className="bg-gradient-to-r from-[#8168d4] to-[#41a4c8] rounded-3xl p-1 w-32 md:w-40 text-white self-center z-10"
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default Projects;
