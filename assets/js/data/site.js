export const site = {
  brand: "Rbc_tranças | Trancista",
  owner: "Rebeca",
  location: {
    city: "Lucas do Rio Verde",
    state: "MT",
    country: "Brasil",
  },
  instagram: {
    handle: "@rebeca.amrr",
    url: "https://www.instagram.com/rebeca.amrr/",
  },
  email: "borgesrebeca502@gmail.com",
  whatsappTarget: "5575987128028",
  seo: {
    title: "Rbc_tranças | Trancista em Lucas do Rio Verde — MT",
    description:
      "Rebeca é trancista em Lucas do Rio Verde, MT. Veja tranças afro e penteados, explore o portfólio e consulte detalhes pelo WhatsApp.",
    keywords: [
      "trancista em Lucas do Rio Verde",
      "tranças afro",
      "Box Braids",
      "Knotless",
      "Nagô",
      "Ghana",
      "penteados afro",
    ],
  },
  bioPhrase: "Onde Deus me plantar, minhas mãos florescerão.",
  heroImage: {
    src: "./assets/images/header-braid-cutout.webp",
    alt: "Pessoa vista de perfil, com tranças longas escuras e casaco claro; recorte sem fundo.",
  },
  aboutImage: {
    src: "./assets/images/rebeca-about.webp",
    alt: "Retrato de Rebeca sorrindo de frente, segurando um pente junto ao cabelo cacheado.",
  },
  aboutImageSecondary: {
    src: "./assets/images/rbc-cover-rebeca.webp",
    alt: "Recorte de Rebeca sorrindo de perfil, com cabelo cacheado volumoso e mechas douradas.",
  },
  contactImage: {
    src: "./assets/images/rebeca-contact.webp",
    alt: "Retrato quadrado de Rebeca com cabelo cacheado e pente.",
  },
};

export function createWhatsAppUrl(message = "Olá, Rebeca! Vi o catálogo da RBC e quero conversar sobre um estilo.") {
  const url = new URL(`https://wa.me/${site.whatsappTarget}`);
  url.searchParams.set("text", message);
  return url.toString();
}
