import { useEffect } from "react";

const useLockBodyScroll = () => {
  useEffect(() => {
    // Get the current scroll position
    const scrollY = window.scrollY;

    // Prevent scrolling on the body and apply the styles
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;

    // Re-enable scrolling and reset styles when the component unmounts
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollY);
    };
  }, []); // Run this effect only once when the component mounts

  // You can return additional data or functions here if needed
  return null;
};

export default useLockBodyScroll;
