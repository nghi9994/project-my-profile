import * as S from "./HomePage.styles";

import {
  Box,
  Flex,
  HStack,
  Stack,
  StackDirection,
  VStack,
} from "@chakra-ui/react";
import { FC, HTMLAttributes } from "react";
import { Hooks } from "minimist-react-library";
import { useDevice } from "@/hooks";

interface HomePageProps extends HTMLAttributes<HTMLDivElement> {}
type CustomStyleType = {
  alignItems?: string;
  direction: StackDirection;
};

export const HomePage: FC<HomePageProps> = ({
  className,
  children,
  ...props
}) => {
  const { isMobile } = useDevice();

  const customStyles: CustomStyleType = isMobile
    ? {
        direction: "column",
      }
    : {
        direction: "row",
        alignItems: "center",
      };
  return (
    <S.Wrapper id="home" className={className} {...props}>
      <Stack
        margin={"0 16px"}
        height={"100%"}
        position="relative"
        {...customStyles}
      >
        <VStack flex={1} alignItems={"flex-start"}>
          <Box>Nghi Nguyen</Box>
          <Box>Software Engineer</Box>
          <Box>Description</Box>
        </VStack>
        <Box flex={1}>image</Box>
      </Stack>
    </S.Wrapper>
  );
};
