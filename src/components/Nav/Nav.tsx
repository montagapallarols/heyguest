"use client";

import Image from "next/image";
import React from "react";
import { styled } from "styled-components";
import NavMenu from "./NavMenu";
import Heyguest from "../../../public/heyguest.png";
import { theme } from "@/styles/theme";
import Link from "next/link";

export default function Nav() {
  return (
    <StyledNav>
      <Link href="">
        <Image src={Heyguest} width="105" height="58" alt="heyguest" />
      </Link>

      <NavMenu />
    </StyledNav>
  );
}

const StyledNav = styled.div`
  padding: 40px ${theme.layout.page.padding};
  display: flex;

  img {
    position: absolute;
  }
`;
