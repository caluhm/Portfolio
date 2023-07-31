import SectionContainer from "./SectionContainer";

import { IoMailUnread } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";

export default function ContactSection() {
  return (
    <SectionContainer
      id="contact"
      customHeight={"min-h-[50vh]"}
      noPadding
      customJustify={"justify-center"}
      colouredBg
    >
      <h3 className="section-header">Contact Me</h3>

      <div className="flex flex-col items-start justify-center gap-6 pt-8 text-neutral-950 dark:text-neutral-50">
        <a
          href="mailto:calum.jarvo@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="flex w-full flex-row items-center justify-start gap-2 rounded-md p-2 transition-colors duration-200 ease-in-out hover:bg-sky-500 hover:dark:bg-indigo-500"
        >
          <IoMailUnread className="h-8 w-8 sm:h-10 sm:w-10" />
          <span className="text-base font-medium sm:text-lg">
            calum.jarvo@gmail.com
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/calum-jarvis/"
          target="_blank"
          rel="noreferrer"
          className="flex w-full flex-row items-center justify-start gap-2 rounded-md p-2 transition-colors duration-200 ease-in-out hover:bg-sky-500 hover:dark:bg-indigo-500"
        >
          <BsLinkedin className="h-7 w-7 sm:h-9 sm:w-9" />
          <span className="text-base font-medium sm:text-lg">
            / Calum Jarvis
          </span>
        </a>
        <a
          href="https://github.com/caluhm/"
          target="_blank"
          rel="noreferrer"
          className="flex w-full flex-row items-center justify-start gap-2 rounded-md p-2 transition-colors duration-200 ease-in-out hover:bg-sky-500 hover:dark:bg-indigo-500"
        >
          <FaGithub className="h-7 w-7 sm:h-9 sm:w-9" />
          <span className="text-base font-medium sm:text-lg">/ caluhm</span>
        </a>
        <a
          href="https://calumjarvis.dev/"
          target="_blank"
          rel="noreferrer"
          className="flex w-full flex-row items-center justify-start gap-2 rounded-md p-2 transition-colors duration-200 ease-in-out hover:bg-sky-500 hover:dark:bg-indigo-500"
        >
          <TbWorldWww className="h-8 w-8 sm:h-10 sm:w-10" />
          <span className="text-base font-medium sm:text-lg">
            ./calumjarvis.dev
          </span>
        </a>
      </div>
    </SectionContainer>
  );
}
