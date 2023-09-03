import React from "react";
import { useForm, Controller } from "react-hook-form";
import { pxToRem } from "@/utils/pxToRem";
import { styled } from "styled-components";
import { Button } from "../Button/Button";
import TravelFormInput from "./TravelFormInput";

export default function TravelForm() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <StyledTravelForm onSubmit={handleSubmit(onSubmit)}>
      <p>
        I'm heading to{" "}
        <TravelFormInput
          name="destination"
          control={control}
          placeholder="Destination"
        />
        , <br />
        aiming to take off in{" "}
        <TravelFormInput
          name="timeframe"
          control={control}
          placeholder="Month/Timeframe"
        />
        . <br />
        I'll be travelling{" "}
        <TravelFormInput
          name="companions"
          control={control}
          placeholder="with Companions"
        />
        , <br />
        keeping my total trip expenses within{" "}
        <TravelFormInput
          name="totalBudget"
          control={control}
          placeholder="Budget Amount"
        />{" "}
        - <br />
        Allocating{" "}
        <TravelFormInput
          name="flightsBudget"
          control={control}
          placeholder="Budget Amount"
        />{" "}
        to flights <br />
        and looking forward to soaking in the vibes of <br />
        <TravelFormInput
          name="city"
          control={control}
          placeholder="Choice of beach/city"
        />
        .
      </p>
      <StyledButton label="Search" />
    </StyledTravelForm>
  );
}

const StyledTravelForm = styled.form`
  margin-top: ${pxToRem(80)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: ${pxToRem(40)};
`;

const StyledButton = styled(Button)`
  margin-top: ${pxToRem(60)};
`;
