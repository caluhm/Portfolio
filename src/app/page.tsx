'use client'

import { MouseEvent, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [movementX, setMovementX] = useState(0);
  const [movementY, setMovementY] = useState(0);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const manageMouseMove = (e: MouseEvent<HTMLElement, MouseEvent>) => {
    const { movementX, movementY } = e;
    setMovementX(movementX);
    setMovementY(movementY);
  };

  return (
    <>
      <Navbar theme={theme} handleThemeSwitch={handleThemeSwitch} />
      <main
        className="max-w-screen min-h-screen overflow-hidden bg-neutral-50 dark:bg-neutral-950"
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
      >
        <HeroSection />
        <AboutSection movementX={movementX} movementY={movementY} />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
