import React from "react";
import Button from "./Button";
import { FiArrowRight } from "react-icons/fi";
// import profile from "../assets/profile-removebg-preview.png";
import profile2 from "../assets/profile2.png";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";
import animationData from "../lottie/animation_hero.json";
import Lottie from "lottie-react";
import { Link } from "react-scroll";

const Hero = () => {
  Aos.init();

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Myo Nyi", "a Web Developer"],
      typeSpeed: 40,
      backSpeed: 40,
      backDelay: 1000,
      startDelay: 1000,
      cursorChar: "|",
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div id="home" className="max-w-[1215px] h-auto lg:h-screen mx-auto">
      <div className="flex flex-wrap-reverse px-5 justify-between items-center">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="100"
          className="w-full lg:px-0 mx-auto lg:w-[550px] xl:w-[650px] mb-[100px] lg:mb-0"
        >
          <h5 className="mb-2 text-base font-[700] dark:text-gray-300 text-gray-500">
            HELLO
          </h5>
          <h1 className="text-[30px] md:text-title_sm lg:text-title font-[700] mb-5 ">
            I'm{" "}
            <span
              ref={el}
              className="text-transparent bg-clip-text leading-[100%] bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500"
            ></span>{" "}
          </h1>
          <p className="max-w-[550px] text-base_sm font-[500] mb-5 dark:text-gray-300 text-gray-500">
            a frontend developer based in Yangon,Myanmar. I create user-friendly
            interfaces for fast-growing startups.
          </p>

          <div className=" flex flex-col gap-8">
            <div className=" flex items-center gap-5">
              <div className=" text-[30px] hover:scale-125 transition duration-500 hover:opacity-80">
                <a
                  target="blank"
                  href="https://www.facebook.com/myo.nyi.1884787/"
                >
                  <BsFacebook />
                </a>
              </div>
              <div className=" text-[30px] hover:scale-125 transition duration-500 hover:opacity-80">
                <a
                  target="blank"
                  href="https://www.instagram.com/myonyinyinaing88/"
                >
                  <BsInstagram />
                </a>
              </div>
              <div className=" text-[30px] hover:scale-125 transition duration-500 hover:opacity-80">
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/myo-nyi-a5888b19b/"
                >
                  <BsLinkedin />
                </a>
              </div>
              <div className=" text-[30px] hover:scale-125 transition duration-500 hover:opacity-80">
                <a target="blank" href="https://github.com/MyoNyiNyiNaing">
                  <BsGithub />
                </a>
              </div>
            </div>
            <div className=" w-fit">
              <Link to="contact">
                <Button text={"Hire Me"} />
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="100"
          className="mx-auto mb-5 md:mb-0 w-[300px] lg:w-[400px] xl:w-[500px]"
        >
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
