import { Utils } from "minimist-react-library";

export const PageContainer = Utils.React.lazyLoad(
  () => import("./PageContainer"),
  (module) => module.PageContainer
);
