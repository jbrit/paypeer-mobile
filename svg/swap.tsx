import { SVGProps } from "react";

export function Swap(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 8.5C16 4.084 12.416 0.5 8 0.5C3.584 0.5 0 4.084 0 8.5C0 12.916 3.584 16.5 8 16.5C12.416 16.5 16 12.916 16 8.5ZM10.4 4.1L13.2 6.9L10.4 9.7V7.7H7.2V6.1H10.4V4.1ZM5.6 12.9L2.8 10.1L5.6 7.3V9.3H8.8V10.9H5.6V12.9Z"
        fill="black"
      />
    </svg>
  );
}
