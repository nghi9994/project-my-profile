import * as S from "./AboutPage.styles";

import { VStack, useStyleConfig } from "@chakra-ui/react";
import { FC, HTMLAttributes } from "react";

interface AboutPageProps extends HTMLAttributes<HTMLDivElement> {}

export const AboutPage: FC<AboutPageProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <S.Wrapper id="about" className={className} {...props}>
      <VStack justifyContent={"flex-start"} height={"100%"}>
        <S.PageTitle
          color={"default.titleDark"}
          fontSize="4xl"
          fontWeight="bold"
        >
          About Me
        </S.PageTitle>
        <S.PageSubtitle color={"default.title"} fontSize="sm">
          My Introduction
        </S.PageSubtitle>
      </VStack>
    </S.Wrapper>
  );
};
