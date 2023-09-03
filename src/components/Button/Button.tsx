import { FC } from "react";
import { css, styled } from "styled-components";

import { Color } from "@/styles/Color";
import { pxToRem } from "@/utils/pxToRem";
import { mavenPro } from "@/styles/Fonts";

export interface ButtonProps {
  disabled?: boolean;
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export const Button: FC<ButtonProps> = ({
  label,
  onClick = () => {},
  variant = "primary",
  ...props
}) => (
  <StyledButton onClick={onClick} variant={variant} {...props}>
    <ButtonLabel className={mavenPro.className}>{label}</ButtonLabel>
  </StyledButton>
);

const StyledButton = styled.button<{ variant: "primary" | "secondary" }>`
  ${({ variant }) =>
    variant === "primary" &&
    css`
      background-color: ${Color.PrimaryBlue};
      color: ${Color.PrimaryWhite};
      border: none;
      height: ${pxToRem(40)};
      width: ${pxToRem(135)};
      border-radius: ${pxToRem(54)};
      font-size: ${pxToRem(20)};
      cursor: pointer;
    `};
`;

const ButtonLabel = styled.div``;
