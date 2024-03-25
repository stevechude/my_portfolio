import React from "react";

const listSkills = [
  "Git",
  "Github",
  "Gitlab",
  "Teamwork",
  "Quick Learning",
  "Engagement",
  "Communication",
];

const Skills = () => {
  return (
    <div className="flex flex-col gap-10 mt-10 mb-4">
      <p className="font-semibold text-2xl">
        Additional technologies and soft skills
      </p>
      <div className="flex items-center justify-center">
        <div className="md:grid md:grid-cols-3 flex flex-col w-full md:w-[50%] gap-4 md:gap-8 md:mx-10">
          {listSkills.map((skill, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-2 w-2 bg-white rounded-full" />
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
