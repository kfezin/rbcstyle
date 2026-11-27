import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { site, createWhatsAppUrl } from "../assets/js/data/site.js";
import { serviceGroups, additionalServices, faqItems } from "../assets/js/data/services.js";
import { galleryItems } from "../assets/js/data/gallery.js";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const templatePath = resolve(root, "templates/index.html");
const outputPath = resolve(root, "index.html");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function safeJson(value) {
  return JSON.stringify(value).replaceAll("<", "\\u003c");
}

function buildServiceCards() {
  return serviceGroups
    .map((group, index) => {
      const number = String(index + 1).padStart(2, "0");
      const styles = group.styles
        .map((style) => `<li>${escapeHtml(style)}</li>`)
        .join("\n");
      const message = createWhatsAppUrl(`Olá, Rebeca! Quero conversar sobre ${group.title}: ${group.styles.join(", ")}.`);
      return `
        <article class="service-card">
          <div class="service-card__top"><span>${number}</span><span class="service-card__rule" aria-hidden="true"></span></div>
          <h3>${escapeHtml(group.title)}</h3>
          <ul>${styles}</ul>
          <a href="${escapeHtml(message)}" target="_blank" rel="noopener noreferrer">Consultar este grupo <span aria-hidden="true">↗</span></a>
        </article>`;
    })
    .join("\n");
}

function buildPriceRows() {
  return serviceGroups
    .flatMap((group) => group.styles)
    .map((style) => `<tr><th scope="row">${escapeHtml(style)}</th><td>R$ [PREENCHER]</td><td>[PREENCHER]</td></tr>`)
    .join("\n");
}

function buildAdditionalServices() {
  return additionalServices
    .map((service) => `<li><span>${escapeHtml(service)}</span><strong>R$ [PREENCHER]</strong></li>`)
    .join("\n");
}

function buildGalleryCards() {
  return galleryItems
    .map((item, index) => {
      const number = String(index + 1).padStart(2, "0");
      const message = createWhatsAppUrl(`Olá, Rebeca! Gostaria de conversar sobre ${item.question}.`);
      return `
        <article class="work-card" data-category="${escapeHtml(item.category)}">
          <button class="work-card__open" type="button" data-gallery-open="${index}" aria-label="Ampliar foto: ${escapeHtml(item.title)}">
            <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt)}" width="1368" height="2048" loading="lazy" decoding="async" />
            <span class="work-card__number" aria-hidden="true">${number}</span>
            <span class="work-card__open-label">Ampliar foto</span>
          </button>
          <div class="work-card__caption">
            <div><span>${escapeHtml(item.categoryLabel)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p></div>
            <a href="${escapeHtml(message)}" target="_blank" rel="noopener noreferrer" aria-label="Conversar com Rebeca sobre ${escapeHtml(item.title)} pelo WhatsApp">↗</a>
          </div>
        </article>`;
    })
    .join("\n");
}

function buildFaq() {
  return faqItems
    .map(
      (item, index) => `
        <details class="faq-item">
          <summary><span>${String(index + 1).padStart(2, "0")}</span><strong>${escapeHtml(item.question)}</strong><b aria-hidden="true">+</b></summary>
          <div class="faq-item__answer"><p>${escapeHtml(item.answer)}</p></div>
        </details>`,
    )
    .join("\n");
}

const schema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: site.brand,
  email: site.email,
  areaServed: {
    "@type": "City",
    name: site.location.city,
    containedInPlace: {
      "@type": "State",
      name: site.location.state,
      containedInPlace: {
        "@type": "Country",
        name: site.location.country,
      },
    },
  },
  sameAs: [site.instagram.url],
  knowsAbout: [...serviceGroups.flatMap((group) => group.styles), ...additionalServices],
};

const replacements = {
  "{{TITLE}}": escapeHtml(site.seo.title),
  "{{DESCRIPTION}}": escapeHtml(site.seo.description),
  "{{KEYWORDS}}": escapeHtml(site.seo.keywords.join(", ")),
  "{{HERO_IMAGE}}": escapeHtml(site.heroImage.src),
  "{{HERO_ALT}}": escapeHtml(site.heroImage.alt),
  "{{ABOUT_IMAGE}}": escapeHtml(site.aboutImage.src),
  "{{ABOUT_ALT}}": escapeHtml(site.aboutImage.alt),
  "{{ABOUT_SECOND_IMAGE}}": escapeHtml(site.aboutImageSecondary.src),
  "{{ABOUT_SECOND_ALT}}": escapeHtml(site.aboutImageSecondary.alt),
  "{{CONTACT_IMAGE}}":  escapeHtml(site.contactImage.src),
  "{{CONTACT_ALT}}": escapeHtml(site.contactImage.alt),
  "{{BIO_PHRASE}}": escapeHtml(site.bioPhrase),
  "{{CITY}}": escapeHtml(site.location.city),
  "{{STATE}}": escapeHtml(site.location.state),
  "{{EMAIL}}": escapeHtml(site.email),
  "{{INSTAGRAM_URL}}": escapeHtml(site.instagram.url),
  "{{WHATSAPP_GENERAL}}": escapeHtml(createWhatsAppUrl()),
  "{{SERVICES_HTML}}": buildServiceCards(),
  "{{PRICES_HTML}}": buildPriceRows(),
  "{{EXTRAS_HTML}}": buildAdditionalServices(),
  "{{GALLERY_HTML}}": buildGalleryCards(),
  "{{FAQ_HTML}}": buildFaq(),
  "{{JSON_LD}}": safeJson(schema),
};

let html = await readFile(templatePath, "utf8");
for (const [token, replacement] of Object.entries(replacements)) {
  if (!html.includes(token)) {
    throw new Error(`Template token ausente: ${token}`);
  }
  html = html.replaceAll(token, replacement);
}
html = html.replace(/[ \t]+$/gm, "");
if (html.includes("{{")) {
  throw new Error("Há tokens sem substituição no template HTML.");
}
await writeFile(outputPath, html, "utf8");
console.log(`HTML estático gerado a partir dos módulos de conteúdo: ${outputPath}`);
