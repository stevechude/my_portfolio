import Skills from "@/components/skills/Skills";
import React from "react";

const listStack = [
  {
    title: "Html",
    proficiency: "Advanced",
    level: "80",
  },
  {
    title: "CSS, Tailwind, Sass",
    proficiency: "Advanced",
    level: "80",
  },
  {
    title: "Javascript, Typescript",
    proficiency: "Advanced",
    level: "80",
  },
  {
    title: "React",
    proficiency: "Advanced",
    level: "80",
  },
  {
    title: "Next JS",
    proficiency: "Advanced",
    level: "80",
  },
  {
    title: "Angular",
    proficiency: "Advanced",
    level: "80",
  },
  {
    title: "Node",
    proficiency: "Expert",
    level: "60",
  },
  {
    title: "Figma & Adobe",
    proficiency: "Regular",
    level: "50",
  },
];

const Technologies = () => {
  return (
    <div className="flex flex-col gap-10 px-10 md:px-20 mt-10 md:mt-20 mb-4">
      <p className="font-semibold text-2xl">Technologies</p>
      <div className="flex flex-col gap-8 justify-center items-center">
        {listStack.map((stack, i) => (
          <div key={i} className="flex flex-col w-[100%] md:w-[50%]">
            <div className="flex justify-between items-center">
              <p className="md:text-lg text-sm">{stack.title}</p>
              <p className="text-xs">{stack.proficiency}</p>
            </div>
            <div className="bg-[#162950] rounded-2xl h-3 md:h-4 w-full">
              <div
                style={{
                  width: `${stack.level}%`,
                }}
                className={`bg-gradient-to-r from-[#8168d4] to-[#41a4c8] rounded-3xl h-full`}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* additional tech/skills */}
      <Skills />
    </div>
  );
};

export default Technologies;
