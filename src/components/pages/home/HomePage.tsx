import * as S from "./HomePage.styles";

import { HAND_ICON_URL, PROFILE_URL } from "@/constants";
import { useDevice } from "@/hooks";
import {
  Button,
  Divider,
  Image,
  Link,
  Stack,
  StackDirection,
  Text,
} from "@chakra-ui/react";
import { FC, HTMLAttributes } from "react";
import { BiMouse } from "react-icons/bi";
import { FaArrowDown } from "react-icons/fa6";
import { PiPaperPlaneTilt } from "react-icons/pi";

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
        <Stack flex={1} alignItems={"flex-start"} gap={5}>
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
          <Text color="default.text" fontSize={{ base: "sm", sm: "md" }}>
            I'm software engineer based in Ho Chi Minh city, and I'm very
            passionate and dedicated to my work.
          </Text>

          <Link href="#contact" marginTop={{ base: 5, sm: 10 }}>
            <Button
              rightIcon={<PiPaperPlaneTilt color="white" size={25} />}
              transform={{ base: "scale(0.8)", sm: "none" }}
              transformOrigin="left"
            >
              Say Hello
            </Button>
          </Link>
        </Stack>

        <Stack flex={1}>
          <S.ProfileImage
            src={PROFILE_URL}
            alt="My Profile"
            borderRadius="full"
            boxSize={{ base: 250, sm: 450, md: 350 }}
            boxShadow="dark-lg"
            margin="auto"
            objectFit="cover"
          />
        </Stack>
      </Stack>

      {!isMobile && (
        <S.MouseWrapper
          flexDirection="row"
          alignItems="center"
          position="absolute"
          left={30}
          bottom={50}
        >
          <BiMouse size={50} /> <Text>Scroll Down</Text>{" "}
          <FaArrowDown className="arrow-down" size={20} />
        </S.MouseWrapper>
      )}
    </S.Wrapper>
  );
};
