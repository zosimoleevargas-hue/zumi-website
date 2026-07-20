import Image from "next/image";
import { Container } from "@/components/ui/container";

const items = [
  {
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
    subtitle: "Todos los días.",
    alt: "Verduras y ingredientes frescos — Zumi Mexicali",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    subtitle: "Cuando tú lo pidas.",
    alt: "Bowl saludable con vegetales frescos — Zumi Mexicali",
  },
  {
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=80",
    subtitle: "Sin complicaciones.",
    alt: "Ingredientes frescos y coloridos — Zumi Mexicali",
  },
];

const titles = [
  <>
    Ingredientes <span className="text-orange-500">frescos</span>.
  </>,
  <>
    <span className="text-orange-500">Preparado</span> al momento.
  </>,
  <>
    Salud y <span className="text-orange-500">sabor</span>.
  </>,
];

function Benefits() {
  return (
    <section className="section-padding">
      <Container>
        <div className="mx-auto max-w-4xl space-y-16">
          {items.map((item, i) => (
            <div
              key={item.alt}
              className="animate-slide-up grid items-center gap-8 sm:grid-cols-2"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className={i % 2 === 1 ? "sm:order-2" : ""}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className={i % 2 === 1 ? "sm:order-1 sm:text-right" : ""}>
                <h3 className="text-3xl font-bold leading-tight tracking-tight text-gray-800 sm:text-4xl">
                  {titles[i]}
                </h3>
                <p className="mt-2 text-xl text-gray-400">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { Benefits };
