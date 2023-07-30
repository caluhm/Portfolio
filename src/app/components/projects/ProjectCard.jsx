import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { TbExternalLink } from "react-icons/tb";

export default function ProjectCard({
  Title,
  LiveLink,
  Url,
  GitHubLink,
  Image,
  TechStack,
}) {
  return (
    <>
      <Link href={Url}>
        <div className="max-w-96 relative h-60 overflow-hidden rounded border border-neutral-300 dark:border-neutral-600">
          <div className="h-full w-full">
            <img
              src={Image}
              alt={Title}
              className="h-full w-full rounded object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
          <div className="absolute left-0 top-0 z-10 pl-1.5 pt-1.5">
            <div className="flex items-center justify-center rounded rounded-br bg-sky-500 px-1.5 py-0.5 drop-shadow-lg dark:bg-indigo-500">
              <p className="text-base font-medium text-neutral-50">{Title}</p>
            </div>
          </div>
          <div className="absolute bottom-0 z-10 flex h-10 w-full flex-col">
            <div className="flex h-full w-full flex-row items-center justify-start gap-2 bg-sky-950/50 px-2 backdrop-blur dark:bg-indigo-950/50">
              {TechStack.map((tech, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-sky-500 px-2.5 py-0.5 text-sm font-semibold text-neutral-50 dark:bg-indigo-500"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
