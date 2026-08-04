export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: "FCFA";
  image: string;
  description: string;
  badge?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "ensemble-adja",
    name: "Ensemble Adja",
    category: "Robes & ensembles",
    price: 24500,
    currency: "FCFA",
    image: "/products/ensemble-adja.jpg",
    description:
      "Robe et foulard assortis en wax imprimé, coupe cintrée, finitions cousues main par nos ateliers partenaires à Lomé.",
    badge: "Best-seller",
  },
  {
    id: "kaftan-block-print",
    name: "Kaftan Aïda",
    category: "Robes & ensembles",
    price: 19900,
    currency: "FCFA",
    image: "/products/kaftan-block-print.jpg",
    description:
      "Kaftan fluide à motif block-print, ceinture ajustable, coupe ample idéale pour les journées chaudes.",
  },
  {
    id: "boubou-homme-raye",
    name: "Boubou Kwame",
    category: "Homme",
    price: 27500,
    currency: "FCFA",
    image: "/products/boubou-homme-raye.jpg",
    description:
      "Boubou homme à rayures tissées, capuche structurée, tissu léger doublé — pour les grandes occasions.",
    badge: "Nouveau",
  },
  {
    id: "coupon-wax-premium",
    name: "Coupon Wax Premium — 6 yards",
    category: "Tissus",
    price: 15000,
    currency: "FCFA",
    image: "/products/coupon-wax-premium.jpg",
    description:
      "Coupon de wax 100% coton, 6 yards, coloris riches — pour vos propres créations ou vos couturiers de confiance.",
  },
  {
    id: "pagne-wax-traditionnel",
    name: "Pagne Wax Traditionnel",
    category: "Tissus",
    price: 12500,
    currency: "FCFA",
    image: "/products/pagne-wax-traditionnel.jpg",
    description:
      "Pagne wax motif traditionnel, tissage serré et couleurs tenaces au lavage, pièce unique.",
  },
  {
    id: "sac-cabas-raphia",
    name: "Cabas Raphia Tissé",
    category: "Accessoires",
    price: 17500,
    currency: "FCFA",
    image: "/products/sac-cabas-raphia.jpg",
    description:
      "Sac cabas en raphia tressé à la main, anses en cuir végétal, doublure intérieure en coton.",
    badge: "Fait main",
  },
  {
    id: "collier-perles-wax",
    name: "Collier Perles Ama",
    category: "Accessoires",
    price: 8500,
    currency: "FCFA",
    image: "/products/collier-perles-wax.jpg",
    description:
      "Collier de perles de verre multicolores, assemblé à la main, fermoir ajustable.",
  },
];

export function getProduct(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}
