import { SVGProps } from "react";

export function ChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="11"
      height="6"
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 1.09498L5.5 5.72729L0.5 1.09498L1.3875 0.27275L5.5 4.08282L9.6125 0.27275L10.5 1.09498Z"
        fill="#202223"
        fillOpacity="0.87"
      />
    </svg>
  );
}
