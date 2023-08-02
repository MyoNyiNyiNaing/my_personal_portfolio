import React, { useRef } from "react";
import {MdArrowForwardIos, MdArrowBackIosNew} from 'react-icons/md'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "./Testimonials.css"

import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';

const Testimonials = () => {
  const sliderRef = useRef();
  const reviews = [
    {
      id: 1,
      name: "John Frankin",
      position: "Founder, Double Bunch",
      img: "https://assets.website-files.com/5fef5619b640934b33c2385e/604788d804dfe4ec1de7bb97_image-1-compressed.jpg",
      description:
        "Jade helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design.",
    },

    {
      id: 2,
      name: "Jennifer Musk",
      position: "Project Manager@ Microsoft",
      img: "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/02/personnel-3-600x600.jpg",
      description:
        "This is unbelievable. After using Testiminial Generator my buisness skyrocketed!",
    },

    {
      id: 3,
      name: "Paul Smith",
      position: "General Manager@ Microsoft",
      img: "https://a6e8z9v6.stackpathcdn.com/hotale/resort/wp-content/uploads/sites/2/2021/02/personnel-2-600x600.jpg",
      description:
        "This is unbelievable. After using Testiminial Generator my buisness skyrocketed!",
    },
  ];
  return (
    <div className=" max-w-[1215px] px-5 mx-auto">
      <div className=" mb-20">
        <h3 className=" mb-5 inline uppercase text-transparent bg-clip-text leading-[100%] bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 text-base font-[600] tracking-wider my-2">
          TESTIMONIALS
        </h3>
        <h1 className="text-[30px] md:text-title_sm lg:text-title font-[700]">Word on the street</h1>
      </div>

      {/* reviews  */}

      <Swiper
        
        onSwiper={(it) => (sliderRef.current = it)}
        slidesPerView={1}
        loop={true}
        
        effect="fade"
        fadeEffect={{crossFade: true}}
       speed={1000}
        modules={[Navigation, EffectFade]}
        className=" mySwiper pb-5"
      >
        {reviews?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className=" max-lg:gap-20 justify-center grid lg:grid-cols-2">
              <div className=" img-wrapper max-w-[500px] h-[450px] overflow-hidden">
                <img className=" object-cover" src={item.img} alt="" />
              </div>
              <div className=" bg-white dark:bg-[#150112]  max-w-[500px] flex flex-col justify-between">
                <div className=" space-y-8 max-lg:mb-10">
                  <img
                    src="https://assets.website-files.com/5fef5619b640934b33c2385e/5ff6a53da27356854576b920_Group%2058.svg"
                    alt=""
                  />
                  <p className=" text-lg md:text-[30px] font-[700]">
                    {item.description}
                  </p>
                </div>
                <div className=" text-base_sm">
                  <p className="  font-[700]">{item.name}</p>
                  <p className="">{item.position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="  mr-5 flex items-center justify-end">
        <div
          onClick={() => sliderRef.current?.slidePrev()}
          className=" z-10 cursor-pointer bg-black text-white dark:text-black dark:bg-white w-12 h-14 flex items-center justify-center"
        >
          <MdArrowBackIosNew />
        </div>
        <div
          onClick={() => sliderRef.current?.slideNext()}
          className=" z-10 cursor-pointer bg-black text-white dark:text-black dark:bg-white w-12 h-14 flex items-center justify-center"
        >
          <MdArrowForwardIos />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
