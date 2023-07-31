"use client";

import { useState } from "react";
import SectionContainer from "./SectionContainer";
import { FrontEndSkills, BackEndSkills, ExtraSkills } from "./skills/Skills";

export default function SkillsSection() {
  const [isFrontEndSelected, setIsFrontEndSelected] = useState(true);
  const [isBackEndSelected, setIsBackEndSelected] = useState(true);
  const [isExtrasSelected, setIsExtrasSelected] = useState(true);
  return (
    <SectionContainer
      id="skills"
      customHeight={"min-h-screen sm:min-h-[75vh]"}
      colouredBg
    >
      <div className="flex h-full w-full flex-col items-center justify-center pt-6 sm:pt-12">
        <h3 className="section-header">My Skills</h3>
        <div className="flex w-full flex-col items-center justify-center gap-6 px-3 py-16 sm:px-5">
          <aside className="flex flex-row gap-4">
            <button
              className={`rounded-md border-2 border-sky-500 bg-sky-500 px-3 py-1 text-center text-lg font-medium text-neutral-950 dark:border-indigo-500 dark:bg-indigo-500 dark:text-neutral-50 sm:px-4 sm:py-2 ${
                isFrontEndSelected
                  ? "border-sky-300 bg-sky-500 dark:border-indigo-300 dark:bg-indigo-500"
                  : "bg-transparent dark:bg-transparent"
              }`}
              onClick={() => setIsFrontEndSelected(!isFrontEndSelected)}
            >
              Frontend
            </button>
            <button
              className={`rounded-md border-2 border-sky-500 bg-sky-500 px-3 py-1 text-center text-lg font-medium text-neutral-950 dark:border-indigo-500 dark:bg-indigo-500 dark:text-neutral-50 sm:px-4 sm:py-2 ${
                isBackEndSelected
                  ? "border-sky-300 bg-sky-500 dark:border-indigo-300 dark:bg-indigo-500"
                  : "bg-transparent dark:bg-transparent"
              }`}
              onClick={() => setIsBackEndSelected(!isBackEndSelected)}
            >
              Backend
            </button>
            <button
              className={`rounded-md border-2 border-sky-500 bg-sky-500 px-3 py-1 text-center text-lg font-medium text-neutral-950 dark:border-indigo-500 dark:bg-indigo-500 dark:text-neutral-50 sm:px-4 sm:py-2 ${
                isExtrasSelected
                  ? "border-sky-300 bg-sky-500 dark:border-indigo-300 dark:bg-indigo-500"
                  : "bg-transparent dark:bg-transparent"
              }`}
              onClick={() => setIsExtrasSelected(!isExtrasSelected)}
            >
              Extras
            </button>
          </aside>
          <div className="h-full max-w-[36rem]">
            <div className="mb-6 h-[2px] w-full bg-neutral-400 dark:bg-neutral-600"></div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {isFrontEndSelected &&
                FrontEndSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center rounded-md border-2 border-sky-500 bg-sky-500 px-3 py-1 text-center text-lg font-medium text-neutral-950 dark:border-indigo-500 dark:bg-indigo-500 dark:text-neutral-50 sm:px-4 sm:py-2"
                  >
                    {skill}
                  </div>
                ))}
              {isBackEndSelected &&
                BackEndSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center rounded-md border-2 border-sky-500 bg-sky-500 px-3 py-1 text-center text-lg font-medium text-neutral-950 dark:border-indigo-500 dark:bg-indigo-500 dark:text-neutral-50 sm:px-4 sm:py-2"
                  >
                    {skill}
                  </div>
                ))}
              {isExtrasSelected &&
                ExtraSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center rounded-md border-2 border-sky-500 bg-sky-500 px-3 py-1 text-center text-lg font-medium text-neutral-950 dark:border-indigo-500 dark:bg-indigo-500 dark:text-neutral-50 sm:px-4 sm:py-2"
                  >
                    {skill}
                  </div>
                ))}
              {!isFrontEndSelected &&
                !isBackEndSelected &&
                !isExtrasSelected && (
                  <p className="text-center text-lg font-medium text-neutral-950 dark:text-neutral-50">
                    No skills selected...
                  </p>
                )}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
