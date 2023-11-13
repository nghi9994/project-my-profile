import { Hooks } from "minimist-react-library";

export const useDevice = () => {
  const isMobile = Hooks.Device.useResponsive({ maxWidth: 500 });

  return { isMobile };
};
