import { Container } from "@/components/ui/container";
import { businessInfo } from "@/lib/constants";
import {
  Phone,
  MapPin,
  Clock,
  Leaf,
  ExternalLink,
} from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-surface">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-1.5">
              <Leaf size={20} className="text-green-600" aria-hidden="true" />
              <span className="text-lg font-bold text-green-700">
                {businessInfo.name}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              {businessInfo.description}
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Contacto
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-green-600" />
                <span>{businessInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-green-600" />
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="transition-colors hover:text-green-700"
                >
                  {businessInfo.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Horarios
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {businessInfo.hours.map((h) => (
                <li key={h.label} className="flex items-center gap-2">
                  <Clock size={16} className="shrink-0 text-green-600" />
                  <span>
                    {h.label}: {h.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Síguenos
            </h4>
            <div className="flex gap-3">
              {businessInfo.social.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-500 transition-colors hover:bg-green-600 hover:text-white"
                  aria-label={s.label}
                >
                  <ExternalLink size={16} />
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-400">
              <a
                href="#"
                className="underline transition-colors hover:text-green-700"
              >
                Aviso de privacidad
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} {businessInfo.name}. Todos los
          derechos reservados.
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
