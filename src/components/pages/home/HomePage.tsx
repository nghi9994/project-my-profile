import Profile from "@/assets/images/profile.jpg";
import * as S from "./HomePage.styles";

import { useDevice } from "@/hooks";
import {
  Box,
  Divider,
  Image,
  Stack,
  StackDirection,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC, HTMLAttributes } from "react";
import { Svg } from "@/components";

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
        gap={6}
        position="relative"
        {...customStyles}
      >
        <Stack flex={1} alignItems={"flex-start"}>
          <Stack direction="row" width="100%" alignItems="center" gap={4}>
            <Text
              color="default.title"
              fontSize={isMobile ? "4xl" : "6xl"}
              fontWeight="bold"
              whiteSpace="nowrap"
            >
              Nghi Nguyen
            </Text>
            <Svg type="icon-hand" size={50} />
          </Stack>

          <Stack direction="row" width="100%" alignItems="center" gap={4}>
            {!isMobile && (
              <Divider borderBottomWidth={2} width={isMobile ? 0 : "50px"} />
            )}
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
        </Stack>

        <Stack flex={1} minW={250}>
          <Image
            borderRadius="full"
            boxSize={250}
            src={Profile}
            alt="My Profile"
            margin="auto"
            objectFit="cover"
          />
        </Stack>
      </Stack>
    </S.Wrapper>
  );
};
