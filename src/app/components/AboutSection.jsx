import SectionContainer from "./SectionContainer";

export default function AboutSection() {
  return (
    <SectionContainer id="about">
      <div className="flex h-full w-full flex-col items-center justify-center pt-6 sm:pt-12">
        <h3 className="section-header">About Me</h3>
        <div className="flex h-full w-full flex-col md:flex-row px-6 py-16 text-center">
          <div className="flex w-[60%] px-48 flex-col gap-6 text-lg font-normal leading-5 text-neutral-950 dark:text-neutral-50 ">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
              recusandae sed, maiores eum, iste aliquid, voluptatem molestiae a
              quas placeat libero voluptatibus animi provident. Sed alias dicta
              facilis ipsa rem? Alias animi nisi assumenda itaque aliquid labore
              unde impedit saepe quos voluptatibus. Voluptatem nihil eligendi
              veniam, aspernatur debitis corrupti sunt, et, tempora consequatur
              ullam velit voluptatum! Explicabo dolorem dolores inventore?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos voluptate quo hic iure architecto, nostrum corrupti
              necessitatibus atque delectus veniam unde quis a earum sint
              laudantium repudiandae neque culpa ut. Qui eum ipsum reprehenderit
              porro, animi possimus? Dolorem cumque officiis voluptatibus, et
              enim nobis repellendus? Facilis, eligendi ex aliquid eum quam
              deserunt nostrum, sequi corrupti similique est aperiam voluptas
              asperiores.
            </p>
          </div>
          <div className="flex w-[40%] flex-col rounded border-2 border-sky-500 dark:border-indigo-500"></div>
        </div>
      </div>
    </SectionContainer>
  );
};
