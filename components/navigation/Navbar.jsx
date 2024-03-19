"use client";
import React, { useState } from "react";
import { SiGamedeveloper } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { FiMenu } from "react-icons/fi";
import { FaRegWindowClose } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className="lg:flex items-center justify-between w-full py-6 px-10 text-xl hidden fixed bg-[#0f1624] z-50">
        <div className="flex items-center gap-3 cursor-pointer hover:font-semibold">
          <SiGamedeveloper />
          <p>Portfolio</p>
        </div>

        <ul className="flex items-center gap-3 md:gap-6">
          <li className="border-b-2 cursor-pointer hover:font-semibold">
            Projects
          </li>
          <li className="border-b-2 cursor-pointer hover:font-semibold">
            Technologies
          </li>
          <li className="border-b-2 cursor-pointer hover:font-semibold">
            About Me
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <Link target="_blank" href={"https://github.com/stevechude"}>
            <FaGithub color="#fff" />
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/steve-chude-6734a7191/"}
          >
            <FaLinkedin color="#fff" />
          </Link>
          <Link
            target="_blank"
            href={
              "https://profile.indeed.com/?hl=en_NG&co=NG&from=gnav-jobseeker-profile--profile-one-frontend"
            }
          >
            <SiIndeed color="#fff" />
          </Link>
        </div>
      </div>
      {/* mobile */}
      <div className="flex md:hidden items-start justify-between w-full text-base py-4 px-5 fixed bg-[#0f1624] z-50">
        <div className="flex items-center gap-3">
          <SiGamedeveloper />
          <p>Portfolio</p>
        </div>

        <div
          onClick={() => setMobileMenu(true)}
          className={mobileMenu ? `hidden` : `block`}
        >
          <FiMenu size={25} />
        </div>
        {mobileMenu && (
          <div className="border border-white rounded-lg flex flex-col w-[50%] bg-[#0f1624]">
            <FaRegWindowClose
              onClick={() => setMobileMenu(false)}
              size={25}
              className="self-end mr-1"
            />
            <div className="flex flex-col items-center gap-6 p-2">
              <div className="flex flex-col items-center gap-6">
                <p className="border-b">Projects</p>
                <p className="border-b">Technologies</p>
                <p className="border-b">About Me</p>
              </div>

              <div className="flex items-center gap-3 pb-2">
                <Link target="_blank" href={"https://github.com/stevechude"}>
                  <FaGithub color="#fff" />
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/in/steve-chude-6734a7191/"}
                >
                  <FaLinkedin color="#fff" />
                </Link>
                <Link
                  target="_blank"
                  href={
                    "https://profile.indeed.com/?hl=en_NG&co=NG&from=gnav-jobseeker-profile--profile-one-frontend"
                  }
                >
                  <SiIndeed color="#fff" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
