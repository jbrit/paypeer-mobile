import { SVGProps } from "react";

export function CircledArrowOutward(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="30"
      height="31"
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15.5" r="15" fill="#F4F5F5" />
      <path
        d="M11.6923 11.5V12.8846H17.6392L11 19.5238L11.9762 20.5L18.6154 13.8608V19.8077H20V11.5H11.6923Z"
        fill="#202223"
        fillOpacity="0.87"
      />
    </svg>
  );
}

export function CircledArrowInward(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="30"
      height="31"
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15.5" r="15" fill="#F4F5F5" />
      <path
        d="M19.3077 20.5L19.3077 19.1154L13.3608 19.1154L20 12.4762L19.0238 11.5L12.3846 18.1392L12.3846 12.1923L11 12.1923L11 20.5L19.3077 20.5Z"
        fill="#202223"
        fillOpacity="0.87"
      />
    </svg>
  );
}
