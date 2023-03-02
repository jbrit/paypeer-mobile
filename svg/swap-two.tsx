import { SVGProps } from "react";

export function SwapTwo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="22"
      height="19"
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.62256 3.22632V16.4339M11.2453 12.9999L6.62264 17.6226L2 12.9999"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M15.8678 16.4339L15.8678 3.22637M11.2451 6.62264L15.8678 2L20.4904 6.62264"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}
