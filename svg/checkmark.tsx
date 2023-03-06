import { SVGProps } from "react";

export function Checkmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="38"
      height="29"
      viewBox="0 0 38 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="checkmark"
        d="M37.1641 1.02402L12.4141 28.024L1.16406 15.7513"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
