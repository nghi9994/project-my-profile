import * as S from "./BottomModalContainer.styles";

import { FC, HTMLAttributes } from "react";
import { ContainerProps } from "@chakra-ui/react";

interface BottomModalContainerProps extends ContainerProps {}

export const BottomModalContainer: FC<BottomModalContainerProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <S.Wrapper
      className={className}
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      background="white"
      borderRadius="16px 16px 0 0"
      boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.25)"
      maxW={"100vw"}
      padding={0}
      zIndex={1}
      {...props}
    >
      {children}
    </S.Wrapper>
  );
};
