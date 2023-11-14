import * as S from "./AboutPage.styles";

import { useDevice } from "@/hooks";
import {
  Box,
  Image,
  Stack,
  StackDirection,
  Text,
  TypographyProps,
} from "@chakra-ui/react";
import { FC, HTMLAttributes } from "react";
import { PROFILE_URL } from "@/constants";

interface AboutPageProps extends HTMLAttributes<HTMLDivElement> {}
type CustomStyleType = {
  direction: StackDirection;
  alignItems?: string;
  justifyContent?: string;
  textAlign?: TypographyProps["textAlign"];
};

export const AboutPage: FC<AboutPageProps> = ({
  className,
  children,
  ...props
}) => {
  const { isMobile, isTablet } = useDevice();

  const customStyles: CustomStyleType =
    isMobile || isTablet
      ? {
          direction: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          textAlign: "center",
        }
      : {
          direction: "row",
          alignItems: "center",
          justifyContent: "space-around",
          textAlign: "left",
        };

  return (
    <S.Wrapper id="about" className={className} textAlign="center" {...props}>
      <S.PageTitle color={"default.titleDark"} fontSize="4xl" fontWeight="bold">
        About Me
      </S.PageTitle>
      <S.PageSubtitle color={"default.title"} fontSize="sm">
        My Introduction
      </S.PageSubtitle>

      <Stack gap={6} height={"100%"} padding="10px 0" {...customStyles}>
        <Box flex={isMobile || isTablet ? "none" : 1}>
          <Image
            src={PROFILE_URL}
            alt="My Profile"
            boxSize={isMobile ? 250 : isTablet ? 300 : 400}
            borderRadius={8}
            objectFit="cover"
          />
        </Box>
        <Box flex={isMobile || isTablet ? "none" : 1}>
          <Stack flexDirection="row" justifyContent="center">
            <Box>1</Box>
            <Box>2</Box>
          </Stack>
          <Text color="default.text" fontSize="md">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </Text>
        </Box>
      </Stack>
    </S.Wrapper>
  );
};
