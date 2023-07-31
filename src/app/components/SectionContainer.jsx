export default function SectionContainer({
  id,
  children,
  customHeight,
  customJustify,
  colouredBg,
  relative,
  noPadding,
}) {
  return (
    <section
      id={id}
      className={`bg-radial-pattern dark:bg-radial-pattern-dark flex ${
        customHeight ? customHeight : "min-h-screen"
      } w-full flex-col items-center ${
        customJustify ? customJustify : "justify-start"
      } ${noPadding ? "" : "pt-16"} ${
        colouredBg ? "bg-sky-200 dark:bg-indigo-950" : ""
      }
      ${relative ? "relative z-10" : ""}
      overflow-hidden`}
    >
      {children}
    </section>
  );
}
