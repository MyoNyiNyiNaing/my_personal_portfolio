import { Accordion } from "@mantine/core";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  Aos.init();
  const accordionData = [
    {
      id: 1,
      value: "Eligible",
      heading: "What type of projects do you take on?",
      content:
        " I usually work on B2C software, that's my forte--where I shine best. But I also have about 15 B2B software products in my portfolio. I do end-to-end product design + branding.",
    },
    {
      id: 2,
      value: "Time",
      heading: "What is your hourly rate?",
      content:
        "I only charge hourly for my ongoing projects that need work on the regular. One-time projects are charged upfront to keep it transparent and clean! My hourly rate is $100.",
    },
    {
      id: 3,
      value: "Support",
      heading: "What time-zone do you work in?",
      content:
        "I work Pacific Standard Time, but I'm always ready to help out in emergencies, no matter the hour.",
    },
    {
      id: 4,
      value: "Python",
      heading: "What is the typical timeline for a project?",
      content:
        "Depends on the scope of the project, really. Some projects take less than a week. Some take months. The best way to find out is to get on a quick call with me, and discuss it. No strings attached!",
    },
    // Add more sections as needed
  ];

  const accordionData2 = [
    {
      id: 1,
      value: "Eligible",
      heading: "How do you charge for projects ?",
      content:
        "I quote a price upfront--so that you know exactly what you're paying and for what, and there are no surprises later. The exact cost of your project depends on the scope and requirements!",
    },
    {
      id: 2,
      value: "Time",
      heading: "What does your design process look like? ",
      content:
        "I take a problem-forward approach. Whether we're iterating on an existing product or building a new one from scratch, how to solve the user's problem in the simplest way possible is my first concern.",
    },
    {
      id: 3,
      value: "Support",
      heading: "What metrics do you use to measure success?",
      content:
        "The best metrics are customer adoption, happiness, task success, and engagement. There are a number of frameworks such as the System Usability Scale that help us understand product performance and I'm happy to help with that.",
    },
    {
      id: 4,
      value: "Python",
      heading: "What if I need help after the project is complete?",
      content:
        "I always make sure to help out my clients one month after the project ends, for free. For any help post that, we can work out an ongoing arrangement!",
    },
    // Add more sections as needed
  ];

  return (
    <div className=" py-20 bg-black  text-white dark:bg-white dark:text-black">
      <div className="max-w-[1215px] mx-auto px-5">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          className=" text-center mb-20"
        >
          <h3 className=" mb-5 inline uppercase text-transparent bg-clip-text leading-[100%] bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 text-base font-[600] tracking-wider my-2">
            FAQ
          </h3>
          <h1 className="text-[30px] md:text-title_sm lg:text-title font-[700]">Frequently asked questions</h1>
        </div>

        {/* questions and answers  */}
        <div className=" grid lg:grid-cols-2 lg:gap-16">
          {/* left  */}

          <div>
            <Accordion>
              {accordionData.map((item, index) => (
                <Accordion.Item
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  data-aos-delay={150 * index}
                  key={item.id}
                  value={item.value}
                >
                  <Accordion.Control>
                    <div className=" text-base font-Montserrat text-white dark:text-black">
                      {item.heading}
                    </div>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <p className=" -ml-3 text-sm font-Montserrat text-gray-300 dark:text-gray-500">
                      {item.content}
                    </p>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>

          {/* right  */}

          <div>
            <Accordion>
              {accordionData2.map((item, index) => (
                <Accordion.Item
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  data-aos-delay={150 * index}
                  key={item.id}
                  value={item.value}
                >
                  <Accordion.Control>
                    <div className=" text-base font-Montserrat text-white dark:text-black">
                      {item.heading}
                    </div>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <p className=" -ml-3 text-sm font-Montserrat text-gray-300 dark:text-gray-500">
                      {item.content}
                    </p>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
