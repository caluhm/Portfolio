export default function SectionContainer({ id, children }) {
  return (
    <section
      id={id}
      className="bg-radial-pattern dark:bg-radial-pattern-dark flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-start pt-16"
    >
      {children}
    </section>
  );
};
