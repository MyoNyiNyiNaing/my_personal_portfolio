import React from "react";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import "aos/dist/aos.css";

const Skill = ({ skill }) => {
  Aos.init();

  const { ref, inView, entry } = useInView({ triggerOnce: true });

  const fill = {width : `${skill.per}%`}
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-once="true"
      ref={ref}
      key={skill.id}
    >
      <div>
        <img src={skill.img} width={50} className=" mb-5" alt="" />
      </div>
      <div className="progress-bar">
        <div
          per={skill.per + "%"}
          style={inView ? fill : {}}
          className={` progress-fill bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500
                
                `}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
