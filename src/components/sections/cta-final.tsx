"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { businessInfo } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

function CtaFinal() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
            ¿Listo para comer <span className="text-orange-500">mejor</span>?
          </h2>

          <div className="mt-8 flex flex-col items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open(businessInfo.whatsapp, "_blank")}
            >
              Pedir por WhatsApp
            </Button>

            <button
              onClick={() =>
                window.open(businessInfo.googleMapsUrl, "_blank")
              }
              className="group inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-green-600"
            >
              Cómo llegar
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { CtaFinal };
