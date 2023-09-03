"use client";

import { styled } from "styled-components";

import { Main } from "@/components/Main";
import { Color } from "@/styles/Color";
import { mavenPro } from "@/styles/Fonts";
import { pxToRem } from "@/utils/pxToRem";
import TravelForm from "@/components/TravelForm/TravelForm";
import Card from "@/components/Card/Card";
import Scotland from "../assets/images/scotland.png";
import Greece from "../assets/images/greece.png";
import Egypt from "../assets/images/egypt.png";

export default function Home() {
  return (
    <Main className={mavenPro.className}>
      <HeroTitle>
        Find your <br></br>perfect flight
      </HeroTitle>
      <StyledCardScotland>
        <Card body="Trip to Scotland" imageAlt="Scotland" image={Scotland} />
      </StyledCardScotland>
      <StyledCardGreece>
        <Card body="Trip to Greece" imageAlt="Greece" image={Greece} />
      </StyledCardGreece>
      <TravelForm />
      <StyledCardEgypt>
        <Card body="Trip to Egypt" imageAlt="Egypt" image={Egypt} />
      </StyledCardEgypt>
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

const StyledCardScotland = styled.div`
  position: absolute;
  left: 100px;
`;

const StyledCardGreece = styled.div`
  position: absolute;
  left: -100px;
  top: 250px;
`;

const StyledCardEgypt = styled.div`
  position: absolute;
  right: 200px;
  top: 400px;
`;
