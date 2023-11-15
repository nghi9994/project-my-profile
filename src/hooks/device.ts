import { Hooks } from "minimist-react-library";
import { useEffect, useState } from "react";

export const useDevice = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const { width } = Hooks.Window.useWindowSize();

  useEffect(() => {
    setIsMobile(width <= 550);
    setIsTablet(width > 550 && width <= 768);
  }, [width]);

  return { isMobile, isTablet };
};
