import "aos/dist/aos.css";
import Aos from "aos";
import Button from "../Button";

const ServicesCard = ({ img, img2, title, para }) => {
  Aos.init();

  const isDarkMode = document.documentElement.classList.contains("dark");

  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-delay="100"
      >
        <img
          className="object-contain w-[70px] h-[70px]"
          src={isDarkMode ? img2 : img}
          alt=""
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-delay="100"
        className=" mt-[42px] mb-[20px]"
      >
        <h5 className=" text-lg leading-[110%] font-bold">{title}</h5>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-delay="100"
        className=" mb-[30px]"
      >
        <p className=" text-sm dark:text-[#dadada] text-[#666]">{para}</p>
      </div>
      <div className=" ml-2">
        <Button text={"See More"} />
      </div>
    </div>
  );
};

export default ServicesCard;
