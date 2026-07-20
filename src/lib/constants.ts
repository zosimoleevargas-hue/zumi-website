import type { LucideIcon } from "lucide-react";
import {
  Leaf,
  Clock,
  Heart,
  MapPin,
  ChefHat,
  Sparkles,
  Zap,
} from "lucide-react";

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface MenuCategory {
  icon: LucideIcon;
  name: string;
  description: string;
  gradient: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: number;
}

export interface BusinessInfo {
  name: string;
  description: string;
  address: string;
  addressFull: string;
  phone: string;
  phoneDisplay: string;
  hours: { label: string; value: string }[];
  whatsapp: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  googleReviewsUrl: string;
  social: { label: string; url: string }[];
}

export const businessInfo: BusinessInfo = {
  name: "Zumi",
  description:
    "Ensaladas, wraps y sándwiches preparados al momento con ingredientes frescos.",
  address:
    "Blvd. San Luis Río Colorado - Mexicali 4523, Parcela 44, Mexicali, B.C.",
  addressFull:
    "Blvd. San Luis Río Colorado - Mexicali 4523, Parcela 44, 21260 Mexicali, B.C.",
  phone: "6861122212",
  phoneDisplay: "686 112 2212",
  hours: [
    { label: "Lun - Vie", value: "7:30 AM - 4:30 PM" },
    { label: "Sáb", value: "9:00 AM - 1:00 PM" },
  ],
  whatsapp: "https://wa.me/526861122212",
  googleMapsUrl:
    "https://maps.google.com/maps?dir_action=navigate&q=Blvd.+San+Luis+R%C3%ADo+Colorado+-+Mexicali+4523,+Parcela+44,+21260+Mexicali,+B.C.",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=Blvd.+San+Luis+R%C3%ADo+Colorado+-+Mexicali+4523,+Parcela+44,+21260+Mexicali,+B.C.&output=embed",
  googleReviewsUrl:
    "https://www.google.com/maps/search/Zumi+Mexicali",
  social: [
    {
      label: "Instagram",
      url: "#",
    },
    {
      label: "Facebook",
      url: "#",
    },
  ],
};

export const benefits: Benefit[] = [
  {
    icon: Leaf,
    title: "Ingredientes frescos",
    description:
      "Seleccionamos ingredientes frescos cada día para garantizar calidad en cada bocado.",
  },
  {
    icon: Clock,
    title: "Preparado al momento",
    description:
      "Todo se prepara cuando lo pides. Nada está pre-hecho, todo se hace al instante.",
  },
  {
    icon: Heart,
    title: "Opciones saludables",
    description:
      "Ensaladas, wraps y sándwiches llenos de nutrientes para cuidar tu alimentación.",
  },
  {
    icon: MapPin,
    title: "Ubicación conveniente",
    description:
      "Estamos en una zona accesible de Mexicali, cerca de oficinas y escuelas.",
  },
];

export const menuCategories: (MenuCategory & { items: MenuItem[] })[] = [
  {
    icon: ChefHat,
    name: "Ensaladas",
    description:
      "Ensaladas frescas con ingredientes de temporada. Combinaciones ligeras y llenas de sabor.",
    gradient: "from-green-200 via-green-100 to-green-50",
    items: [
      { name: "Ensalada César", description: "Lechuga romana, parmesano, croutons, aderezo césar", price: 140 },
      { name: "Ensalada Verde", description: "Mix de hojas verdes, aguacate, nueces, vinagreta", price: 130 },
      { name: "Ensalada de la Casa", description: "Quinoa, arándanos, pollo, espinaca", price: 150 },
      { name: "Ensalada Mediterránea", description: "Pepino, tomate cherry, aceitunas, queso feta", price: 145 },
      { name: "Ensalada Tropical", description: "Mango, aguacate, camote, aderezo de limón", price: 135 },
    ],
  },
  {
    icon: ChefHat,
    name: "Wraps",
    description:
      "Wraps rellenos de proteínas y vegetales frescos. La opción práctica para llevar.",
    gradient: "from-orange-200 via-orange-100 to-orange-50",
    items: [
      { name: "Wrap de Pollo Chipotle", description: "Pollo, chipotle, lechuga, jitomate", price: 120 },
      { name: "Wrap Veggie", description: "Hummus, verduras asadas, espinaca", price: 110 },
      { name: "Wrap de Atún", description: "Atún fresco, aguacate, pepino", price: 125 },
      { name: "Wrap BBQ", description: "Pollo BBQ, cebolla caramelizada, queso", price: 130 },
      { name: "Wrap Mediterráneo", description: "Falafel, tzatziki, pepino, tomate", price: 115 },
    ],
  },
  {
    icon: ChefHat,
    name: "Sándwiches",
    description:
      "Sándwiches artesanales con pan fresco y los mejores ingredientes. El clásico reinventado.",
    gradient: "from-green-100 via-green-50 to-orange-50",
    items: [
      { name: "Sándwich de Pechuga Chipotle", description: "Pechuga, chipotle, pan artesanal", price: 120 },
      { name: "Sándwich Veggie", description: "Verduras asadas, queso panela, pan integral", price: 110 },
      { name: "Sándwich de Pollo", description: "Pollo, lechuga, tomate, mayonesa", price: 125 },
      { name: "Sándwich Mediterráneo", description: "Falafel, hummus, vegetales frescos", price: 130 },
      { name: "Sándwich Club", description: "Pavo, tocino, lechuga, tomate, pan artesanal", price: 140 },
    ],
  },
  {
    icon: ChefHat,
    name: "Bebidas",
    description:
      "Bebidas frescas para acompañar tu comida. Naturales y refrescantes.",
    gradient: "from-blue-100 via-blue-50 to-white",
    items: [
      { name: "Té de Limón", description: "Té natural de limón, servido frío o caliente", price: 35 },
      { name: "Agua Fresca", description: "Jamaica u horchata, preparada al día", price: 40 },
      { name: "Smoothie Verde", description: "Espinaca, manzana, jengibre, piña", price: 55 },
      { name: "Limonada", description: "Limonada natural con un toque de menta", price: 45 },
      { name: "Café del Día", description: "Café recién preparado, servido caliente", price: 40 },
    ],
  },
];

export const values: { icon: LucideIcon; label: string }[] = [
  { icon: Leaf, label: "Calidad" },
  { icon: Sparkles, label: "Frescura" },
  { icon: Zap, label: "Rapidez" },
  { icon: Heart, label: "Bienestar" },
];
