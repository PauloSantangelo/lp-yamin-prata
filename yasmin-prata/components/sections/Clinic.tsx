/*
  Clinic Section — A Clínica (mais respiro + animação ao rolar)
  ✅ Mais espaços em branco (layout mais premium)
  ✅ Cards com mais “air” e padding
  ✅ Efeito de entrada on-scroll (IntersectionObserver, leve e sem libs)
  ✅ Respeita prefers-reduced-motion (acessibilidade)
  ✅ Sem impacto relevante em performance

  Pastas:
  - Fotos: /public/images/clinica/clinica1.webp … clinica4.webp
*/

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
      {/* Espaço extra entre seções (mais premium) */}
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
              Um espaço pensado para oferecer privacidade, conforto e atenção
              médica qualificada — favorecendo consultas com escuta, tempo e
              critério clínico.
            </p>

            {/* Cards com mais respiro */}
            <div className="mt-10 grid gap-5">
              {[
                {
                  title: "Ambiente",
                  desc: "Consultórios reservados, climatizados e organizados para favorecer um atendimento calmo e focado.",
                },
                {
                  title: "Atendimento",
                  desc: "Consultas sem pressa, com avaliação completa, organização de informações e acompanhamento longitudinal.",
                },
                {
                  title: "Conduta médica",
                  desc: "Decisões baseadas em evidências, bom senso clínico e respeito às necessidades individuais.",
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
                  ].join(" ")}
                  style={{ transitionDelay: `${120 + idx * 90}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: "rgb(var(--brand))" }}
                    />
                    <p className="text-sm font-semibold text-[rgb(var(--fg))]">
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
              {/* Grid de imagens — com mais “moldura” */}
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
                          alt={`Clínica — ambiente ${index + 1}`}
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover"
                        />
                        {/* overlay delicado para “uniformizar” as fotos */}
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

              {/* Rodapé mais “luxo”, com respiro */}
              <div className="flex items-center justify-between border-t px-6 py-5">
                <p className="text-sm text-[rgb(var(--muted))]">
                  Clínica médica em Bauru voltada ao cuidado integral e contínuo.
                </p>
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: "rgb(var(--accent))" }}
                />
              </div>
            </div>

            {/* detalhe decorativo sutil (mais afastado) */}
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
