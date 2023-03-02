import { SVGProps } from "react";

export function ArrowOutward(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3V4H7.295L2.5 8.795L3.205 9.5L8 4.705V9H9V3H3Z"
        fill="#202223"
        fillOpacity="0.87"
      />
    </svg>
  );
}

export function ArrowInward(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3.5L4 3.5L4 7.795L8.795 3L9.5 3.705L4.705 8.5L9 8.5L9 9.5L3 9.5L3 3.5Z"
        fill="#202223"
        fillOpacity="0.67"
      />
    </svg>
  );
}

export function ArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 1.59498L5 6.22729L-2.02485e-07 1.59498L0.8875 0.77275L5 4.58282L9.1125 0.77275L10 1.59498Z"
        fill="#202223"
        fillOpacity="0.87"
      />
    </svg>
  );
}
