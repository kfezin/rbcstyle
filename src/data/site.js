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
  // Destino reproduzido do briefing. Diverge do telefone formatado e exige validação antes da publicação.
  whatsappTarget: "5575987128028",
  seo: {
    title: "RBC Tranças | Trancista em Lucas do Rio Verde — MT",
    description:
      "Conheça o trabalho de Rebeca, explore tranças e penteados afro em Lucas do Rio Verde–MT e consulte valores, disponibilidade e detalhes pelo WhatsApp.",
    keywords: [
      "trancista em Lucas do Rio Verde",
      "tranças afro",
      "Box Braids",
      "Knotless",
      "Nagô",
      "Ghana Braids",
      "penteados afro",
    ],
  },
  bioPhrase: "Onde Deus me plantar, minhas mãos florescerão.",
  instagramImage: {
    src: "./images/rebecca-portrait.webp",
    storage: "/manus-storage/rebecca-portrait_1eb210c7.webp",
    alt: "Rebeca sorrindo, com cabelo cacheado castanho e segurando um pente.",
  },
  aboutImage: {
    src: "./images/rebecca-portrait-2.webp",
    storage: "/manus-storage/rebecca-portrait-2_905152cc.webp",
    alt: "Rebeca em retrato frontal, usando penteado afro e blusa estampada.",
  },
};

export function createWhatsAppUrl(message = "Olá, Rebeca! Gostaria de saber mais sobre os estilos e o atendimento.") {
  const url = new URL(`https://wa.me/${site.whatsappTarget}`);
  url.searchParams.set("text", message);
  return url.toString();
}
