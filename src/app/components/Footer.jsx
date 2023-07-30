export default function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-950 ">
      <div className="max-h-32 w-full px-4 py-8 text-sm text-neutral-950 dark:text-neutral-50">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-center font-medium">
            © 2023 Calum Jarvis.
          </p>
          <p className="text-center md:text-right ">
            Built with{" "}
            <a href="https://nextjs.org/" className="underline">
              NextJS
            </a>{" "}
            and{" "}
            <a href="https://tailwindcss.com/" className="underline">
              Tailwind CSS
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};