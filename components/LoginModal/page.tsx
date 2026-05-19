"use client";

import { useEffect, useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  X,
  User,
} from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({
  isOpen,
  onClose,
}: LoginModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  // ESC key + body scroll lock
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    // Add authentication logic here
  };

  return (
    <div className="fixed inset-0 z-[9999]">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Center Container */}
      <div className="flex min-h-screen items-center justify-center p-4">

        {/* Modal */}
        <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#151515]/95 shadow-2xl">

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 z-10 rounded-full p-1 text-gray-400 transition hover:bg-white/5 hover:text-white"
          >
            <X size={20} />
          </button>

          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-48 w-48 rounded-full bg-[#c5a059]/10 blur-3xl" />

          <div className="relative p-8 pt-12">

            {/* Header */}
            <div className="mb-8 text-center">
              <h2 className="mb-2 font-serif text-3xl font-bold text-white">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h2>

              <p className="text-sm text-gray-400">
                {isLogin
                  ? "Access your favorite lyrics and playlists"
                  : "Join the Tharu Lyrics community today"}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              {!isLogin && (
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
                    <User size={18} />
                  </div>

                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-white/10 bg-[#0f0f0f] py-3 pl-11 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-[#c5a059]/50"
                  />
                </div>
              )}

              {/* Email */}
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
                  <Mail size={18} />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#0f0f0f] py-3 pl-11 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-[#c5a059]/50"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
                  <Lock size={18} />
                </div>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#0f0f0f] py-3 pl-11 pr-12 text-white focus:outline-none focus:ring-2 focus:ring-[#c5a059]/50"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#c5a059] py-3.5 font-bold text-black transition-all hover:bg-[#b48e48] active:scale-[0.98]"
              >
                {isLogin ? "Log In" : "Sign Up"}

                <ArrowRight size={18} />
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/5" />
              </div>

              <div className="relative flex justify-center text-[10px] uppercase tracking-widest text-gray-500">
                <span className="bg-[#151515] px-4">
                  Social Login
                </span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3">

              <button
                type="button"
                className="flex items-center justify-center rounded-xl border border-white/5 bg-[#0f0f0f] py-3 text-xs text-gray-300 transition-colors hover:bg-white/5"
              >
                Google
              </button>

              <button
                type="button"
                className="flex items-center justify-center rounded-xl border border-white/5 bg-[#0f0f0f] py-3 text-xs text-gray-300 transition-colors hover:bg-white/5"
              >
                GitHub
              </button>

            </div>

            {/* Toggle */}
            <p className="mt-8 text-center text-sm text-gray-500">
              {isLogin
                ? "Don't have an account?"
                : "Already have an account?"}{" "}

              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="font-medium text-[#c5a059] hover:underline"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}