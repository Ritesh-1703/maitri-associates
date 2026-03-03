// components/WhatsAppButton.tsx
"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phoneNumber = "918669991085"; // without + and spaces

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=Hello%20Maitri%20Associates%2C%20I'm%20interested%20in%20your%20construction%20services.`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <MessageCircle size={24} />
    </a>
  );
}
