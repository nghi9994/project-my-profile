import * as S from "./HomePage.styles";

import { useDevice } from "@/hooks";
import { Divider, Image, Stack, StackDirection, Text } from "@chakra-ui/react";
import { FC, HTMLAttributes } from "react";
import { HAND_ICON_URL, PROFILE_URL } from "@/constants";

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
            <Image src={HAND_ICON_URL} alt="hand-icon" />
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
            I'm software engineer based in Ho Chi Minh city, and I'm very
            passionate and dedicated to my work.
          </Text>
        </Stack>

        <Stack flex={1} minW={250}>
          <Image
            src={PROFILE_URL}
            alt="My Profile"
            borderRadius="full"
            boxSize={250}
            margin="auto"
            objectFit="cover"
          />
        </Stack>
      </Stack>
    </S.Wrapper>
  );
};
