import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import EducationExperience from "./Education&Experience";
import Skills from "./Skills";
import Button from "../components/Button";
import animationData from "../lottie/animation_about.json";
import Lottie from "react-lottie";

const About = () => {
  Aos.init();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
            <Lottie options={defaultOptions} />
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay="300"
            className="w-[80%] font-[500]"
          >
            <p className=" text-base mb-5">Hello! i'm Myo Nyi Nyi Naing </p>
            <p className="mb-10 text-gray-500 dark:text-gray-300">
              I am 22 years old. I am currently attending a Special Web Design
              course at MMS - IT. Gentlemen, contact me now without getting
              frustrated with the technical difficulties required for your
              business. Thank you
            </p>

            <div className=" ml-2">
              <Button text={"Download CV"} />
            </div>
          </div>
        </div>
      </div>

      {/* gallery
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-4 sm:w-[70%] lg:w-full mx-auto gap-5 mb-[90px]">
        <div className="">
          <img className="h-[300px] sm:h-[500px] w-full object-cover object-center" src="https://assets.website-files.com/5fef5619b640934b33c2385e/60751db05a9a1b47d320c2a0_image_processing20200129-19798-1k8ponz%207-min.png" />
        </div>
        <div className=" order-1 lg:order-none lg:col-span-2 ">
          <img className="h-[300px] sm:h-[500px] w-full object-cover" src="https://assets.website-files.com/5fef5619b640934b33c2385e/60751db04d121379342550c6_image_processing20200129-19798-1k8ponz%2011-min-p-500.png" />
        </div>
        <div className=" flex justify-between gap-5 lg:flex lg:flex-col">
          <img  className="h-auto sm:h-[240px] w-[48%] md:w-full object-cover" src="https://assets.website-files.com/5fef5619b640934b33c2385e/60751db006dd19aa20e10edf_image_processing20200129-19798-1k8ponz%2012-min.png" />
          <img  className="h-auto sm:h-[240px] w-[48%] md:w-full object-cover" src="https://assets.website-files.com/5fef5619b640934b33c2385e/60751db0f84d7b28be5d1883_image_processing20200129-19798-1k8ponz%2013-min.png" />
        </div>
      </div> */}
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
