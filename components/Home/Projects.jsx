import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const listProjects = [
  {
    image: "/projects/blog.png",
    title: "Blog Design",
    description:
      "This is a Blog website built with next.js and styled with tailwind css. this was a personal project i built off hand without any pre-made designs. deployed on vercel",
    link: "https://blog-by-steve.vercel.app/",
  },
  {
    image: "/projects/cryptobase.png",
    title: "A Crypto Monitoring App",
    description:
      "This is a Blog website built with next.js and styled with tailwind css. this was a personal project i built off hand without any pre-made designs. deployed on vercel",
    link: "https://cryptobase-website.netlify.app/",
  },
  {
    image: "/projects/foodmine.png",
    title: "Food Ordering App",
    description:
      "This is a Blog website built with next.js and styled with tailwind css. this was a personal project i built off hand without any pre-made designs. deployed on vercel",
    link: "https://foodmine-app.vercel.app/",
  },
  {
    image: "/projects/gift-card.png",
    title: "Gift Cards App",
    description:
      "This is a Blog website built with next.js and styled with tailwind css. this was a personal project i built off hand without any pre-made designs. deployed on vercel",
    link: "https://gift-card-phi.vercel.app/",
  },
  {
    image: "/projects/payslate.png",
    title: "Payslate Organizations App",
    description:
      "This is a Blog website built with next.js and styled with tailwind css. this was a personal project i built off hand without any pre-made designs. deployed on vercel",
    link: "https://blog-by-steve.vercel.app/",
  },
  {
    image: "/projects/blog.png",
    title: "Blog Design",
    description:
      "This is a Blog website built with next.js and styled with tailwind css. this was a personal project i built off hand without any pre-made designs. deployed on vercel",
    link: "https://blog-by-steve.vercel.app/",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="projects" className="flex flex-col gap-6 px-10 md:px-20 mt-8 my-4">
      <p
        className="font-semibold text-2xl"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        Projects
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 w-full">
        {listProjects.map((proj, i) => (
          <div
            key={i}
            className="border-2 border-[#656a72] rounded-tl-3xl rounded-tr-sm rounded-bl-sm rounded-br-3xl md:w-[38%]"
            data-aos={`${i % 2 === 0 ? "fade-left" : "fade-right"}`}
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <div className="p-3 md:p-4 flex flex-col gap-2">
              {/* image */}
              <div className="rounded-md md:w-fit">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  width={500}
                  height={500}
                  className="w-full rounded-md"
                />
              </div>
              {/* title */}
              <div className="flex flex-col gap-2 items-center">
                <p>{proj.title}</p>
                <div className="h-0.5 w-[50%] bg-gradient-to-r from-[#8168d4] to-[#41a4c8]" />
              </div>
              {/* desc */}
              <div className="flex flex-col gap-2">
                <p className="text-sm text-[#cdcccc]">{proj.description}</p>
                <Link
                  target="_blank"
                  href={proj.link}
                  className="bg-gradient-to-r from-[#8168d4] to-[#41a4c8] rounded-3xl p-1 md:p-2 w-32 md:w-40 cursor-pointer text-center text-sm md:text-base hover:animate-pulse"
                >
                  Look it up
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
