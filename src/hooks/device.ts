import { Hooks } from "minimist-react-library";
import { useEffect, useState } from "react";

export const useDevice = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const { width } = Hooks.Device.useWindowSize();

  useEffect(() => {
    setIsMobile(width <= 425);
    setIsTablet(width > 425 && width <= 768);
  }, [width]);

  return { isMobile, isTablet };
};
