import { theme } from "@/styles/theme";

export function pxToRem(pxValue: number, baseFontSize?: number) {
  const bodyFontSize = baseFontSize ?? 16;

  const remValue = pxValue / bodyFontSize;

  return `${remValue}rem`;
}
