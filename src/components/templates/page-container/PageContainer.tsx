import * as S from "./PageContainer.styles";

import { ContainerProps, Stack } from "@chakra-ui/react";
import { FC } from "react";

interface PageContainerProps extends ContainerProps {}

export const PageContainer: FC<PageContainerProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <S.Wrapper
      className={`page-container ${className}`}
      height="100vh"
      maxW="100%"
      paddingTop="70px"
      position="relative"
      {...props}
    >
      {children}
    </S.Wrapper>
  );
};
