/**
 * Shared GSAP utilities for Órbita Digital.
 * Import gsap/ScrollTrigger from here to ensure registration happens once.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

export async function loadGSAP() {
  const [{ gsap: g }, { ScrollTrigger: ST }] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
  ]);
  g.registerPlugin(ST);
  return { gsap: g, ScrollTrigger: ST, prefersReduced, splitWords };
}

/** Returns true if the user prefers reduced motion. */
export function prefersReduced(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Splits direct children text nodes of `el` into individual word <span>s
 * with display:inline-block. Element children (colored spans, etc.) are
 * kept as-is but also get display:inline-block so GSAP can animate them.
 * <br> elements are skipped to avoid breaking line-break layout.
 * Returns the array of word elements to pass to gsap.fromTo().
 */
export function splitWords(el: HTMLElement): HTMLElement[] {
  const words: HTMLElement[] = [];

  Array.from(el.childNodes).forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      // Split text into non-whitespace tokens and whitespace tokens
      const parts = (node.textContent ?? "").match(/\S+|\s+/g) ?? [];
      const frag = document.createDocumentFragment();
      parts.forEach((part) => {
        if (/^\s+$/.test(part)) {
          // Preserve whitespace as plain text node (no animation)
          frag.appendChild(document.createTextNode(part));
        } else {
          const span = document.createElement("span");
          span.textContent = part;
          span.style.display = "inline-block";
          words.push(span);
          frag.appendChild(span);
        }
      });
      el.replaceChild(frag, node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const child = node as HTMLElement;
      // Skip <br> — don't animate line breaks
      if (child.tagName === "BR") return;
      // Colored spans, etc. — animate as a single "word"
      child.style.display = "inline-block";
      words.push(child);
    }
  });

  return words;
}
