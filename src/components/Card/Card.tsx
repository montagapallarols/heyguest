import { Color } from "@/styles/Color";
import { poppins } from "@/styles/Fonts";
import Image from "next/image";
import React from "react";
import { styled } from "styled-components";

interface ICardProps {
  image: string;
  body: string | React.ReactNode;
  imageAlt: string;
}

export default function Card({ body, image, imageAlt }: ICardProps) {
  return (
    <StyledCard className={poppins.className}>
      <Image src={image} alt={imageAlt} />
      {body}
    </StyledCard>
  );
}

const StyledCard = styled.div`
  position: absolute;
  width: 176px;
  height: 230px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  color: ${Color.SecondaryBlue};

  text-align: left;
  gap: 10px;
  border-radius: 12px;
  border: 2px solid ${Color.PrimaryWhite};
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 1.18553px 1.42263px 3.14815px 0px rgba(0, 0, 0, 0.02),
    5.21632px 6.25958px 6.51852px 0px rgba(0, 0, 0, 0.03),
    12.80369px 15.36443px 13px 0px rgba(0, 0, 0, 0.04),
    24.65895px 29.59075px 25.48148px 0px rgba(0, 0, 0, 0.04),
    41.49343px 49.79212px 46.85185px 0px rgba(0, 0, 0, 0.05),
    64.01844px 76.82213px 80px 0px rgba(0, 0, 0, 0.07);
`;
