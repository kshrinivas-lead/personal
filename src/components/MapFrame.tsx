"use client";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Embeds a same-origin static page and sizes the iframe to its content, so the
 * embedded page never shows its own scrollbar. The page scrolls instead.
 *
 * Measures the embedded .layout block, not the document: the embedded body has
 * min-height: 100vh, and inside an iframe 100vh is the iframe's own height, so
 * measuring the document would never let the frame shrink.
 */
export function MapFrame({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(900);
  const cleanup = useRef<() => void>(() => {});

  const attach = useCallback(() => {
    cleanup.current();
    const frame = ref.current;
    const doc = frame?.contentDocument;
    const layout = doc?.getElementById("layout");
    if (!frame || !doc || !layout) return;

    const measure = () => {
      const h = layout.offsetTop + layout.offsetHeight + 8;
      setHeight((prev) => (Math.abs(prev - h) > 1 ? h : prev));
    };
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(layout);
    ro.observe(doc.documentElement);

    /* The detail panel opens at the top of the embedded layout. In a
       full-height frame that can be above the viewport, so bring it in. */
    const onClick = () => {
      window.setTimeout(() => {
        const panel = doc.getElementById("panel");
        if (!panel || !layout.classList.contains("has-sel")) return;
        if (window.innerWidth < 900) return;
        const top = frame.getBoundingClientRect().top + panel.getBoundingClientRect().top;
        if (top < 16) window.scrollBy({ top: top - 16, behavior: "smooth" });
      }, 60);
    };
    doc.addEventListener("click", onClick);

    cleanup.current = () => {
      ro.disconnect();
      doc.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    /* The frame can finish loading before hydration, so onLoad never fires. */
    if (ref.current?.contentDocument?.readyState === "complete") attach();
    return () => cleanup.current();
  }, [attach]);

  return (
    <iframe
      ref={ref}
      src={src}
      title={title}
      scrolling="no"
      onLoad={attach}
      style={{ height }}
      className="mb-16 block w-full rounded-lg border border-rule dark:border-rule-dk"
    />
  );
}
