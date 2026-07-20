"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { businessInfo } from "@/lib/constants";

function Hero() {
  return (
    <section className="pt-16 sm:pt-24 lg:pt-32">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
          <div className="animate-fade-in flex flex-col gap-6">
            <h1 className="text-5xl font-bold leading-none tracking-tight text-gray-800 sm:text-7xl lg:text-8xl">
              Sin filas.
              <br />
              Sin demoras.
              <br />
              <span className="text-orange-500">Fresco</span>.
              <br />
              <span className="text-green-600">Zumi.</span>
            </h1>

            <div className="flex flex-col items-start gap-3">
              <Button
                variant="menu"
                size="lg"
                onClick={() => {
                  document
                    .getElementById("menu")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Ver Menú
              </Button>

              <Button
                variant="secondary"
                size="md"
                onClick={() => window.open(businessInfo.whatsapp, "_blank")}
              >
                Pedir por WhatsApp
              </Button>
            </div>

            <button
              onClick={() => {
                document
                  .getElementById("location")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-green-600"
            >
              Cómo llegar · {businessInfo.address}
            </button>
          </div>

          <div className="animate-slide-up relative aspect-[4/3] w-full overflow-hidden rounded-3xl sm:aspect-[5/4] lg:aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&q=85"
              alt="Ensalada fresca con ingredientes coloridos — Zumi Mexicali"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export { Hero };
