import React from "react";

export function ZaloIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="12" fill="#0068FF" />
      <text
        x="24"
        y="30"
        fill="#FFFFFF"
        fontSize="15"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, sans-serif"
        textAnchor="middle"
        letterSpacing="-0.5px"
      >
        Zalo
      </text>
    </svg>
  );
}

export function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="#1877F2" />
      <path
        d="M26.67 36V24.5H30.5L31.07 20H26.67V17.13C26.67 15.83 27.03 14.94 28.9 14.94L31.29 14.93V10.9C30.88 10.84 29.47 10.72 27.83 10.72C24.41 10.72 22.07 12.81 22.07 16.65V20H18.15V24.5H22.07V36H26.67Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}
