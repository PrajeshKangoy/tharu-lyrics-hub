"use client";

import { useState } from "react";
import StarRating from "./StarRating";

export default function ReviewBox() {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  return (
    <div className="bg-[#151515] border border-white/10 rounded-3xl p-6 mb-10">

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your thoughts about this song..."
        className="w-full bg-[#0f0f0f] border border-white/10 rounded-2xl p-4 text-white"
      />

      <div className="mt-4">
        <StarRating onChange={setRating} />
      </div>

      <button
        onClick={() => {
          alert(`Rating: ${rating}, Comment: ${comment}`);
        }}
        className="mt-6 px-5 py-2 bg-[#c5a059] text-black rounded-xl"
      >
        Submit Review
      </button>
    </div>
  );
}