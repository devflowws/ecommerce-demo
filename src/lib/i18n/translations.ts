export type Locale = "en" | "fr";

export const translations = {
  en: {
    nav: {
      products: "Products",
      story: "Our story",
      reviews: "Reviews",
      contact: "Contact",
      cart: "Open cart",
      menu: "Open menu",
    },
    hero: {
      badge: "Made in Lomé, worn everywhere",
      title1: "Wax, reimagined",
      title2: "for everyday life.",
      subtitle:
        "Dresses, fabrics and accessories crafted by Togolese artisans. Delivered in Lomé, payable with Mobile Money, with no compromise on quality.",
      ctaPrimary: "Discover the collection",
      ctaSecondary: "Our story",
      productBadgeName: "Adja Set",
      productBadgeCaption: "Best-seller this month",
    },
    trustBar: {
      delivery: "Delivery in Lomé within 48h",
      mobileMoney: "Pay with Mobile Money",
      returns: "Easy returns within 7 days",
      handmade: "Made by local artisans",
    },
    products: {
      eyebrow: "The collection",
      title: "Pieces that tell a story",
      subtitle: "Every piece is sourced or made in Lomé, in small batches.",
      all: "All",
      addToCart: "Add to cart",
      categories: {
        "Robes & ensembles": "Dresses & sets",
        "Homme": "Men",
        "Tissus": "Fabrics",
        "Accessoires": "Accessories",
      },
      badges: {
        "Best-seller": "Best-seller",
        "Nouveau": "New",
        "Fait main": "Handmade",
      },
      items: {
        "ensemble-adja": {
          name: "Adja Set",
          description:
            "Matching dress and headwrap in printed wax fabric, fitted cut, hand-finished by our partner workshops in Lomé.",
        },
        "kaftan-block-print": {
          name: "Aïda Kaftan",
          description:
            "Flowing block-print kaftan, adjustable belt, loose fit ideal for warm days.",
        },
        "boubou-homme-raye": {
          name: "Kwame Boubou",
          description:
            "Striped men's boubou, structured hood, light lined fabric — for special occasions.",
        },
        "coupon-wax-premium": {
          name: "Premium Wax Fabric — 6 yards",
          description:
            "100% cotton wax fabric, 6 yards, rich colourways — for your own creations or your trusted tailor.",
        },
        "pagne-wax-traditionnel": {
          name: "Traditional Wax Wrap",
          description:
            "Traditional pattern wax wrap, tight weave and colours that hold up to washing, one-of-a-kind piece.",
        },
        "sac-cabas-raphia": {
          name: "Woven Raffia Tote",
          description:
            "Hand-woven raffia tote bag, vegetable-tanned leather handles, cotton inner lining.",
        },
        "collier-perles-wax": {
          name: "Ama Beaded Necklace",
          description:
            "Multicoloured glass bead necklace, hand-assembled, adjustable clasp.",
        },
      },
    },
    vision: {
      eyebrow: "Our story",
      title: "Wax deserves better than a supermarket shelf.",
      body: "AMA was born in Lomé from a simple conviction: Togolese fabrics and craftsmanship deserve to be worn with pride, not just exported. We work with a handful of local workshops, in small batches, so every piece keeps its character.",
      values: {
        local: {
          title: "Local materials",
          description: "Wax, raffia and leather sourced from Togolese suppliers.",
        },
        workshops: {
          title: "Partner workshops",
          description:
            "Every piece is made by artisans in Lomé, paid a fair price.",
        },
        smallBatch: {
          title: "Small batches",
          description:
            "No overproduction: limited collections, made to last.",
        },
      },
    },
    testimonials: {
      eyebrow: "Customer reviews",
      title: "What people are saying",
      reviews: [
        {
          name: "Akossiwa D.",
          role: "Customer in Lomé",
          quote:
            "The Adja set is even more beautiful in person. Delivered in two days and paid directly with Mobile Money, zero friction.",
        },
        {
          name: "Yawa T.",
          role: "Customer in Kara",
          quote:
            "The premium wax fabric has impressive colour retention after several washes. I recommend it without hesitation.",
        },
        {
          name: "Kokou M.",
          role: "Customer in Lomé",
          quote:
            "The Kwame boubou has become my go-to outfit for every big occasion. The fabric is genuinely good quality.",
        },
      ],
    },
    newsletter: {
      title: "New arrivals, before anyone else",
      subtitle: "Once a month: new pieces and private sales. Nothing more.",
      placeholder: "you@email.com",
      cta: "Subscribe",
      success: "Thanks — see you soon in your inbox!",
    },
    contact: {
      eyebrow: "Contact",
      title: "Questions about an order?",
      subtitle:
        "Our team in Lomé answers within 24 working hours, in French or English.",
      form: {
        name: "Full name",
        email: "Email",
        subject: "Subject",
        subjectOptions: ["Order", "Product question", "Wholesale", "Other"],
        message: "Message",
        submit: "Send message",
      },
      info: {
        email: "Email",
        phone: "Phone / WhatsApp",
        address: "Address",
        addressValue: "Lomé, Togo",
        hours: "Opening hours",
        hoursValue: "Mon–Sat, 9am–6pm",
      },
    },
    footer: {
      tagline:
        "Togolese wax fashion and craftsmanship, delivered across Lomé.",
      shop: "Shop",
      shopLinks: ["Dresses & sets", "Fabrics", "Accessories", "Men"],
      company: "Company",
      companyLinks: ["Our story", "Contact", "Shipping & returns"],
      payments: "Accepted payments",
      rights: "All rights reserved.",
    },
    cart: {
      title: "Your cart",
      empty: "Your cart is empty for now.",
      subtotal: "Subtotal",
      shippingNote: "Shipping calculated at the next step.",
      checkout: "Checkout",
    },
    checkout: {
      title: "Checkout",
      demoBadge: "Demo",
      backendNote: "Mini backend — no live API called yet",
      orderSummary: "Order summary",
      quantity: "Qty",
      subtotal: "Subtotal",
      shipping: "Shipping",
      shippingValue: "Free",
      total: "Total",
      shippingDetails: "Shipping details",
      fullName: "Full name",
      phone: "Phone number",
      address: "Delivery address",
      city: "City",
      continueToPayment: "Continue to payment",
      choosePayment: "Choose your payment method",
      choosePaymentSubtitle:
        "You'll be redirected to KoudiPay's secure payment page to complete your order.",
      payWith: "Pay with",
      emptyCart: "Your cart is empty.",
      backToShop: "Back to shop",
      redirecting: "Redirecting to secure checkout…",
      error: "Something went wrong starting checkout. Please try again.",
      reference: "Reference",
      orderConfirmed: "Your order is confirmed!",
    },
    languageToggle: {
      label: "Language",
    },
  },
  fr: {
    nav: {
      products: "Produits",
      story: "Notre histoire",
      reviews: "Avis",
      contact: "Contact",
      cart: "Ouvrir le panier",
      menu: "Ouvrir le menu",
    },
    hero: {
      badge: "Fait à Lomé, porté partout",
      title1: "Le wax, réinventé",
      title2: "pour votre quotidien.",
      subtitle:
        "Robes, tissus et accessoires façonnés par des artisans togolais. Livrés à Lomé, payables en Mobile Money, sans compromis sur la qualité.",
      ctaPrimary: "Découvrir la collection",
      ctaSecondary: "Notre histoire",
      productBadgeName: "Ensemble Adja",
      productBadgeCaption: "Best-seller ce mois-ci",
    },
    trustBar: {
      delivery: "Livraison à Lomé sous 48h",
      mobileMoney: "Paiement Mobile Money",
      returns: "Retours faciles sous 7 jours",
      handmade: "Fait par des artisans locaux",
    },
    products: {
      eyebrow: "La collection",
      title: "Des pièces qui racontent une histoire",
      subtitle:
        "Chaque pièce est sourcée ou confectionnée à Lomé, en petites séries.",
      all: "Tout",
      addToCart: "Ajouter au panier",
      categories: {
        "Robes & ensembles": "Robes & ensembles",
        "Homme": "Homme",
        "Tissus": "Tissus",
        "Accessoires": "Accessoires",
      },
      badges: {
        "Best-seller": "Best-seller",
        "Nouveau": "Nouveau",
        "Fait main": "Fait main",
      },
      items: {
        "ensemble-adja": {
          name: "Ensemble Adja",
          description:
            "Robe et foulard assortis en wax imprimé, coupe cintrée, finitions cousues main par nos ateliers partenaires à Lomé.",
        },
        "kaftan-block-print": {
          name: "Kaftan Aïda",
          description:
            "Kaftan fluide à motif block-print, ceinture ajustable, coupe ample idéale pour les journées chaudes.",
        },
        "boubou-homme-raye": {
          name: "Boubou Kwame",
          description:
            "Boubou homme à rayures tissées, capuche structurée, tissu léger doublé — pour les grandes occasions.",
        },
        "coupon-wax-premium": {
          name: "Coupon Wax Premium — 6 yards",
          description:
            "Coupon de wax 100% coton, 6 yards, coloris riches — pour vos propres créations ou vos couturiers de confiance.",
        },
        "pagne-wax-traditionnel": {
          name: "Pagne Wax Traditionnel",
          description:
            "Pagne wax motif traditionnel, tissage serré et couleurs tenaces au lavage, pièce unique.",
        },
        "sac-cabas-raphia": {
          name: "Cabas Raphia Tissé",
          description:
            "Sac cabas en raphia tressé à la main, anses en cuir végétal, doublure intérieure en coton.",
        },
        "collier-perles-wax": {
          name: "Collier Perles Ama",
          description:
            "Collier de perles de verre multicolores, assemblé à la main, fermoir ajustable.",
        },
      },
    },
    vision: {
      eyebrow: "Notre histoire",
      title: "Le wax mérite mieux qu'un rayon de supermarché.",
      body: "AMA est née à Lomé d'une conviction simple : les tissus et savoir-faire togolais méritent d'être portés fièrement, pas seulement exportés. Nous travaillons avec une poignée d'ateliers locaux, en petites séries, pour que chaque pièce garde son caractère.",
      values: {
        local: {
          title: "Matières locales",
          description:
            "Wax, raphia et cuir sourcés auprès de fournisseurs togolais.",
        },
        workshops: {
          title: "Ateliers partenaires",
          description:
            "Chaque pièce est confectionnée par des artisans de Lomé, rémunérés au juste prix.",
        },
        smallBatch: {
          title: "Petites séries",
          description:
            "Pas de surproduction : des collections limitées, pensées pour durer.",
        },
      },
    },
    testimonials: {
      eyebrow: "Avis clients",
      title: "Ce qu'on en dit",
      reviews: [
        {
          name: "Akossiwa D.",
          role: "Cliente à Lomé",
          quote:
            "L'ensemble Adja est encore plus beau en vrai. Livré en deux jours et payé directement en Mobile Money, aucune friction.",
        },
        {
          name: "Yawa T.",
          role: "Cliente à Kara",
          quote:
            "Le coupon de wax premium a une tenue des couleurs impressionnante après plusieurs lavages. Je recommande sans hésiter.",
        },
        {
          name: "Kokou M.",
          role: "Client à Lomé",
          quote:
            "Le boubou Kwame est devenu ma tenue de toutes les grandes occasions. Le tissu est vraiment de qualité.",
        },
      ],
    },
    newsletter: {
      title: "Les nouveautés, avant tout le monde",
      subtitle:
        "Une fois par mois, les nouvelles pièces et les ventes privées. Rien de plus.",
      placeholder: "votre@email.com",
      cta: "S'abonner",
      success: "Merci, à très vite dans votre boîte mail !",
    },
    contact: {
      eyebrow: "Contact",
      title: "Une question sur une commande ?",
      subtitle:
        "Notre équipe à Lomé répond sous 24h ouvrées, en français ou en anglais.",
      form: {
        name: "Nom complet",
        email: "Email",
        subject: "Sujet",
        subjectOptions: ["Commande", "Question produit", "Vente en gros", "Autre"],
        message: "Message",
        submit: "Envoyer le message",
      },
      info: {
        email: "Email",
        phone: "Téléphone / WhatsApp",
        address: "Adresse",
        addressValue: "Lomé, Togo",
        hours: "Horaires",
        hoursValue: "Lun–Sam, 9h–18h",
      },
    },
    footer: {
      tagline: "Mode et artisanat wax togolais, livrés dans tout Lomé.",
      shop: "Boutique",
      shopLinks: ["Robes & ensembles", "Tissus", "Accessoires", "Homme"],
      company: "Entreprise",
      companyLinks: ["Notre histoire", "Contact", "Livraison & retours"],
      payments: "Moyens de paiement acceptés",
      rights: "Tous droits réservés.",
    },
    cart: {
      title: "Votre panier",
      empty: "Votre panier est vide pour l'instant.",
      subtotal: "Sous-total",
      shippingNote: "Livraison calculée à l'étape suivante.",
      checkout: "Passer commande",
    },
    checkout: {
      title: "Commande",
      demoBadge: "Démo",
      backendNote: "Mini-backend — aucune API réelle appelée pour l'instant",
      orderSummary: "Récapitulatif de commande",
      quantity: "Qté",
      subtotal: "Sous-total",
      shipping: "Livraison",
      shippingValue: "Gratuite",
      total: "Total",
      shippingDetails: "Informations de livraison",
      fullName: "Nom complet",
      phone: "Numéro de téléphone",
      address: "Adresse de livraison",
      city: "Ville",
      continueToPayment: "Continuer vers le paiement",
      choosePayment: "Choisissez votre moyen de paiement",
      choosePaymentSubtitle:
        "Vous serez redirigé vers la page de paiement sécurisée de KoudiPay pour finaliser votre commande.",
      payWith: "Payer avec",
      emptyCart: "Votre panier est vide.",
      backToShop: "Retour à la boutique",
      redirecting: "Redirection vers le paiement sécurisé…",
      error: "Une erreur est survenue au démarrage du paiement. Réessayez.",
      reference: "Référence",
      orderConfirmed: "Votre commande est confirmée !",
    },
    languageToggle: {
      label: "Langue",
    },
  },
} as const;
