"use client";

import { useRef, useEffect } from "react";

import { LiaDownloadSolid } from "react-icons/lia";
import { BsArrowRight } from "react-icons/bs";

export default function HeroSection() {
  const appRef = useRef(null);

  useEffect(() => {
    const moveGradient = (e) => {
      const winWidth = window.innerWidth;
      const winHeight = window.innerHeight;

      let mouseX = winWidth / 2; // Default to center of the screen
      let mouseY = winHeight / 2; // Default to center of the screen

      if (e.pageX !== undefined && e.pageY !== undefined) {
        mouseX = Math.round((e.pageX / winWidth) * 100);
        mouseY = Math.round((e.pageY / winHeight) * 100);
      }

      if (appRef.current) {
        appRef.current.style.setProperty("--mouse-x", mouseX.toString() + "%");
        appRef.current.style.setProperty("--mouse-y", mouseY.toString() + "%");
      }
    };

    // Call moveGradient manually to set initial values on component mount
    moveGradient({});

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
          <div className="flex flex-col gap-6 sm:max-w-3xl">
            <div className="flex flex-col gap-3">
              <h1 className="pb-2 text-center text-4xl font-extrabold text-neutral-950 dark:text-neutral-50 sm:text-7xl">
                calumjarvis.dev
              </h1>
              <h2 className="text-center text-base font-semibold text-neutral-800 dark:text-neutral-300 sm:text-2xl">
                👋 Hello, I'm a <strong>Front-End Developer</strong> and{" "}
                Computer Science Graduate based in 📍 Manchester, England.
              </h2>
              <h3 className="text-center text-sm font-medium text-neutral-800 dark:text-neutral-300 sm:text-xl">
                I enjoy creating stuff that lives on the internet, whether that
                be websites, applications, or anything in between.
              </h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 text-sm font-medium text-neutral-950 dark:text-neutral-50 sm:flex-row sm:gap-3 sm:text-base">
              <a 
              href="/CV.pdf" download
              className="flex w-fit cursor-pointer flex-row items-center justify-center rounded-full bg-sky-500 px-4 py-2 drop-shadow-md transition-colors duration-200 ease-in-out hover:bg-sky-400 dark:bg-indigo-500 dark:hover:bg-indigo-600">
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
}
