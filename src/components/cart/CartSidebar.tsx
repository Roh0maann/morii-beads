"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const WHATSAPP_NUMBER = "6281234567890"; // Dummy number, user can change later

export default function CartSidebar() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    let message = "Hello Morii Beads, I would like to order:\n\n";
    cartItems.forEach((item) => {
      message += `${item.quantity}x ${item.name} (${item.priceFormatted})\n`;
    });

    const formattedTotal = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(cartTotal);

    message += `\nTotal: ${formattedTotal}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  const formattedTotal = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(cartTotal);

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col transform transition-transform duration-300 ease-in-out">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-stone-200">
          <h2 className="font-sans text-2xl font-medium tracking-tight text-stone-900">
            Shopping Bag
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 -mr-2 text-stone-400 hover:text-stone-800 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-stone-500 space-y-4">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-stone-300">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <p>Your bag is currently empty.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="relative w-24 h-24 bg-stone-100 rounded-xl overflow-hidden shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex flex-col flex-1 justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-sans text-sm font-medium text-stone-900 leading-tight pr-4">
                        {item.name}
                      </h3>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-stone-400 hover:text-red-500 transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </button>
                    </div>
                    <p className="text-stone-500 text-xs mt-1">{item.priceFormatted}</p>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center border border-stone-200 rounded-full bg-white">
                      <button 
                        className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-stone-900 transition-colors"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >-</button>
                      <span className="w-4 text-center text-xs font-medium text-stone-900">
                        {item.quantity}
                      </span>
                      <button 
                        className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-stone-900 transition-colors"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout */}
        {cartItems.length > 0 && (
          <div className="border-t border-stone-200 p-6 bg-stone-50/50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-stone-600">Subtotal</span>
              <span className="font-sans text-lg font-medium text-stone-900">
                {formattedTotal}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-[#2B2724] text-white py-4 rounded-full font-bold tracking-[0.1em] text-xs uppercase hover:bg-black transition-colors flex items-center justify-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              Checkout via WhatsApp
            </button>
            <p className="text-center text-[10px] text-stone-400 mt-4 uppercase tracking-widest">
              Secure Checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
}
