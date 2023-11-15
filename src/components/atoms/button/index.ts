import { Utils } from "minimist-react-library";

export const ProfileButton = Utils.React.lazyLoad(
  () => import("./Button"),
  (module) => module.ProfileButton
);
