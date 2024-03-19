import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

const Footer = () => {
  return (
    <div className="px-10 md:px-20 mt-8 bg-[#0f1624] border-t-4">
      <div className="flex flex-col md:flex-row gap-8 py-10 md:items-center justify-between leading-loose tracking-widest">
        <div className="flex flex-col">
          <label>Call me:</label>
          <Link href={"tel:+2348089147905"}>+234-808-914-7905</Link>
        </div>
        <div className="flex flex-col">
          <label>Email:</label>
          <Link href={"mailto:stevechude@gmail.com"}>stevechude@gmail.com</Link>
        </div>
        <div className="flex self-end md:self-center gap-10">
          <Link target="_blank" href={"https://github.com/stevechude"}>
            <FaGithub size={25} color="#fff" />
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/steve-chude-6734a7191/"}
          >
            <FaLinkedin size={25} color="#fff" />
          </Link>
          <Link
            target="_blank"
            href={
              "https://profile.indeed.com/?hl=en_NG&co=NG&from=gnav-jobseeker-profile--profile-one-frontend"
            }
          >
            <SiIndeed size={25} color="#fff" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
