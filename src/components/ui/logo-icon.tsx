import { SVGProps } from 'react';

const LogoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="10"
        y="10"
        width="130"
        height="130"
        rx="10"
        fill="#FFFFFF"
        stroke="currentColor"
        className="text-primary"
        strokeWidth="4"
      />
      <path
        d="M75 30C75 30 50 60 50 85C50 95 60 105 75 105C90 105 100 95 100 85C100 60 75 30 75 30Z"
        className="text-primary"
        fill="currentColor"
      />
      <path
        d="M75 30C75 30 65 55 65 75C65 85 70 90 75 90C80 90 85 85 85 75C85 55 75 30 75 30Z"
        fill="#81C784"
      />
      <path
        d="M65 65C65 65 60 75 60 85C60 90 65 95 75 95"
        stroke="#2E7D32"
        strokeWidth="2"
      />
      <path
        d="M85 65C85 65 90 75 90 85C90 90 85 95 75 95"
        stroke="#2E7D32"
        strokeWidth="2"
      />
    </svg>
  );
};

export default LogoIcon;