import React from "react";
import Link from "next/link";
import { styled } from "styled-components";
import { usePathname } from "next/navigation";

import { Color } from "@/styles/Color";
import { theme } from "@/styles/theme";
import { pxToRem } from "@/utils/pxToRem";

export default function NavMenu() {
  const currentRoute = usePathname();

  return (
    <MenuContainer>
      <ul>
        <li>
          {" "}
          <Link href="/" className={currentRoute === "/" ? "active" : ""}>
            <p>Home</p>
          </Link>
        </li>
        <li>
          {" "}
          <Link
            href="/about"
            className={currentRoute === "/about" ? "active" : ""}
          >
            <p>About</p>
          </Link>
        </li>
        <li>
          {" "}
          <Link
            href="/account"
            className={currentRoute === "/account" ? "active" : ""}
          >
            <p>My account</p>
          </Link>
        </li>
      </ul>
    </MenuContainer>
  );
}

const MenuContainer = styled.nav`
  position: sticky;
  margin: 0 auto;
  width: ${pxToRem(440)};
  height: ${pxToRem(50)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.nav.borderRadius};
  background: ${theme.nav.backgroundColor};
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.12);

  ul {
    display: flex;
    flex-direction: row;
    gap: ${pxToRem(60)};
    font-weight: 600;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${Color.EbonyClay};
    position: relative;

    &.active::before {
      content: "";
      width: ${pxToRem(6)};
      height: ${pxToRem(6)};
      background-color: ${Color.PrimaryBlue};
      border-radius: 50%;
      position: absolute;
      bottom: ${pxToRem(-10)};
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
