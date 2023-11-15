import { Utils } from "minimist-react-library";

export const BottomModalContainer = Utils.React.lazyLoad(
  () => import("./BottomModalContainer"),
  (module) => module.BottomModalContainer
);
