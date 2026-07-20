import Image from "next/image";
import { Container } from "@/components/ui/container";

function About() {
  return (
    <section id="about" className="section-padding">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="animate-slide-up relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=900&q=85"
              alt="Comida saludable preparada con ingredientes frescos — Zumi Mexicali"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="animate-fade-in flex flex-col gap-6">
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-gray-800 sm:text-5xl">
              Comer <span className="text-orange-500">saludable</span> no debería ser complicado.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-gray-500">
              Por eso Zumi existe. Ingredientes frescos, preparación al
              instante, y un solo objetivo: que comas mejor sin pensar en ello.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { About };
