import * as S from "./AboutPage.styles";

import { CV_DIRECT_URL, PROFILE_URL } from "@/constants";
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
import { Utils } from "minimist-react-library";
import { FC, HTMLAttributes } from "react";
import { CgFileDocument } from "react-icons/cg";
import { PiConfetti, PiMedal } from "react-icons/pi";

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
              alignItems={isMobile || isTablet ? "center" : "unset"}
              gap={isMobile || isTablet ? 5 : "none"}
              height="100%"
            >
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
              >
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
                Coding is not just a skill; it's my avenue for expressing
                creativity and turning ideas into reality. With 2+ years of
                experience in ReactJS, JavaScript, HTML and CSS, I bring a
                passion for clean, user-focused design to every project.
              </Text>
              <Button
                rightIcon={<CgFileDocument color="white" size={25} />}
                width="50%"
                transform={{ base: "scale(0.8)", sm: "none" }}
                transformOrigin="center"
                onClick={() => Utils.Data.downloadFile(CV_DIRECT_URL)}
              >
                Download CV
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </S.Wrapper>
  );
};
