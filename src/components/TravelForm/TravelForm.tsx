import React from "react";
import { pxToRem } from "@/utils/pxToRem";
import { styled } from "styled-components";

export default function TravelForm() {
  return <StyledTravelForm>TravelForm</StyledTravelForm>;
}

const StyledTravelForm = styled.form`
  margin-top: ${pxToRem(100)};
`;
