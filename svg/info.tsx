import { SVGProps } from "react";

export function Info(props: SVGProps<SVGSVGElement>) {
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
        d="M6 0.5C2.6916 0.5 0 3.1916 0 6.5C0 9.8084 2.6916 12.5 6 12.5C9.3084 12.5 12 9.8084 12 6.5C12 3.1916 9.3084 0.5 6 0.5ZM6.6 9.5H5.4V5.9H6.6V9.5ZM6.6 4.7H5.4V3.5H6.6V4.7Z"
        fill="#202223"
        fillOpacity="0.67"
      />
    </svg>
  );
}

export function InfoTwo(props: SVGProps<SVGSVGElement>) {
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
        d="M6 0C2.6916 0 0 2.6916 0 6C0 9.3084 2.6916 12 6 12C9.3084 12 12 9.3084 12 6C12 2.6916 9.3084 0 6 0ZM6.6 9H5.4V5.4H6.6V9ZM6.6 4.2H5.4V3H6.6V4.2Z"
        fill="#202223"
        fillOpacity="0.87"
      />
    </svg>
  );
}
