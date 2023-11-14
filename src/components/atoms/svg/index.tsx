import { Utils } from "minimist-react-library";

export type { IconsProps } from "./Svg";

export const Svg = Utils.React.lazyLoad(
  () => import("./Svg"),
  (module) => module.Svg
);
