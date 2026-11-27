// gsap, ScrollTrigger e Lenis são carregados como scripts globais em assets/vendor/
// para o site funcionar sem build (Live Server, GitHub Pages ou qualquer hospedagem estática).
const { gsap, ScrollTrigger, Lenis } = window;

export function initializeMotion() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion || !gsap || !ScrollTrigger || !Lenis) return;

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 0.82,
    smoothWheel: true,
    anchors: true,
  });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  const entrance = gsap.timeline({ defaults: { ease: "power3.out" } });
  entrance
    .from("[data-hero-copy] .eyebrow", { autoAlpha: 0, y: 12, duration: 0.48 })
    .from("[data-hero-copy] h1", { autoAlpha: 0, y: 24, duration: 0.68 }, "-=0.22")
    .from("[data-hero-copy] .hero__lede, [data-hero-copy] .hero__actions", {
      autoAlpha: 0,
      y: 12,
      duration: 0.48,
      stagger: 0.08,
    }, "-=0.3")
    .from("[data-hero-image] img", { autoAlpha: 0, x: 22, duration: 0.82 }, "-=0.56");

  gsap.to("[data-hero-image] img", {
    y: -16,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 0.7,
    },
  });

  window.addEventListener("pagehide", () => {
    entrance.kill();
    lenis.destroy();
  }, { once: true });
}
