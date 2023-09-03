"use client";

import { styled } from "styled-components";
import { Main } from "@/components/Main";
import { Color } from "@/styles/Color";
import { mavenPro } from "@/styles/Fonts";
import { pxToRem } from "@/utils/pxToRem";
import TravelForm from "@/components/TravelForm/TravelForm";

export default function Home() {
  return (
    <Main className={mavenPro.className}>
      <HeroTitle>
        Find your <br></br>perfect flight
      </HeroTitle>

      <TravelForm />
    </Main>
  );
}

const HeroTitle = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${Color.PrimaryBlue};
  font-weight: bold;
  font-size: ${pxToRem(54)};
  margin-top: ${pxToRem(20)};
`;
