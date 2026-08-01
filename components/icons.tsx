import Image from "next/image";
import React from "react";

export function ZaloIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <Image
      src="https://assets.happybishops.com/media/zalo.webp"
      alt="Zalo logo"
      width={40}
      height={40}
      className={`object-contain ${className}`}
      unoptimized
    />
  );
}

export function FacebookIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <Image
      src="https://assets.happybishops.com/media/facebook.webp"
      alt="Facebook logo"
      width={40}
      height={40}
      className={`object-contain ${className}`}
      unoptimized
    />
  );
}
