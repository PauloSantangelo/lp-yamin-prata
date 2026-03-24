"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const CLINIC_IMAGES = [
  "/images/clinica/clinica1.webp",
  "/images/clinica/clinica2.webp",
  "/images/clinica/clinica3.webp",
  "/images/clinica/clinica4.webp",
];

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  const opts = useMemo(
    () => ({
      root: null,
      rootMargin: "0px 0px -15% 0px",
      threshold: 0.12,
      ...options,
    }),
    [options]
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (reduce) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry?.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, opts);

    observer.observe(el);
    return () => observer.disconnect();
  }, [opts]);

  return { ref, isInView };
}

export default function Clinic() {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section
      id="clinica"
      ref={ref}
      className="relative bg-[rgb(var(--bg))]"
      aria-labelledby="clinica-title"
    >
      <div className="lp-container py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-start lg:gap-16">
          {/* ================= Texto ================= */}
          <div
            className={[
              "transition-all duration-700 ease-out",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            <h2
              id="clinica-title"
              className="text-[clamp(1.75rem,3vw,2.25rem)] font-semibold tracking-tight text-[rgb(var(--fg))]"
            >
              A clínica
            </h2>

            <p className="mt-4 max-w-xl text-[rgb(var(--muted))] leading-relaxed">
              As consultas são realizadas no <strong>Espaço Saúde - Rede OneCare</strong>, 
              um ambiente projetado para oferecer o que há de mais moderno em infraestrutura, 
              aliando privacidade e conforto para um atendimento médico de excelência.
            </p>

            {/* Cards com mais respiro */}
            <div className="mt-10 grid gap-5">
              {[
                {
                  title: "Espaço Saúde - Rede OneCare",
                  desc: "Infraestrutura premium e localização privilegiada, garantindo segurança e bem-estar desde a sua chegada.",
                  highlight: true
                },
                {
                  title: "Ambiente",
                  desc: "Consultórios modernos, climatizados e organizados para favorecer uma escuta atenta e um diagnóstico preciso.",
                },
                {
                  title: "Atendimento",
                  desc: "Foco no cuidado individualizado, com tempo dedicado para entender seu histórico e planejar seu acompanhamento.",
                },
                {
                  title: "Conduta médica",
                  desc: "Prática baseada em evidências científicas atualizadas, com ética, transparência e respeito à sua autonomia.",
                },
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className={[
                    "rounded-2xl border bg-[rgb(var(--surface))] p-7 md:p-8",
                    "transition-all duration-700 ease-out",
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3",
                    item.highlight ? "border-[rgb(var(--brand)/0.3)] ring-1 ring-[rgb(var(--brand)/0.1)]" : ""
                  ].join(" ")}
                  style={{ transitionDelay: `${120 + idx * 90}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: "rgb(var(--brand))" }}
                    />
                    <p className={`text-sm font-semibold ${item.highlight ? "text-[rgb(var(--brand))]" : "text-[rgb(var(--fg))]"}`}>
                      {item.title}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted))]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= Visual ================= */}
          <div
            className={[
              "relative",
              "transition-all duration-700 ease-out",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
            style={{ transitionDelay: "140ms" }}
          >
            <div className="overflow-hidden rounded-3xl border bg-[rgb(var(--surface))] shadow-[var(--shadow)]">
              <div className="p-3 md:p-4">
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {CLINIC_IMAGES.map((src, index) => (
                    <div
                      key={src}
                      className="relative overflow-hidden rounded-2xl"
                    >
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={src}
                          alt={`Espaço Saúde Rede OneCare — ambiente ${index + 1}`}
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover"
                        />
                        <div
                          aria-hidden="true"
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.12))",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between border-t px-6 py-5">
                <p className="text-sm text-[rgb(var(--muted))]">
                  Localizado no Espaço Saúde - Rede OneCare, Bauru/SP.
                </p>
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: "rgb(var(--accent))" }}
                />
              </div>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -right-10 hidden h-32 w-32 rounded-full md:block"
              style={{ background: "rgb(var(--brand) / 0.14)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}