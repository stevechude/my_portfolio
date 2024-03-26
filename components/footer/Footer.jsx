import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { MdCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

const heads = [
  {
    link: "https://github.com/stevechude",
    icon: <FaGithub size={25} color="#fff" className="w-6 h-6 md:w-7 md:h-7" />,
  },
  {
    link: "https://www.linkedin.com/in/steve-chude-6734a7191/",
    icon: (
      <FaLinkedin size={25} color="#fff" className="w-6 h-6 md:w-7 md:h-7" />
    ),
  },
  {
    link: "https://profile.indeed.com/?hl=en_NG&co=NG&from=gnav-jobseeker-profile--profile-one-frontend",
    icon: <SiIndeed size={25} color="#fff" className="w-6 h-6 md:w-7 md:h-7" />,
  },
];

const Footer = () => {
  return (
    <div id="contact" className="px-10 md:px-20 mt-8 bg-[#0f1624] border-t-4">
      {/* <hr className="h-1 border-0 bg-gradient-to-r from-[#8168d4] to-[#41a4c8]" /> */}
      <div className="flex flex-col md:flex-row gap-8 py-10 md:items-center justify-between leading-loose tracking-widest">
        <div className="flex flex-col">
          <label>Call me:</label>
          <Link
            href={"tel:+2348089147905"}
            className="rounded-3xl text-sm bg-white text-black py-1 px-2 w-fit md:w-full flex gap-2 items-center hover:bg-opacity-80"
          >
            <MdCall
              size={20}
              className="animate-pulse transition duration-1000 ease-in-out"
            />
            <p>+234-808-914-7905</p>
          </Link>
        </div>
        <div className="flex flex-col">
          <label>Email:</label>
          <Link
            href={"mailto:stevechude@gmail.com"}
            className="rounded-3xl text-sm bg-white text-black py-1 px-2 w-fit md:w-full flex gap-2 items-center hover:bg-opacity-80"
          >
            <IoMdMail
              size={20}
              className="animate-pulse transition duration-1000 ease-in-out"
            />
            <p>stevechude@gmail.com</p>
          </Link>
        </div>
        <div className="flex self-end md:self-center gap-10">
          {heads.map((dt, i) => (
            <Link
              key={i}
              target="_blank"
              href={dt.link}
              className="transition-transform duration-300 transform hover:-translate-y-1"
            >
              {dt.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
