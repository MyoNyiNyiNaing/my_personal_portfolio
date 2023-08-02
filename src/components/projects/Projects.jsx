import "./projects.css";
import { projects } from "./projects";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect, useRef } from "react";
import Button from "../Button";
import html from "../../assets/logos/html-5.svg";
import css from "../../assets/logos/css-3.svg";
import react from "../../assets/logos/react.svg";
import redux from "../../assets/logos/redux.svg";
import { TbBrandMantine } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { PiArrowSquareOutBold } from "react-icons/pi";

import "swiper/css";
import "swiper/css/navigation";

const Projects = () => {
  const sliderRef = useRef();
  Aos.init();

  return (
    <div
      id="projects"
      className="max-w-[1215px] px-5 md:mx-auto flex flex-col justify-center"
    >
      <div
        className=" text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-delay="100"
      >
        <div className=" inline-block transform translate-x-0 translate-y-0 translate-z-0 scale-x-100 scale-y-100 scale-z-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d">
          <h6 className=" text-transparent bg-clip-text leading-[100%] bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 inline-block font-bold text-base uppercase tracking-[4px]">
            Projects
          </h6>
        </div>
        <div className=" max-w-[810px] mt-[20px] mb-[110px] text-center mx-auto">
          <h2 className="text-[30px] md:text-title_sm lg:text-title font-bold leading-[110%] tracking-[1px]">
            I bring results My clients <br /> are proof
          </h2>
        </div>
      </div>

      {/* google contact clone  */}
      <div className=" py-[50px] grid md:grid-cols-2 items-center max-lg:gap-10">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="100"
          className=" relative project-img-wrapper overflow-hidden max-w-[500px] max-h-[350px]"
        >
          <img
            className=" w-full object-cover object-center"
            src={projects[0].image}
            alt=""
          />
          <div className=" project-img-overlay"></div>

          <div className=" project-img-overlay-text flex items-center justify-center">
            <div className=" text-center">
              <h1 className=" project-img-overlay-title text-base md:text-[28px] font-bold mb-5 text-transparent bg-clip-text leading-[100%] bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 uppercase">
                {projects[0].title}
              </h1>
              <div className=" flex items-center justify-center text-red-500 gap-8 project-img-overlay-para">
                <button className="flex items-center gap-2 ">
                  View Demo{" "}
                  <PiArrowSquareOutBold className=" text-[22px] text-white" />
                </button>
                <BsGithub className=" text-white text-[30px] hover:scale-125 transition duration-500 hover:opacity-80" />
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="100"
          className=" md:w-[90%]"
        >
          <h4 className="mb-2 text-transparent bg-clip-text leading-[100%] bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 inline-block font-bold md:text-[18px] uppercase tracking-[4px]">
            {projects[0].subTitle}
          </h4>
          <h1 className="mb-5 text-[26px] md:text-title_sm font-bold leading-[110%] tracking-[1px]">
            {projects[0].title}
          </h1>
          <p className=" mb-5 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            maiores libero quod ipsum harum laborum odio minus dolor rem
            repellat.
          </p>
          <div className=" mb-8 flex items-center flex-wrap gap-3">
            <div className=" text-[12px] flex items-center gap-1 bg-gray-100 text-black font-[700] px-2 py-1 w-fit">
              <img width={30} src={html} alt="" />
              HTML5
            </div>
            <div className=" text-[12px] flex items-center gap-1 bg-gray-100 text-black font-[700] px-2 py-1 w-fit">
              <img width={30} src={css} alt="" />
              CSS3
            </div>
            <div className=" text-[12px] flex items-center gap-1 bg-gray-100 text-black font-[700] px-2 py-1 w-fit">
              <img width={30} src={react} alt="" />
              React
            </div>
            <div className=" text-[12px] flex items-center gap-1 bg-gray-100 text-black font-[700] px-2 py-1 w-fit">
              <img width={30} src={redux} alt="" />
              Redux
            </div>
          </div>
          <div className=" ml-2 flex items-center gap-10">
            <Button text={"View Project"} />
            <BsGithub className=" text-[30px] hover:scale-125 transition duration-500 hover:opacity-80" />
          </div>
        </div>
      </div>

      {/* hotale  */}

      <div className=" py-[50px] flex flex-col-reverse md:grid md:grid-cols-2 items-center max-lg:gap-10">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="100"
          className=" md:w-[90%]"
        >
          <h4 className="mb-2 text-transparent bg-clip-text leading-[100%] bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 inline-block font-bold md:text-[18px] uppercase tracking-[4px]">
            {projects[1].subTitle}
          </h4>
          <h1 className="mb-5 text-[26px] md:text-title_sm font-bold leading-[110%] tracking-[1px]">
            {projects[1].title}
          </h1>
          <p className=" mb-5 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            incidunt aut fuga nam assumenda quibusdam exercitationem quis, odio,
            dolor itaque omnis? Ratione nisi veniam cupiditate.
          </p>
          <div className=" mb-8 flex items-center flex-wrap gap-3">
            <div className=" text-[12px] flex items-center gap-1 bg-gray-100 text-black font-[700] px-2 py-1 w-fit">
              <img width={30} src={html} alt="" />
              HTML5
            </div>
            <div className=" text-[12px] flex items-center gap-1 bg-gray-100 text-black font-[700] px-2 py-1 w-fit">
              <img width={30} src={css} alt="" />
              CSS3
            </div>
            <div className=" text-[12px] flex items-center gap-1 bg-gray-100 text-black font-[700] px-2 py-1 w-fit">
              <img width={30} src={react} alt="" />
              React
            </div>
            <div className=" text-[12px] flex items-center gap-1 bg-gray-100 text-black font-[700] px-2 py-1 w-fit">
              <img width={30} src={redux} alt="" />
              Redux
            </div>
            <div className=" text-[12px] flex items-center gap-1 bg-gray-100 text-black font-[700] px-2 py-1 w-fit">
              <TbBrandMantine className=" text-[30px] text-blue-500" />
              Mantine
            </div>
          </div>
          <div className=" ml-2 flex items-center gap-10">
            <Button text={"View Project"} />
            <BsGithub className=" text-[30px] hover:scale-125 transition duration-500 hover:opacity-80" />
          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="100"
          className=" relative project-img-wrapper overflow-hidden max-w-[500px] max-h-[350px]"
        >
          <img
            className=" w-full object-cover object-center"
            src={projects[1].image}
            alt=""
          />
          <div className=" project-img-overlay"></div>

          <div className=" project-img-overlay-text flex items-center justify-center">
            <div className="text-center">
              <h1 className="project-img-overlay-title text-base md:text-[28px] font-bold mb-5 text-transparent bg-clip-text leading-[100%] bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 uppercase">
                {projects[1].title}
              </h1>
              <div className=" flex items-center justify-center text-red-500 gap-8 project-img-overlay-para">
                <button className="flex items-center gap-2 ">
                  View Demo{" "}
                  <PiArrowSquareOutBold className=" text-[22px] text-white" />
                </button>
                <BsGithub className=" text-white text-[30px] hover:scale-125 transition duration-500 hover:opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* hotale dashboard  */}

      <div className=" py-[50px] grid md:grid-cols-2 items-center max-lg:gap-10">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="100"
          className=" relative project-img-wrapper overflow-hidden max-w-[500px] max-h-[350px]"
        >
          <img
            className=" w-full object-cover object-center"
            src={projects[2].image}
            alt=""
          />
          <div className=" project-img-overlay"></div>

          <div className=" project-img-overlay-text flex items-center justify-center">
            <div className="text-center">
              <h1 className="project-img-overlay-title text-base md:text-[28px] font-bold mb-5 text-transparent bg-clip-text leading-[100%] bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 uppercase">
                {projects[2].title}
              </h1>
              <div className=" flex items-center justify-center text-red-500 gap-8 project-img-overlay-para">
                <button className="flex items-center gap-2 ">
                  View Demo{" "}
                  <PiArrowSquareOutBold className=" text-[22px] text-white" />
                </button>
                <BsGithub className=" text-white text-[30px] hover:scale-125 transition duration-500 hover:opacity-80" />
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="100"
          className=" md:w-[90%]"
        >
          <h4 className="mb-2 text-transparent bg-clip-text leading-[100%] bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 inline-block font-bold md:text-[18px] uppercase tracking-[4px]">
            {projects[2].subTitle}
          </h4>
          <h1 className="mb-5 text-[26px] md:text-title_sm font-bold leading-[110%] tracking-[1px]">
            {projects[2].title}
          </h1>
          <p className=" mb-5 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            maiores libero quod ipsum harum laborum odio minus dolor rem
            repellat.
          </p>
          <div className=" mb-8 flex items-center flex-wrap gap-3">
            <div className=" text-[12px] flex items-center gap-1 bg-gray-100 text-black font-[700] px-2 py-1 w-fit">
              <img width={30} src={html} alt="" />
              HTML5
            </div>
            <div className=" text-[12px] flex items-center gap-1 bg-gray-100 text-black font-[700] px-2 py-1 w-fit">
              <img width={30} src={css} alt="" />
              CSS3
            </div>
            <div className=" text-[12px] flex items-center gap-1 bg-gray-100 text-black font-[700] px-2 py-1 w-fit">
              <img width={30} src={react} alt="" />
              React
            </div>
            <div className=" text-[12px] flex items-center gap-1 bg-gray-100 text-black font-[700] px-2 py-1 w-fit">
              <TbBrandMantine className=" text-[30px] text-blue-500" />
              Mantine
            </div>
            <div className=" text-[12px] flex items-center gap-1 bg-gray-100 text-black font-[700] px-2 py-1 w-fit">
              <img width={30} src={redux} alt="" />
              Redux
            </div>
          </div>
          <div className=" ml-2 flex items-center gap-10">
            <Button text={"View Project"} />
            <BsGithub className=" text-[30px] hover:scale-125 transition duration-500 hover:opacity-80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
