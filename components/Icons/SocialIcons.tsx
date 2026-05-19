"use client";

import React from "react";

type IconProps = {
  size?: number;
  className?: string;
};

export const FacebookIcon = ({ size = 18, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const InstagramIcon = ({ size = 18, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zM18 6.5a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
  </svg>
);

export const TwitterIcon = ({ size = 18, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
  </svg>
);

export const YoutubeIcon = ({ size = 18, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M23 12s0-3.9-.5-5.6a3 3 0 0 0-2.1-2.1C18.7 4 12 4 12 4s-6.7 0-8.4.3A3 3 0 0 0 1.5 6.4C1 8.1 1 12 1 12s0 3.9.5 5.6a3 3 0 0 0 2.1 2.1C5.3 20 12 20 12 20s6.7 0 8.4-.3a3 3 0 0 0 2.1-2.1C23 15.9 23 12 23 12zM10 15.5v-7l6 3.5-6 3.5z" />
  </svg>
);

export const MusicIcon = ({ size = 18, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M9 3v12.5a3.5 3.5 0 1 0 2 3.15V6h4V3H9z" />
  </svg>
);

export const TikTokIcon = ({ size = 18, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M21 8.5a8.38 8.38 0 0 1-5-1.7v6.9a5.5 5.5 0 1 1-5.5-5.5c.2 0 .4 0 .6.03V11a3.5 3.5 0 1 0 3.5 3.5V2h3.4a5 5 0 0 0 4.9 4.4V8.5z"/>
  </svg>
);