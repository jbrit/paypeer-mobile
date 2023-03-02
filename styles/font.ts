import localFont from "next/font/local";

export const Gordita = localFont({
  variable: "--font-Gordita",
  src: [
    {
      path: "./fonts/Gordita Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Gordita Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Gordita Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  fallback: ["system-ui", "arial"],
});
