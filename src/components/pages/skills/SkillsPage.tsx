import * as S from "./SkillsPage.styles";

import { VStack, useStyleConfig, Container } from "@chakra-ui/react";
import { FC, HTMLAttributes } from "react";

interface SkillsPageProps extends HTMLAttributes<HTMLDivElement> {}

export const SkillsPage: FC<SkillsPageProps> = ({ children, ...props }) => {
  return (
    <Container id="skills" variant="pageLayout" {...props}>
      <VStack justifyContent={"flex-start"} height={"100%"}>
        <S.PageTitle
          color={"default.titleDark"}
          fontSize="4xl"
          fontWeight="bold"
        >
          My Skills
        </S.PageTitle>
        <S.PageSubtitle color={"default.title"} fontSize="sm">
          My Introduction
        </S.PageSubtitle>
      </VStack>
    </Container>
  );
};
