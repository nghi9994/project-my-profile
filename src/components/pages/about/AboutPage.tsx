import * as S from "./AboutPage.styles";

import { PROFILE_URL } from "@/constants";
import { useDevice } from "@/hooks";
import {
  Box,
  Button,
  Image,
  Stack,
  StackDirection,
  Text,
  TypographyProps,
} from "@chakra-ui/react";
import { FC, HTMLAttributes } from "react";
import { PiClipboardTextBold, PiMedal, PiConfetti } from "react-icons/pi";
import { CgFileDocument } from "react-icons/cg";

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
          alignItems: "flex-start",
          justifyContent: "space-around",
          textAlign: "left",
        };

  return (
    <S.Wrapper
      id="about"
      className={className}
      textAlign="center"
      minH={800}
      {...props}
    >
      <Stack height="100%">
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

        <Stack
          flex={1}
          justifyContent={isMobile || isTablet ? "flex-start" : "center"}
        >
          <Stack
            gap={6}
            height={isMobile || isTablet ? "fit-content" : 400}
            {...customStyles}
          >
            <Box flex={isMobile || isTablet ? "none" : 1}>
              <Image
                src={PROFILE_URL}
                alt="My Profile"
                boxSize={isMobile ? 250 : isTablet ? 300 : 400}
                borderRadius={8}
                objectFit="cover"
                maxH="100%"
              />
            </Box>

            <Stack
              flex={isMobile || isTablet ? "none" : 1}
              justifyContent={
                isMobile || isTablet ? "flex-start" : "space-between"
              }
              gap={isMobile || isTablet ? 5 : "none"}
              height="100%"
            >
              <Stack flexDirection="row" justifyContent="space-between">
                <Box
                  flex={1}
                  borderRadius={4}
                  border="1px"
                  borderColor="default.text"
                  height={100}
                >
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                  >
                    <PiMedal size={25} />
                    <Text
                      color="default.title"
                      fontSize="sm"
                      fontWeight="medium"
                    >
                      Experience
                    </Text>
                    <Text color="default.text" fontSize="xs">
                      2+ Years
                    </Text>
                  </Stack>
                </Box>
                <Box
                  flex={1}
                  borderRadius={4}
                  border="1px"
                  borderColor="default.text"
                  height={100}
                  width={150}
                >
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                  >
                    <PiConfetti size={25} />
                    <Text
                      color="default.title"
                      fontSize="sm"
                      fontWeight="medium"
                    >
                      Completed
                    </Text>
                    <Text color="default.text" fontSize="xs">
                      10+ Projects
                    </Text>
                  </Stack>
                </Box>
              </Stack>
              <Text color="default.text" fontSize="md">
                Coding isn't just a skill; it's my avenue for expressing
                creativity and turning ideas into reality. With 2+ years of
                experience in ReactJS, JavaScript, HTML and CSS, I bring a
                passion for clean, user-focused design to every project.
              </Text>
              <Button height={50} width={isMobile || isTablet ? "100%" : "50%"}>
                <Text paddingRight={2}>Download CV</Text>{" "}
                <CgFileDocument size={20} />
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </S.Wrapper>
  );
};
