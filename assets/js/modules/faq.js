export function initializeFaq() {
  const items = [...document.querySelectorAll("[data-faq-list] details")];
  items.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      items.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
}
