"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="sticky top-0 w-full bg-[#FAF9F6]/90 backdrop-blur-md z-50 border-b border-stone-200/50">
      <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <Link
          href="/"
          className="font-sans text-2xl font-bold tracking-tight text-[#2B2724] hover:opacity-80 transition"
        >
          Morii Beads
        </Link>
        <div className="hidden md:flex space-x-10 text-[13px] uppercase tracking-[0.12em] text-stone-600 font-semibold">
          <Link href="/collections" className="hover:text-stone-800 transition">
            Collections
          </Link>
          <Link href="#" className="hover:text-stone-800 transition">
            The Atelier
          </Link>
          <Link href="#" className="hover:text-stone-800 transition">
            Our Story
          </Link>
          <Link href="#" className="hover:text-stone-800 transition">
            Journal
          </Link>
        </div>
        <div className="flex items-center space-x-6 text-stone-600">
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Shopping Bag"
            className="p-2 hover:text-stone-900 transition relative"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            {mounted && cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          <button
            aria-label="User Profile"
            className="p-2 hover:text-stone-900 transition"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
