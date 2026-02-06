"use client";

import React, { useState, useEffect } from "react";

const LockScreen = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [password, setPassword] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const [isFading, setIsFading] = useState(false);

  // Prevent scrolling when locked
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLocked]);

  const handleUnlock = (e?: React.FormEvent) => {
    e?.preventDefault();
    // Simple password check - strict equality
    // You can change 'lilac' to any password you prefer
    if (password === "lilac") {
      setIsFading(true);
      setTimeout(() => {
        setIsLocked(false);
      }, 500); // Wait for fade out transition
    } else {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  if (!isLocked) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#f4f4f4] transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Lock Icon Circle */}
      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-gray-300 bg-white shadow-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      </div>

      {/* Password Input Container */}
      <form
        onSubmit={handleUnlock}
        className={`relative w-64 ${isShaking ? "animate-shake" : ""}`}
      >
        <div className="relative flex items-center border border-gray-400 bg-white p-1">
          <div className="h-6 w-[1px] bg-gray-400 mx-2"></div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent p-2 text-[#C8A2C8] placeholder-gray-400 focus:outline-none font-medium"
            autoFocus
          />
          <button
            type="submit"
            className="absolute right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </form>

      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          10%,
          30%,
          50%,
          70%,
          90% {
            transform: translateX(-4px);
          }
          20%,
          40%,
          60%,
          80% {
            transform: translateX(4px);
          }
        }
        .animate-shake {
          animation: shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        }
      `}</style>
    </div>
  );
};

export default LockScreen;
