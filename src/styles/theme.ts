import { pxToRem } from "@/utils/pxToRem";

export const theme = {
  layout: {
    page: {
      padding: pxToRem(24),
    },
    main: {
      maxWidth: "1200px",
      margin: {
        tablet: pxToRem(24),
        mobile: pxToRem(16),
      },
    },
    body: {
      fontSize: "16px",
    },
  },
  nav: {
    borderRadius: "80px",
    backgroundColor: "#fff",
  },
};
