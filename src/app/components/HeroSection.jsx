'use client'

import { useRef, useEffect } from "react";

import { LiaDownloadSolid } from "react-icons/lia";
import { BsArrowRight } from "react-icons/bs";

export default function HeroSection() {
  const appRef = useRef(null);

  useEffect(() => {
    const moveGradient = (e) => {
      const winWidth = window.innerWidth;
      const winHeight = window.innerHeight;

      const mouseX = Math.round((e.pageX / winWidth) * 100);
      const mouseY = Math.round((e.pageY / winHeight) * 100);

      if (appRef) {
        appRef.current.style.setProperty("--mouse-x", mouseX.toString() + "%");
        appRef.current.style.setProperty("--mouse-y", mouseY.toString() + "%");
      }
    };

    document.addEventListener("mousemove", moveGradient);
    return function cleanup() {
      document.removeEventListener("mousemove", moveGradient);
    };
  }, [appRef]);

  return (
    <>
      <div
        className="app absolute z-0 h-screen w-full opacity-40 mix-blend-darken dark:opacity-100 dark:mix-blend-soft-light"
        ref={appRef}
      ></div>
      <section
        id="home"
        className="bg-radial-pattern dark:bg-radial-pattern-dark relative z-10 flex h-screen w-full flex-col items-center justify-center gap-4 px-5"
      >
        <div className="flex">
          <div className="flex flex-col gap-5 sm:max-w-3xl">
            <div className="flex flex-col gap-2">
              <h1 className="text-center text-5xl font-bold text-neutral-950 dark:text-neutral-50 sm:text-left sm:text-6xl">
                Calum Jarvis
              </h1>
              <h2 className="text-center text-lg font-medium text-sky-500 dark:text-indigo-500 sm:text-left sm:text-2xl">
                Hello, I am a{" "}
                <span className="bg-gradient-to-r from-neutral-700 to-neutral-500 bg-clip-text font-bold text-transparent dark:from-neutral-300 dark:to-neutral-100">
                  {" "}
                  Front-End Developer{" "}
                </span>{" "}
                from 📍 <span className="underline"> Manchester, England.</span>
              </h2>
              <h3 className="text-md text-center font-medium text-neutral-700 dark:text-neutral-300 sm:text-left sm:text-xl">
                I enjoy creating stuff that lives on the internet, whether that
                be websites, applications, or anything in between.
              </h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 text-sm font-medium text-neutral-950 dark:text-neutral-50 sm:flex-row sm:justify-start sm:gap-3 sm:text-base">
              <a className="flex w-fit cursor-pointer flex-row items-center justify-center rounded-full bg-sky-500 px-4 py-2 drop-shadow-md transition-colors duration-200 ease-in-out hover:bg-sky-400 dark:bg-indigo-500 dark:hover:bg-indigo-600">
                Download CV
                <span className="ml-2">
                  <LiaDownloadSolid className="text-xl" />
                </span>
              </a>
              <a
                href="#projects"
                className="flex w-fit flex-row items-center justify-center rounded-full border-2 border-sky-500 bg-transparent px-4 py-1.5 drop-shadow-md transition-colors duration-200 ease-in-out hover:bg-sky-400 dark:border-indigo-500 dark:hover:bg-indigo-600"
              >
                View Projects
                <span className="ml-2">
                  <BsArrowRight className="text-xl" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
