import Image from "next/image";
import { Container } from "@/components/ui/container";

function Freshness() {
  return (
    <section className="section-padding">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="animate-slide-up relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=900&q=85"
              alt="Ensalada fresca con vegetales coloridos — ingredientes de calidad Zumi Mexicali"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="animate-fade-in flex flex-col gap-6">
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-gray-800 sm:text-5xl">
              <span className="text-orange-500">Ingredientes</span> que hablan por sí solos.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-gray-500">
              En Zumi no escondemos nada. Ingredientes frescos, preparación al
              instante, y un menú diseñado para que comer saludable sea lo más
              fácil de tu día.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { Freshness };
