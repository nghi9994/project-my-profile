import * as S from "./AppContainer.styles";

import { useDevice } from "@/hooks";
import { Box, Button, Center, ContainerProps } from "@chakra-ui/react";
import { Hooks } from "minimist-react-library";
import { FC } from "react";
import { IoArrowUpOutline } from "react-icons/io5";

interface AppContainerProps extends ContainerProps {}

export const AppContainer: FC<AppContainerProps> = ({
  className = "",
  children,
  ...props
}) => {
  const { useScrolling } = Hooks.Window;

  const { isMobile, isTablet } = useDevice();
  const isScrolling = useScrolling();

  const getPosition = () => {
    if (isScrolling) {
      if (isMobile || isTablet) {
        return {
          bottom: 16,
        };
      }
      return {
        bottom: 5,
      };
    }
    return {
      bottom: -20,
    };
  };

  return (
    <S.Wrapper
      className={`app-container ${className}`}
      margin={"auto"}
      maxW={"container.lg"}
      {...props}
    >
      {children}
      <Center
        as="a"
        href="#home"
        background="default.buttonBg"
        borderRadius={4}
        padding={2}
        width="fit-content"
        position="fixed"
        right={5}
        {...getPosition()}
      >
        <IoArrowUpOutline color="white" size={20} />
      </Center>
    </S.Wrapper>
  );
};
