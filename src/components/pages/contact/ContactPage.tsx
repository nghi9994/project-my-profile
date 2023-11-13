import * as S from "./ContactPage.styles";

import { VStack, useStyleConfig } from "@chakra-ui/react";
import { FC, HTMLAttributes } from "react";

interface ContactPageProps extends HTMLAttributes<HTMLDivElement> {}

export const ContactPage: FC<ContactPageProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <S.Wrapper id="contact" className={className} {...props}>
      <VStack justifyContent={"flex-start"} height={"100%"}>
        <S.PageTitle
          color={"default.titleDark"}
          fontSize="4xl"
          fontWeight="bold"
        >
          My Contact
        </S.PageTitle>
        <S.PageSubtitle color={"default.title"} fontSize="sm">
          My Introduction
        </S.PageSubtitle>
      </VStack>
    </S.Wrapper>
  );
};
