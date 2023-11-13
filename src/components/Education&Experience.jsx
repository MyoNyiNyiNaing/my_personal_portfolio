import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { GoDotFill } from "react-icons/go";
import { PiArrowUpRightBold } from "react-icons/pi";
import "./Education&Experience.css";
import exp1 from "../assets/exp/exp1.svg"
import exp2 from "../assets/exp/exp2.svg"
import exp3 from "../assets/exp/exp3.svg"

const EducationExperience = () => {
  Aos.init();
  const education = [
    
    {
      id: 1,
      name: "Myanmar Maritime University",
      course: "BE(Marine Engineering)",
      startDate: "2018",
      endDate: "2020",
    },
    {
      id: 2,
      name: "Code Lab",
      course: "Web Design",
      startDate: "2022",
      endDate: "2023",
    },
    {
      id: 3,
      name: "MMSIT",
      course: "Web App Development",
      startDate: "2022",
      endDate: "2023",
    },
  ];

  const workExperience = [
    {
      id: 1,
      img: exp1,
      name: "SpaceFleet",
      position: "Junior Product Designer",
      startDate: "April2019",
      endDate: "Current",
    },
    {
      id: 2,
      img: exp2,
      name: "MusicMash",
      position: "Information Architect",
      startDate: "April2016",
      endDate: "May2017",
    },
    {
      id: 3,
      img: exp3,
      name: "Kingdom",
      position: "UI Designer",
      startDate: "April2016",
      endDate: "May2017",
    },
  ];
  return (
    <div>
      <div className="flex flex-wrap w-full justify-between">
        {/* education */}
        <div className=" w-full md:w-[45%] mb-[90px] md:m-0">
          <div>
            <h3
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              className="text-[30px] md:text-title_sm lg:text-title font-[700] mb-8"
            >
              📚 Education
            </h3>
          </div>
          <div>
            {education?.map((el, index) => {
              return (
                <div
                  key={el?.id}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  data-aos-delay={150 * index}
                  className="group"
                >
                  <div className="flex items-start justify-between py-[40px] h-[150px] ">
                    <div className="flex flex-wrap gap-3 w-full items-end justify-between me-5">
                      <div>
                        <h3 className="text-base font-[500] mb-1">
                          {el?.name}
                        </h3>
                        <p className="text-gray-500 font-[500]">{el?.course}</p>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 font-[500]">
                        <GoDotFill />
                        <span>{el?.startDate}</span>-<span>{el.endDate}</span>
                      </div>
                    </div>
                    <div className=" group-hover:translate-x-2 group-hover:-translate-y-2 transition-all delay-75 ease-in-out duration-300">
                      <PiArrowUpRightBold />
                    </div>
                  </div>
                  <div className=" line"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* work experiences */}
        <div className="w-full md:w-[45%]">
          <div>
            <h3
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              className="text-[30px] md:text-title_sm lg:text-title font-[700] mb-8"
            >
              💼 Work Experience
            </h3>
          </div>
          {workExperience.map((el, index) => {
            return (
              <div
                key={el?.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay={150 * index}
                className="group"
              >
                <div className=" flex items-start justify-between py-[40px] h-[150px]  border-b-gray-200 ">
                  <div className="flex flex-wrap gap-3 w-full items-end justify-between me-5">
                    <div className="flex">
                      <img className="w-[50px] me-5" src={el?.img} />
                      <div>
                        <h3 className="text-base font-[500] mb-1">
                          {el?.name}
                        </h3>
                        <p className="text-gray-500 font-[500]">
                          {el?.position}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 font-[500]">
                      <GoDotFill />
                      <span>{el?.startDate}</span>-<span>{el.endDate}</span>
                    </div>
                  </div>
                  <div className=" group-hover:translate-x-2 group-hover:-translate-y-2 transition-all delay-75 ease-in-out duration-300">
                    <PiArrowUpRightBold />
                  </div>
                </div>
                <div className=" line"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EducationExperience;
