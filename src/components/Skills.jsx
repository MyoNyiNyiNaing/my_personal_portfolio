import React from "react";

import "./Skill.css";
import html from "../assets/logos/html-5.svg";
import css from "../assets/logos/css-3.svg";
import react from "../assets/logos/react.svg";
import redux from "../assets/logos/redux.svg";
import javascript from "../assets/logos/javascript.svg";
import php from "../assets/logos/php.svg";
import bootstrap from "../assets/logos/bootstrap.svg";
import tailwindcss from "../assets/logos/tailwindcss.svg";
import vue from "../assets/logos/vue.svg";
import laravel from "../assets/logos/laravel.svg";


import Skill from "./Skill";

const Skills = () => {
  
  const technicalSkills = [
    { id: 1, img: html, per: 90 },
    { id: 2, img: css, per: 65 },
    { id: 3, img: javascript, per: 70 },
    { id: 4, img: react, per: 80 },
  ];

  const technicalSkills2 = [
    { id: 1, img: vue, per: 75 },
    { id: 2, img: php, per: 70 },
    { id: 3, img: laravel, per: 80 },
    { id: 4, img: tailwindcss, per: 80 },
  ];

 

  return (
    <div className=" max-w-[1215px] mx-auto font-[500] text-[14px]">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-delay="300"
        className="text-center mb-20"
      >
        <h3 className=" inline-block uppercase text-transparent bg-clip-text leading-[100%] bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 text-base font-[600] tracking-wider my-2">
          My Skills
        </h3>
        <h1 className="text-[30px] md:text-title_sm lg:text-title dark:text-white text-black font-[700]">
          Technical Skills
        </h1>
      </div>
      <div className=" grid lg:grid-cols-2 gap-20 max-lg:gap-10">
        <div>
          <div className=" space-y-10">
            {technicalSkills.map((skill) => (
              <Skill key={skill.id} skill={skill}/>
            ))}
          </div>
        </div>

        <div>
          <div className=" space-y-10">
            {technicalSkills2.map((skill) => (
              <Skill key={skill.id} skill={skill}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
