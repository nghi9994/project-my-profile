import * as S from "./Button.styles";

import { ButtonProps, Text } from "@chakra-ui/react";
import { FC } from "react";

interface ProfileButtonProps extends ButtonProps {
  buttonText: string;
}

export const ProfileButton: FC<ProfileButtonProps> = ({
  buttonText = "",
  className,
  children,
  ...props
}) => {
  return (
    <S.ProfileButtonWrapper
      className={className}
      bgColor="rgba(0,0,0,0.75)"
      borderRadius="16px"
      height="60px"
      width="180px"
      _hover={{
        bgColor: "rgba(0,0,0,0.75)",
      }}
      {...props}
    >
      <Text color="white" fontSize="xl">
        {buttonText}
      </Text>
    </S.ProfileButtonWrapper>
  );
};
