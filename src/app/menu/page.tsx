"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { businessInfo, menuCategories } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

function MenuPage() {
  const [activeTab, setActiveTab] = useState(menuCategories[0]);

  const imageMap: Record<string, string> = {
    Ensaladas:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&q=85",
    Wraps:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=900&q=85",
    Sándwiches:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=900&q=85",
    Bebidas:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=900&q=85",
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <div className="border-b border-gray-200 bg-surface">
        <Container className="flex items-center justify-between py-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-green-600"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Volver
          </Link>
          <span className="text-lg font-bold text-green-700">Menú Zumi</span>
          <div className="w-16" />
        </Container>
      </div>

      <Container className="py-8 sm:py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex gap-1 overflow-x-auto rounded-xl bg-surface p-1 sm:mb-10 sm:justify-center">
            {menuCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-colors sm:px-6 sm:text-base",
                  activeTab.name === cat.name
                    ? "bg-white text-green-700 shadow-sm"
                    : "text-gray-500 hover:text-gray-800",
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="mb-8 overflow-hidden rounded-2xl sm:mb-10">
            <div className="relative aspect-[2/1] w-full sm:aspect-[3/1]">
              <Image
                src={imageMap[activeTab.name]}
                alt={`${activeTab.name} — Zumi Mexicali`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 900px"
                priority
              />
            </div>
          </div>

          <div className="space-y-4">
            {activeTab.items.map((item) => (
              <div
                key={item.name}
                className="flex items-start justify-between border-b border-gray-200 pb-4"
              >
                <div className="pr-4">
                  <h3 className="text-lg font-semibold text-gray-800 sm:text-xl">
                    {item.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-gray-500">
                    {item.description}
                  </p>
                </div>
                <span className="shrink-0 text-lg font-bold text-gray-700 sm:text-xl">
                  ${item.price}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open(businessInfo.whatsapp, "_blank")}
            >
              Pedir por WhatsApp
            </Button>
            <div className="mt-4">
              <Link
                href="/"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-green-600"
              >
                Volver al inicio
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MenuPage;
