"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { businessInfo } from "@/lib/constants";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Menú", href: "#menu" },
  { label: "Nosotros", href: "#about" },
  { label: "Ubicación", href: "#location" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-warm-white/80 backdrop-blur-md">
      <Container as="nav" className="flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-1.5 text-xl font-bold text-green-700">
          <Leaf size={22} className="text-orange-500" aria-hidden="true" />
          Zumi
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-green-700"
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="primary"
            size="sm"
            onClick={() => window.open(businessInfo.whatsapp, "_blank")}
          >
            Pedir por WhatsApp
          </Button>
        </div>

        <button
          className="flex items-center justify-center p-2 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          isOpen ? "max-h-64" : "max-h-0",
        )}
      >
        <Container className="flex flex-col gap-3 pb-4 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-green-700"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="primary"
            size="sm"
            className="w-full"
            onClick={() => window.open(businessInfo.whatsapp, "_blank")}
          >
            Pedir por WhatsApp
          </Button>
        </Container>
      </div>
    </header>
  );
}

export { Navbar };
