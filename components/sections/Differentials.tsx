/*
  Differentials Section — Reviews Google (premium)
  ✅ Fundo bege (surface)
  ✅ Desktop: 3 avaliações por vez (carrossel por páginas)
  ✅ Mobile: 1 avaliação por vez
  ✅ Estrelas reais (SVG) + "5,0"
  ✅ Sem datas
*/

"use client";

import { useEffect, useMemo, useState } from "react";

type Review = {
  name: string;
  text: string;
  rating: number; // 1..5
};

const REVIEWS: Review[] = [
  {
    name: "Luzia Rodrigues",
    rating: 5,
    text:
      "Gosto muito do atendimento. É atenciosa e acerta nas orientações — sempre me ajuda.",
  },
  {
    name: "Angela Franczez",
    rating: 5,
    text:
      "Excelente profissional. Extremamente interessada no paciente e muito agradável.",
  },
  {
    name: "Glaucia Zamariolli de Paiva",
    rating: 5,
    text:
      "Atendimento humanizado. Muito dedicada, competente e sempre atende minhas expectativas.",
  },
  {
    name: "Katia Meireles",
    rating: 5,
    text:
      "Olhar integral e respeito ao paciente. Orientações seguras e acompanhamento cuidadoso.",
  },
  {
    name: "Jose Paulino",
    rating: 5,
    text:
      "Profissional excelente, simpática e humana. Recomendo pela experiência e cuidado.",
  },
  {
    name: "Edilene Silvana",
    rating: 5,
    text:
      "Muito satisfeita. Enxerga o problema com clareza e orienta com simplicidade e cuidado.",
  },
  {
    name: "Aparecida Santos",
    rating: 5,
    text:
      "Médica atenciosa e humana. Atendimento excelente.",
  },
  {
    name: "Joana Santos Terapeuta",
    rating: 5,
    text:
      "Cuidado e empatia desde o primeiro contato. Me senti ouvida e bem cuidada.",
  },
  {
    name: "Ivan Freitas",
    rating: 5,
    text:
      "Muito satisfeito. Profissional humana e competente.",
  },
];

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      style={{
        fill: filled ? "rgb(var(--accent))" : "rgb(var(--border))",
      }}
    >
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} de 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} filled={i < rating} />
      ))}
    </div>
  );
}

function GoogleBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1.5 text-xs font-semibold backdrop-blur">
      <span
        aria-hidden="true"
        className="inline-flex h-5 w-5 items-center justify-center rounded-full"
        style={{ background: "rgb(var(--surface))" }}
      >
        <span className="text-[11px] font-bold">G</span>
      </span>
      Avaliações no Google
    </div>
  );
}

function chunk<T>(arr: T[], size: number) {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function Differentials() {
  const pages = useMemo(() => chunk(REVIEWS, 3), []);
  const [page, setPage] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  useEffect(() => {
    const reduce =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const t = setInterval(() => {
      // alterna página no desktop
      setPage((p) => (p + 1) % pages.length);
      // alterna item no mobile
      setMobileIndex((i) => (i + 1) % REVIEWS.length);
    }, 5200);

    return () => clearInterval(t);
  }, [pages.length]);

  const mobileReview = REVIEWS[mobileIndex];

  return (
    <section id="diferenciais" className="bg-[rgb(var(--surface))]">
      <div className="lp-container py-16 md:py-20">
        {/* Header premium */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[rgb(var(--fg))]">
              Credibilidade construída na prática
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted))]">
              Depoimentos públicos de pacientes no Google — destacando escuta,
              cuidado e segurança clínica no acompanhamento.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <GoogleBadge />
            <div className="hidden md:flex items-center gap-2 text-xs text-[rgb(var(--muted))]">
              <span className="font-semibold text-[rgb(var(--fg))]">5,0</span>
              <Stars rating={5} />
            </div>
          </div>
        </div>

        {/* Desktop: 3 por vez */}
        <div className="mt-10 hidden md:block">
          <div className="grid gap-5 md:grid-cols-3">
            {pages[page].map((r) => (
              <div
                key={`${r.name}-${r.text.slice(0, 12)}`}
                className="rounded-2xl border bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-semibold text-[rgb(var(--fg))]">
                    {r.name}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[rgb(var(--fg))]">
                      5,0
                    </span>
                    <Stars rating={r.rating} />
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--muted))]">
                  “{r.text}”
                </p>
              </div>
            ))}
          </div>

          {/* Controles + dots */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {pages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Página ${i + 1}`}
                  onClick={() => setPage(i)}
                  className="h-2.5 w-2.5 rounded-full transition"
                  style={{
                    background:
                      i === page
                        ? "rgb(var(--accent))"
                        : "rgb(var(--brand) / 0.22)",
                  }}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setPage((p) => (p - 1 + pages.length) % pages.length)
                }
                className="rounded-full border bg-white/70 px-3 py-2 text-xs font-semibold backdrop-blur transition hover:bg-white"
              >
                Anterior
              </button>
              <button
                type="button"
                onClick={() => setPage((p) => (p + 1) % pages.length)}
                className="rounded-full border bg-white/70 px-3 py-2 text-xs font-semibold backdrop-blur transition hover:bg-white"
              >
                Próxima
              </button>
            </div>
          </div>
        </div>

        {/* Mobile: 1 por vez */}
        <div className="mt-10 md:hidden">
          <div
            className="rounded-3xl border p-6"
            style={{
              background:
                "linear-gradient(180deg, rgb(var(--brand) / 0.10), rgb(var(--brand) / 0.06))",
              borderColor: "rgb(var(--brand) / 0.18)",
            }}
          >
            <div className="flex items-center justify-between gap-3">
              <GoogleBadge />
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[rgb(var(--fg))]">
                  5,0
                </span>
                <Stars rating={5} />
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-[rgb(var(--fg))]">
              “{mobileReview.text}”
            </p>

            <div className="mt-5 flex items-center justify-between">
              <p className="text-sm font-semibold text-[rgb(var(--fg))]">
                {mobileReview.name}
              </p>

              <div className="flex gap-2">
                {REVIEWS.slice(0, 6).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Avaliação ${i + 1}`}
                    onClick={() => setMobileIndex(i)}
                    className="h-2.5 w-2.5 rounded-full transition"
                    style={{
                      background:
                        i === mobileIndex
                          ? "rgb(var(--accent))"
                          : "rgb(var(--brand) / 0.22)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-[rgb(var(--muted))]">
          Depoimentos públicos extraídos das avaliações do Google.
        </p>
      </div>
    </section>
  );
}
