import { activateStoredImages } from "./modules/assets.js";
import { initializeFaq } from "./modules/faq.js";
import { initializeGallery } from "./modules/gallery.js";
import { initializeNavigation } from "./modules/navigation.js";
import { initializeMotion } from "./modules/motion.js";

activateStoredImages();
initializeNavigation();
initializeGallery();
initializeFaq();
initializeMotion();

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
