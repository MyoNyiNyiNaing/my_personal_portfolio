import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/services/Services.jsx";
import Projects from "../components/projects/Projects.jsx";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import ThemeBtn from "../components/Theme/ThemeBtn";
import Loading from "../components/Loading/Loading";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, [3000]);
  }, []);

  const [darkMode, setDarkMode] = useState(false);
  const iconToggle = () => {
    return setDarkMode((darkMode) => !darkMode);
  };

  const ThemeCheck = () => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
      return;
    }
    setDarkMode(false);
  };

  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      iconToggle();
      return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
  };

  useEffect(() => {
    ThemeCheck();
  }, []);
  return (
    <>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <main>
            <Header darkMode={darkMode} themeSwitch={themeSwitch} />
            <main className=" overflow-hidden relative dark:bg-[#150112] dark:text-white">
              <ThemeBtn darkMode={darkMode} themeSwitch={themeSwitch} />
              <section className="">
                <Hero />
              </section>
              <section className=" py-[80px]">
                <Services />
              </section>
              <section className=" py-[80px]">
                <Projects />
              </section>
              <section className=" py-[80px]">
                <About />
              </section>

              <section className=" py-[80px]">
                <Testimonials />
              </section>
              <section className=" py-[80px]">
                <Contact />
              </section>
              {/* <section className=" ">
                <Faq />
              </section> */}
            </main>
            <Footer />
          </main>
        )}
      </div>
    </>
  );
};

export default Home;
