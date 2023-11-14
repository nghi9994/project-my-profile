import { ReactComponent as IconHand } from "@/assets/svg/icon-hand.svg";

import { FC, SVGProps } from "react";

export type IconsType = "icon-hand";

export interface IconsProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  type: IconsType;
}

export const Component = {
  "icon-hand": IconHand,
};

export const Svg: FC<IconsProps> = ({
  className = "",
  height,
  width,
  size,
  type,
  ...props
}: IconsProps) => {
  const SvgComponent = Component[type];

  return (
    <SvgComponent
      className={`${type} ${className}`}
      height={height || size}
      width={width || size}
      {...props}
    />
  );
};
