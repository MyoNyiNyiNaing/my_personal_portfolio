import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import EducationExperience from "./Education&Experience";
import Skills from "./Skills";
import Button from "../components/Button";
import animationData from "../lottie/animation_about.json";
import Lottie from "lottie-react";

const About = () => {
  Aos.init();

  return (
    <div id="about" className="max-w-[1215px] px-5 mx-auto">
      {/* about  */}
      <div className="mb-[90px]">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="200"
          className=" mb-10 text-center"
        >
          <h3 className="  w-fit mx-auto uppercase text-transparent bg-clip-text leading-[100%] bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 text-base font-[600] tracking-wider my-2">
            Frontend Developer
          </h3>
          <h1 className="text-[30px] md:text-title_sm lg:text-title dark:text-white text-black font-[700]">
            That's me!
          </h1>
        </div>
        <div className=" grid md:grid-cols-2 gap-10 items-center">
          <div className=" max-w-[450px] mx-auto">
            <Lottie animationData={animationData} loop={true} />
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay="300"
            className=" w-full md:w-[85%] font-[500]"
          >
            <p className=" text-base mb-5">Hello! i'm Myo Nyi Nyi Naing </p>
            <p className="mb-10 text-gray-500 dark:text-gray-300">
              I am 22 years old frontend web developer adept at
              crafting visually captivating user interfaces and delivering
              seamless online experiences with a deep understanding of modern
              web technologies. Contact me now without getting frustrated with
              the technical difficulties required for your business.
            </p>

            <div className=" ml-2">
              <Button text={"Download CV"} />
            </div>
          </div>
        </div>
      </div>

      <div className=" mb-[90px]">
        <Skills />
      </div>
      <div>
        <EducationExperience />
      </div>
    </div>
  );
};

export default About;
