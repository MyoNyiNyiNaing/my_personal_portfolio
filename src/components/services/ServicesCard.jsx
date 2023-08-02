import "aos/dist/aos.css"
import Aos from "aos";

const ServicesCard = ({ img,img2, title, para, desc1, desc2, desc3 }) => {
  Aos.init();

  const isDarkMode = document.documentElement.classList.contains("dark");

  return (
    <div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="100">
        <img className="object-contain w-[70px]" src={isDarkMode ? img2 : img} alt="" />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="100" className=" mt-[42px] mb-[20px]">
        <h5 className=" text-lg leading-[110%] font-bold">{title}</h5>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="100" className=" max-w-[85%] mb-[25px]">
        <p className=" text-sm dark:text-[#dadada] text-[#666]">{para}</p>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="100">
        <div className=" mb-[10px]">
          <div className="flex justify-start items-center">
            <div className=" flex w-[7px] h-[7px] justify-center items-center rounded-full dark:bg-[#fff] bg-[#000]"></div>
            <div className=" ml-[10px]">
              <div className="dark:text-gray-300 text-[#000] text-sm font-bold">{desc1}</div>
            </div>
          </div>
        </div>
        <div className=" mb-[10px]">
          <div className="flex justify-start items-center">
            <div className=" flex w-[7px] h-[7px] justify-center items-center rounded-full dark:bg-[#fff] bg-[#000]"></div>
            <div className=" ml-[10px]">
              <div className="dark:text-gray-300 text-[#000] text-sm font-bold">{desc2}</div>
            </div>
          </div>
        </div>
        <div className=" mb-[10px]">
          <div className="flex justify-start items-center">
            <div className=" flex w-[7px] h-[7px] justify-center items-center rounded-full dark:bg-[#fff] bg-[#000]"></div>
            <div className=" ml-[10px]">
              <div className="dark:text-gray-300 text-[#000] text-sm font-bold">{desc3}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
