"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { businessInfo, menuCategories } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const imageMap: Record<string, string> = {
  Ensaladas: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&q=85",
  Wraps: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=900&q=85",
  Sándwiches: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=900&q=85",
  Bebidas: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=900&q=85",
};

const altMap: Record<string, string> = {
  Ensaladas: "Ensalada fresca con vegetales variados — Zumi Mexicali",
  Wraps: "Wrap saludable con vegetales frescos — Zumi Mexicali",
  Sándwiches: "Sándwich artesanal saludable — Zumi Mexicali",
  Bebidas: "Bebidas frescas y naturales — Zumi Mexicali",
};

function MenuPreview() {
  const [activeName, setActiveName] = useState(menuCategories[0].name);
  const active = menuCategories.find((c) => c.name === activeName)!;

  return (
    <section id="menu" className="section-padding bg-surface">
      <Container>
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
            Nuestro <span className="text-orange-500">Menú</span>
          </h2>
          <Link
            href="/menu"
            className="group hidden items-center gap-1.5 text-sm font-medium text-green-700 transition-colors hover:text-green-800 sm:inline-flex"
          >
            Ver Menú Completo
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="animate-slide-up relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
            <Image
              src={imageMap[activeName]}
              alt={altMap[activeName]}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="animate-fade-in flex flex-col gap-2 sm:gap-4">
            {menuCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveName(cat.name)}
                className={cn(
                  "group flex flex-col border-b border-gray-200 py-3 text-left transition-colors sm:py-4",
                  activeName === cat.name
                    ? "border-green-600"
                    : "hover:border-gray-300",
                )}
              >
                <span
                  className={cn(
                    "text-lg font-semibold transition-colors sm:text-xl",
                    activeName === cat.name
                      ? "text-green-700"
                      : "text-gray-700 group-hover:text-gray-900",
                  )}
                >
                  {cat.name}
                </span>
                <span className="mt-0.5 text-sm text-gray-500">
                  {cat.items.slice(0, 2).map((item) => item.name).join(", ")}
                  {cat.items.length > 2 ? " y más" : ""}
                </span>
              </button>
            ))}

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                variant="primary"
                size="md"
                onClick={() => window.open(businessInfo.whatsapp, "_blank")}
              >
                Pedir por WhatsApp
              </Button>
              <Link
                href="/menu"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-green-600 sm:hidden"
              >
                Ver Menú Completo
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { MenuPreview };
