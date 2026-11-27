export function initializeNavigation() {
  const header = document.querySelector("[data-site-header]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-primary-nav]");
  if (!header || !toggle || !nav) return;

  const menuLinks = [...nav.querySelectorAll('a[href^="#"]')];
  const media = window.matchMedia("(max-width: 900px)");
  header.classList.add("has-js");

  function setMenu(open, returnFocus = false) {
    const wasExpanded = toggle.getAttribute("aria-expanded") === "true";
    const isMobile = media.matches;
    const expanded = isMobile && open;
    toggle.setAttribute("aria-expanded", String(expanded));
    toggle.setAttribute("aria-label", expanded ? "Fechar menu" : "Abrir menu");
    nav.dataset.state = expanded ? "open" : "closed";
    if (!isMobile) nav.dataset.state = "desktop";
    if (returnFocus && wasExpanded) toggle.focus({ preventScroll: true });
  }

  toggle.addEventListener("click", () => {
    const currentlyOpen = toggle.getAttribute("aria-expanded") === "true";
    setMenu(!currentlyOpen);
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const wasExpanded = toggle.getAttribute("aria-expanded") === "true";
      setMenu(false);
      if (wasExpanded) {
        window.requestAnimationFrame(() => toggle.focus({ preventScroll: true }));
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false, true);
  });

  const handleBreakpoint = () => setMenu(false);
  media.addEventListener?.("change", handleBreakpoint);

  const sectionLinks = menuLinks
    .map((link) => ({ link, section: document.querySelector(link.getAttribute("href")) }))
    .filter(({ section }) => section);

  function setCurrent(id) {
    sectionLinks.forEach(({ link }) => {
      const current = link.hash === `#${id}`;
      if (current) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top);
        if (visible[0]) setCurrent(visible[0].target.id);
      },
      { rootMargin: "-22% 0px -68% 0px", threshold: 0 },
    );
    sectionLinks.forEach(({ section }) => observer.observe(section));
  }

  setMenu(false);
}
