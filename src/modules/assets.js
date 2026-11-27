export function activateStoredImages(root = document) {
  const images = root.querySelectorAll("img[data-manus-src]");

  images.forEach((image) => {
    if (image.dataset.storageApplied === "true") return;

    const fallback = image.getAttribute("src");
    const storagePath = image.dataset.manusSrc;
    if (!fallback || !storagePath) return;

    image.dataset.storageApplied = "true";
    image.addEventListener(
      "error",
      () => {
        if (image.dataset.fallbackApplied === "true") return;
        image.dataset.fallbackApplied = "true";
        image.src = fallback;
      },
      { once: true },
    );
    image.src = storagePath;
  });
}
