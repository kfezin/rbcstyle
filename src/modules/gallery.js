import { galleryItems } from "../data/gallery.js";
import { createWhatsAppUrl } from "../data/site.js";

export function initializeGallery() {
  const grid = document.querySelector("[data-gallery-grid]");
  const filters = [...document.querySelectorAll("[data-gallery-filter]")];
  const count = document.querySelector("[data-gallery-count]");
  const dialog = document.querySelector("[data-lightbox]");
  const image = document.querySelector("[data-lightbox-image]");
  const title = document.querySelector("[data-lightbox-title]");
  const description = document.querySelector("[data-lightbox-description]");
  const contact = document.querySelector("[data-lightbox-contact]");
  const close = document.querySelector("[data-lightbox-close]");
  const previous = document.querySelector("[data-lightbox-prev]");
  const next = document.querySelector("[data-lightbox-next]");

  if (!grid || !dialog || !image || !title || !description) return;

  let activeCategory = "all";
  let activeIndex = 0;
  let opener = null;

  function visibleIndexes() {
    return galleryItems
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => activeCategory === "all" || item.category === activeCategory)
      .map(({ index }) => index);
  }

  function updateCount() {
    const visibleCount = grid.querySelectorAll(".work-card:not([hidden])").length;
    if (count) count.textContent = `${visibleCount} ${visibleCount === 1 ? "referência" : "referências"}`;
  }

  function applyFilter(category) {
    activeCategory = category;
    filters.forEach((button) => {
      const selected = button.dataset.galleryFilter === category;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });

    grid.querySelectorAll(".work-card").forEach((card) => {
      card.hidden = category !== "all" && card.dataset.category !== category;
    });
    updateCount();
  }

  function showItem(index) {
    const item = galleryItems[index];
    if (!item) return;

    activeIndex = index;
    image.src = item.src;
    image.alt = item.alt;
    title.textContent = item.title;
    description.textContent = item.description;
    if (contact) {
      contact.href = createWhatsAppUrl(`Olá, Rebeca! Gostaria de consultar sobre ${item.question}.`);
    }
  }

  function move(step) {
    const indexes = visibleIndexes();
    if (indexes.length < 2) return;
    const current = indexes.indexOf(activeIndex);
    const nextPosition = (current + step + indexes.length) % indexes.length;
    showItem(indexes[nextPosition]);
  }

  filters.forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.galleryFilter ?? "all"));
  });

  grid.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-gallery-open]");
    if (!trigger) return;

    const index = Number(trigger.dataset.galleryOpen);
    if (!Number.isInteger(index) || !galleryItems[index]) return;
    opener = trigger;
    showItem(index);
    dialog.showModal();
  });

  close?.addEventListener("click", () => dialog.close());
  previous?.addEventListener("click", () => move(-1));
  next?.addEventListener("click", () => move(1));

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("close", () => {
    const restoreTarget = opener;
    opener = null;
    requestAnimationFrame(() => restoreTarget?.focus({ preventScroll: true }));
  });

  document.addEventListener("keydown", (event) => {
    if (!dialog.open) return;
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "ArrowRight") move(1);
  });

  applyFilter("all");
}
