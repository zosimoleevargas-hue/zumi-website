"use client";

import { Container } from "@/components/ui/container";
import { businessInfo } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

function Location() {
  return (
    <section id="location" className="section-padding bg-surface">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-in flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              Visítanos
            </h2>

            <p className="text-lg text-gray-700">{businessInfo.addressFull}</p>

            <div className="text-sm text-gray-500">
              {businessInfo.hours.map((h) => (
                <p key={h.label}>
                  <span className="font-medium text-gray-700">{h.label}:</span>{" "}
                  {h.value}
                </p>
              ))}
            </div>

            <div className="mt-2">
              <button
                onClick={() =>
                  window.open(businessInfo.googleMapsUrl, "_blank")
                }
                className="group inline-flex items-center gap-2 text-sm font-medium text-green-700 transition-colors hover:text-green-800"
              >
                Cómo llegar
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

          <div className="animate-slide-up overflow-hidden rounded-2xl shadow-sm">
            <iframe
              src={businessInfo.googleMapsEmbedUrl}
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Zumi en Mexicali"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export { Location };
