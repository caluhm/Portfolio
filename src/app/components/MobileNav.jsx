import useLockBodyScroll from "../lib/useLockBodyScroll"

export default function MobileNav({ handleClose }) {
useLockBodyScroll();

  return (
    <>

        <div
          className={`h-[calc(100vh-4rem)] w-screen bg-neutral-100 transition-opacity duration-300 ease-in-out dark:bg-neutral-900`}
        >
          <ul className="flex h-full flex-col items-center justify-center space-y-6 text-2xl font-semibold text-neutral-950 dark:text-neutral-50">
            <li>
              <a
                href="#home"
                className="nav-item"
                onClick={() => handleClose()}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="nav-item"
                onClick={() => handleClose()}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="nav-item"
                onClick={() => handleClose()}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="nav-item"
                onClick={() => handleClose()}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="nav-item"
                onClick={() => handleClose()}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
    </>
  );
}
