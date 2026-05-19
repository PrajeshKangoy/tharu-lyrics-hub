"use client";

import { useState } from "react";
import LoginModal from "../LoginModal/page";

export default function AuthButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-[#333] hover:bg-[#444] text-gray-200 px-6 py-1.5 rounded-full text-sm font-medium transition-all border border-white/10 shadow-lg"
      >
        Log In
      </button>

      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}