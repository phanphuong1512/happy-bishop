import Image from "next/image";
import React from "react";

export function ZaloIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <Image
      src="https://assets.happybishops.com/media/zalo.webp"
      alt="Zalo logo"
      width={24}
      height={24}
      className={`object-contain ${className}`}
      unoptimized
    />
  );
}

export function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <Image
      src="https://assets.happybishops.com/media/facebook.webp"
      alt="Facebook logo"
      width={24}
      height={24}
      className={`object-contain ${className}`}
      unoptimized
    />
  );
}
