"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";

const listProjects = [
  {
    image: "/projects/portfolio.png",
    title: "Steve's Portfolio",
    description:
      "This is a Blog website built with next.js and styled with tailwind css. this was a personal project i built off hand without any pre-made designs. deployed on vercel",
    link: "https://steve-chude.vercel.app/",
  },
  {
    image: "/projects/bottleking.png",
    title: "BottleKing Website",
    description:
      "I worked on the frontend of this website for Bottleking. It's an e-commerce web app for their products and services, where users can sign up for an account, place orders, etc.",
    link: "https://bottleking.ng/",
  },
  {
    image: "/projects/cryptobase.png",
    title: "A Crypto Monitoring App",
    description:
      "A responsive crypto website fetched from coingecko’s api as third-party, built with react js and styled with tailwind css, with an addition of a firebase backend with full user authentications and route protections.",
    link: "https://cryptobase-website.netlify.app/",
  },
  {
    image: "/projects/foodmine.png",
    title: "Food Ordering App (In Progress)",
    description:
      "A foodmine website built with angular, it represents a food commerce app with the following features (view all available foods, view foods by categories, click on a particular food, add food to cart, view cart page with all foods added to cart). It is still missing an API server for user authentication (sign up and login, payment and checkout page) though, but it is an awesome representation of a food-commerce web application.",
    link: "https://foodmine-app.vercel.app/",
  },
  {
    image: "/projects/gift-card.png",
    title: "Gift Cards App",
    description:
      "A fully responsive landing page of a GiftCard website from Figma Design, built and styled in 6 days with Next Js and TailwindCSS. Used GSAP library for animations.",
    link: "https://gift-card-phi.vercel.app/",
  },
  {
    image: "/projects/payslate.png",
    title: "Payslate Organizations App",
    description:
      "A modern payment solution app for Organizations. A company can open a payslate account to easily receive payments from their customers, easily make withdrawals and manage their business accounts. Sub accounts can be created as well for split payments. I advice yout to sign up and check it out.",
    link: "https://organization.payslate.com.ng/",
  },
  {
    image: "/projects/payslate2.png",
    title: "Payslate",
    description:
      "A modern payment solution app that has 2 user journeys (Organization & Users). A company can open a payslate account to easily receive payments from their customers, while an individual can open a payslate account to easily connect with multiple organizations registered on the platform and make payments to them.",
    link: "https://payslate.com.ng/",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="flex min-h-screen flex-col overflow-hidden">
        <Navbar />
        <div
          id="projects"
          className="flex flex-col gap-6 px-10 md:px-20 mt-24 md:mt-28 my-4"
        >
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
        <Footer />
      </div>
    </>
  );
};

export default Projects;
