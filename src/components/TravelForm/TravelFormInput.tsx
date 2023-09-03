import { Color } from "@/styles/Color";
import { mavenPro } from "@/styles/Fonts";
import { pxToRem } from "@/utils/pxToRem";
import React, { Fragment, useEffect, useRef } from "react";
import { Control, Controller } from "react-hook-form";
import { styled } from "styled-components";

interface ITravelFormInputProps {
  name: string;
  defaultValue?: string;
  placeholder: string;
  control: Control;
}

export default function TravelFormInput({
  name,
  defaultValue = "",
  placeholder,
  control,
}: ITravelFormInputProps) {
  const inputRef = useRef(null);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <StyledInput
          {...field}
          ref={inputRef}
          placeholder={placeholder}
          className={mavenPro.className}
        />
      )}
    />
  );
}

const StyledInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  outline: none;
  border-bottom: ${pxToRem(2)} solid ${Color.PrimaryBlue};
  padding-bottom: ${pxToRem(2)};
  font-weight: 500;
  font-size: ${pxToRem(18)};

  &::placeholder {
    color: ${Color.TextGray};
  }
`;
