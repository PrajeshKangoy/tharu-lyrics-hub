"use client";

import { useState } from "react";

export default function StarRating({
  onChange,
}: {
  onChange: (value: number) => void;
}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex items-center gap-2 text-2xl cursor-pointer">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => {
            setRating(star);
            onChange(star);
          }}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className={
            star <= (hover || rating)
              ? "text-yellow-400"
              : "text-gray-500"
          }
        >
          ★
        </span>
      ))}
    </div>
  );
}