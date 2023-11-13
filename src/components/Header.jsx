import React, { useEffect, useState } from "react";
import "./Header.css";
import ScrollTop from "./ScrollTop";
import { Link } from "react-scroll";
import ThemeBtn from "./Theme/ThemeBtn";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const Header = ({ darkMode, themeSwitch }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setLastScroll(window.scrollY);
  }, []);

  const handleShowNav = () => {
    let scrollTop = window.scrollY;
    if (scrollTop > 100) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }

    setLastScroll(scrollTop);
  };

  window.addEventListener("scroll", handleShowNav);

  return (
    <>
      {/* origin navbar  */}
      <nav
        className={` relative z-50 w-full top-0  transition-transform duration-300 bg-white dark:bg-[#150112] dark:text-white`}
      >
        <div
          className={` max-w-[1215px] z-50 px-5 lg:mx-auto sticky top-0 flex items-center justify-between h-[75px] bg-white dark:bg-[#150112] dark:text-white`}
        >
          <div>
            <h1 className=" text-black dark:text-white text-[25px] font-[700]">
              My Portfolio<span className=" text-red-400">.</span>
            </h1>
          </div>
          <div className=" max-lg:hidden">
            <ul className="nav-link flex items-center gap-10">
              <li>
                <Link
                  to="home"
                  activeClass="active"
                  spy={true}
                  className=" cursor-pointer text-sm font-[500] hover:text-gray-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  activeClass="active"
                  spy={true}
                  className=" cursor-pointer text-sm font-[500] hover:text-gray-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  activeClass="active"
                  spy={true}
                  className=" cursor-pointer text-sm font-[500] hover:text-gray-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  activeClass="active"
                  spy={true}
                  className=" cursor-pointer text-sm font-[500] hover:text-gray-400"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  activeClass="active"
                  spy={true}
                  className=" cursor-pointer text-sm font-[500] flex items-center group hover:text-gray-400"
                >
                  Book a call{" "}
                  <AiOutlineArrowRight className=" transition-all duration-200 transform translate-x-2 group-hover:translate-x-4" />
                </Link>
              </li>
            </ul>
          </div>

          {/* mobile menu  */}

          <div className="flex items-center lg:hidden ">
            <button
              onClick={() => themeSwitch()}
              className={`p-3 rounded-md outline outline-offset-0 text-md transition-all duration-500  ${
                darkMode
                  ? "bg-white outline-black text-black"
                  : "outline-white bg-black text-white"
              }`}
            >
              {darkMode ? (
                <BsMoonStarsFill className="hover:animate-pulse" />
              ) : (
                <BsSunFill className=" hover:animate-[spin_2s_infinite]" />
              )}
            </button>
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className={`${menuOpen && "open"} menu-icon-origin`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div
          className={`${
            menuOpen
              ? "translate-y-0 top-[70px]  shadow-2xl"
              : "-translate-y-full top-0"
          } bg-white dark:bg-[#150112] dark:text-white lg:hidden h-fit w-full absolute py-8 px-5 left-0 transition-all duration-500`}
        >
          <ul className="nav-link flex flex-col gap-10 ">
            <li>
              <Link
                to="home"
                activeClass="active"
                spy={true}
                onClick={() => setMenuOpen(!menuOpen)}
                className=" cursor-pointer text-sm font-[500] hover:text-gray-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                activeClass="active"
                spy={true}
                onClick={() => setMenuOpen(!menuOpen)}
                className=" cursor-pointer text-sm font-[500] hover:text-gray-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="services"
                activeClass="active"
                spy={true}
                onClick={() => setMenuOpen(!menuOpen)}
                className=" cursor-pointer text-sm font-[500] hover:text-gray-400"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                activeClass="active"
                spy={true}
                onClick={() => setMenuOpen(!menuOpen)}
                className=" cursor-pointer text-sm font-[500] hover:text-gray-400"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                activeClass="active"
                spy={true}
                onClick={() => setMenuOpen(!menuOpen)}
                className=" cursor-pointer text-sm font-[500] flex items-center group hover:text-gray-400"
              >
                Book a call{" "}
                <AiOutlineArrowRight className=" transition-all duration-200 transform translate-x-2 group-hover:translate-x-4" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* new navbar  */}
      <nav
        className={`${
          showNav ? " translate-y-0" : " opacity-0 -translate-y-[200px]"
        } z-50 fixed w-full top-0  transition-transform duration-1000 text-white dark:text-black bg-[#150112] dark:bg-white `}
      >
        <div
          className={` max-w-[1215px] z-50 px-5 lg:mx-auto sticky top-0 flex items-center justify-between h-[75px] text-white dark:text-black bg-[#150112] dark:bg-white`}
        >
          <div>
            <h1 className=" text-white dark:text-black text-[25px] font-[700]">
              My Portfolio<span className=" text-red-400">.</span>
            </h1>
          </div>
          <div className=" max-lg:hidden">
            <ul className="nav-link flex items-center gap-10">
              <li>
                <Link
                  to="home"
                  activeClass="active"
                  spy={true}
                  className=" cursor-pointer text-sm font-[500] hover:text-gray-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  activeClass="active"
                  spy={true}
                  className=" cursor-pointer text-sm font-[500] hover:text-gray-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  activeClass="active"
                  spy={true}
                  className=" cursor-pointer text-sm font-[500] hover:text-gray-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  activeClass="active"
                  spy={true}
                  className=" cursor-pointer text-sm font-[500] hover:text-gray-400"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  activeClass="active"
                  spy={true}
                  className=" cursor-pointer text-sm font-[500] flex items-center group hover:text-gray-400"
                >
                  Book a call{" "}
                  <AiOutlineArrowRight className=" transition-all duration-200 transform translate-x-2 group-hover:translate-x-4" />
                </Link>
              </li>
            </ul>
          </div>

          {/* mobile menu  */}

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => themeSwitch()}
              className={`p-3 rounded-md outline outline-offset-0 text-md transition-all duration-500  ${
                darkMode
                  ? "bg-white outline-black text-black"
                  : "outline-white bg-black text-white"
              }`}
            >
              {darkMode ? (
                <BsMoonStarsFill className="hover:animate-pulse" />
              ) : (
                <BsSunFill className=" hover:animate-[spin_2s_infinite]" />
              )}
            </button>
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className={`${menuOpen && "open"} menu-icon`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className={`${showNav ? "block" : "hidden"}`}>
          <div
            className={`${
              menuOpen
                ? "translate-y-0 top-[70px]  shadow-2xl"
                : "-translate-y-full top-0"
            } text-white dark:text-black bg-[#150112] dark:bg-white lg:hidden h-fit w-full absolute py-8 px-5 left-0 transition-transform duration-500`}
          >
            <ul className="nav-link flex flex-col gap-10 ">
              <li>
                <Link
                  to="home"
                  activeClass="active"
                  spy={true}
                  onClick={() => setMenuOpen(!menuOpen)}
                  className=" cursor-pointer text-sm font-[500] hover:text-gray-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  activeClass="active"
                  spy={true}
                  onClick={() => setMenuOpen(!menuOpen)}
                  className=" cursor-pointer text-sm font-[500] hover:text-gray-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  activeClass="active"
                  spy={true}
                  onClick={() => setMenuOpen(!menuOpen)}
                  className=" cursor-pointer text-sm font-[500] hover:text-gray-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  activeClass="active"
                  spy={true}
                  onClick={() => setMenuOpen(!menuOpen)}
                  className=" cursor-pointer text-sm font-[500] hover:text-gray-400"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  activeClass="active"
                  spy={true}
                  onClick={() => setMenuOpen(!menuOpen)}
                  className=" cursor-pointer text-sm font-[500] flex items-center group hover:text-gray-400"
                >
                  Book a call{" "}
                  <AiOutlineArrowRight className=" transition-all duration-200 transform translate-x-2 group-hover:translate-x-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <ScrollTop />
    </>
  );
};

export default Header;
