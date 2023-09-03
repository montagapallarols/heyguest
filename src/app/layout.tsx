import type { Metadata } from "next";
import NavMenu from "@/components/Nav/NavMenu";
import { mavenPro } from "@/styles/Fonts";
import { Providers } from "./lib/Providers";
import Nav from "@/components/Nav/Nav";

export const metadata: Metadata = {
  title: "Heyguest",
  description: "Find your perfect flight",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mavenPro.className}>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
