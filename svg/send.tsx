import { SVGProps } from "react";

export function Send(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM9.504 7.632L5.536 11.6L4.408 10.472L8.376 6.504L6.672 4.8L11.192 4.808L11.2 9.328L9.504 7.632Z"
        fill="black"
      />
    </svg>
  );
}
