import { useRef, useEffect, useState } from "react";

import SectionContainer from "./SectionContainer";
import {
  Floating1,
  Floating2,
  Floating3,
  Floating4,
  Floating5,
  Floating6,
  Floating7,
  Floating8,
} from "../lib/data";
import Image from "next/image";
import { gsap } from "gsap";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

export default function AboutSection({ movementX, movementY }) {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const speed = 0.01;
  const easing = 0.08;

  useEffect(() => {
    xForce = movementX * speed;
    yForce = movementY * speed;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  }, [movementX, movementY]);

  const lerp = (start, target, amount) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);

    gsap.set(plane1.current, {
      x: `+=${xForce}`,
      y: `+=${yForce}`,
    });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  const [imageIndex, setImageIndex] = useState(0);

  const handleNextImage = () => {
    if (imageIndex === 6) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (imageIndex === 0) {
      setImageIndex(7);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  return (
    <SectionContainer
      id="about"
      relative
      customJustify={"justify-center"}
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 px-3 pt-6 sm:px-5 sm:pt-12 md:gap-0">
        <div className="relative z-10 flex flex-col items-center justify-center gap-10 rounded-md border border-neutral-300 bg-neutral-200 bg-opacity-30 py-6 backdrop-blur-sm backdrop-filter dark:border-neutral-600 dark:bg-neutral-700 dark:bg-opacity-30 lg:w-4/5 xl:w-2/3">
          <h3 className="section-header">About Me</h3>
          <div className="flex flex-col items-center justify-center gap-4 px-3 text-center text-sm font-medium leading-6 text-neutral-950 dark:text-neutral-50 md:px-6 md:text-base lg:px-9 xl:px-12">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              officiis facilis eius dolor natus expedita sequi sunt quos, vitae
              maxime. A esse tenetur corrupti sunt eveniet minus quas
              repellendus quaerat. Optio quaerat et incidunt unde aliquam quas
              delectus labore ullam consectetur ipsa, eveniet impedit debitis
              magnam cum reprehenderit! A consectetur quam quasi sunt porro at
              maiores impedit, adipisci itaque dignissimos.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus cum tempore itaque alias, qui expedita eius blanditiis
              tempora fugit et, sint sapiente, saepe nostrum ab voluptatibus
              ullam! Quae, molestias voluptatum! Cupiditate ratione nobis porro
              voluptatum vitae accusantium quae possimus, fugit animi
              repudiandae, fugiat id! Esse molestias magni voluptas reiciendis
              magnam harum ipsa saepe, incidunt perspiciatis porro non beatae
              fugit obcaecati.
            </p>
          </div>
        </div>

        <div className="hidden h-full w-full flex-col items-center justify-center px-6 py-16 text-center md:flex md:flex-row">
          <div className="plane hidden md:block" ref={plane1}>
            <Image
              alt="image"
              src={Floating1}
              width={275}
              loading="lazy"
              className="about-image-vertical"
            />
            <Image
              alt="image"
              src={Floating2}
              width={275}
              loading="lazy"
              className="about-image-vertical"
            />
            <Image
              alt="image"
              src={Floating3}
              width={275}
              loading="lazy"
              className="about-image-vertical"
            />
          </div>
          <div className="plane hidden md:block" ref={plane2}>
            <Image
              alt="image"
              src={Floating4}
              width={350}
              loading="lazy"
              className="about-image-horizontal"
            />
            <Image
              alt="image"
              src={Floating5}
              width={275}
              loading="lazy"
              className="about-image-vertical"
            />
            <Image
              alt="image"
              src={Floating6}
              width={275}
              loading="lazy"
              className="about-image-vertical"
            />
          </div>
          <div className="plane hidden md:block" ref={plane3}>
            <Image
              alt="image"
              src={Floating7}
              width={275}
              loading="lazy"
              className="about-image-vertical"
            />
            <Image
              alt="image"
              src={Floating8}
              width={275}
              loading="lazy"
              className="about-image-vertical"
            />
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-1 pb-16 sm:gap-6 md:hidden md:pb-0">
          <button
            className="text-neutral-950 dark:text-neutral-50"
            onClick={handlePrevImage}
          >
            <FiChevronLeft className="h-10 w-10 sm:h-16 sm:w-16" />
          </button>

          {imageIndex === 0 && (
            <Image
              alt="image"
              src={Floating1}
              width={275}
              loading="lazy"
              className="rounded"
            />
          )}

          {imageIndex === 1 && (
            <Image
              alt="image"
              src={Floating2}
              width={275}
              loading="lazy"
              className="rounded"
            />
          )}

          {imageIndex === 2 && (
            <Image
              alt="image"
              src={Floating3}
              width={275}
              loading="lazy"
              className="rounded"
            />
          )}

          {imageIndex === 3 && (
            <Image
              alt="image"
              src={Floating5}
              width={275}
              loading="lazy"
              className="rounded"
            />
          )}

          {imageIndex === 4 && (
            <Image
              alt="image"
              src={Floating6}
              width={275}
              loading="lazy"
              className="rounded"
            />
          )}

          {imageIndex === 5 && (
            <Image
              alt="image"
              src={Floating7}
              width={275}
              loading="lazy"
              className="rounded"
            />
          )}

          {imageIndex === 6 && (
            <Image
              alt="image"
              src={Floating8}
              width={275}
              loading="lazy"
              className="rounded"
            />
          )}

          <button
            className="text-neutral-950 dark:text-neutral-50"
            onClick={handleNextImage}
          >
            <FiChevronRight className="h-10 w-10 sm:h-16 sm:w-16" />
          </button>
        </div>
      </div>
    </SectionContainer>
  );
}
