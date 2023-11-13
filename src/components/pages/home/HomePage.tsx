import * as S from "./HomePage.styles";
import Profile from "@/assets/images/cat-profile.jpeg";

import {
  Box,
  Divider,
  Flex,
  Image,
  HStack,
  Stack,
  StackDirection,
  Text,
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
  const { isMobile, isTablet } = useDevice();

  const customStyles: CustomStyleType =
    isMobile || isTablet
      ? {
          direction: "column-reverse",
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
        gap={10}
        position="relative"
        {...customStyles}
      >
        <VStack flex={1} alignItems={"flex-start"}>
          <Text
            color="default.title"
            fontSize={isMobile ? "4xl" : "6xl"}
            fontWeight="bold"
            whiteSpace="nowrap"
          >
            Nghi Nguyen
          </Text>

          <Stack direction="row" width="100%" alignItems="center" gap={5}>
            <Divider borderBottomWidth={2} width="50px" />
            <Text
              color="default.titleDark"
              fontSize={isMobile ? "xl" : "2xl"}
              whiteSpace="nowrap"
            >
              Frontend Software Engineer
            </Text>
          </Stack>
          <Text color="default.text" fontSize={isMobile ? "sm" : "md"}>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </Text>
        </VStack>

        <VStack flex={1}>
          <Image
            borderRadius="full"
            boxSize={250}
            src={Profile}
            alt="My Profile"
            margin="auto"
            objectFit="cover"
          />
        </VStack>
      </Stack>
    </S.Wrapper>
  );
};
