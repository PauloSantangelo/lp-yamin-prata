"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  MessageCircle,
  GraduationCap,
  MapPin,
  HeartPulse,
  ShieldCheck,
  FileCheck,
  BookOpen,
} from "lucide-react";

const DESKTOP_IMAGES = [
  "/images/yasmin/yasmin3.webp",
  "/images/yasmin/yasmin7.webp",
];

const MOBILE_IMAGES = [
  "/images/yasmin/yasmin2.webp",
  "/images/yasmin/yasmin5.webp",
  "/images/yasmin/yasmin8.webp",
];

const LOGO_CANDIDATES = [
  "/images/logo/logo1.png",
  "/images/logo/logo1.webp",
  "/images/logo/logo.png",
  "/logo.png",
];

const WHATSAPP_PHONE = "5514991334579";
const WHATSAPP_MESSAGE =
  "Olá, gostaria de agendar uma consulta com a Dra. Yasmin Prata.";
const CRM_RQE = "CRM-SP: 178037 | RQE: 79913";

function SafeLogo({
  alt,
  width = 140,
  height = 50,
  className = "",
}: {
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  const [srcIndex, setSrcIndex] = useState(0);
  const [hidden, setHidden] = useState(false);

  const currentSrc = LOGO_CANDIDATES[srcIndex];

  if (hidden) return null;

  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      unoptimized
      priority={false}
      className={className}
      onError={() => {
        if (srcIndex < LOGO_CANDIDATES.length - 1) {
          setSrcIndex((prev) => prev + 1);
        } else {
          setHidden(true);
        }
      }}
    />
  );
}

export default function About() {
  const [active, setActive] = useState(0);

  const waHref = useMemo(() => {
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
      WHATSAPP_MESSAGE
    )}`;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduce) return;

    const t = window.setInterval(() => {
      setActive((i) => (i + 1) % MOBILE_IMAGES.length);
    }, 4200);

    return () => window.clearInterval(t);
  }, []);

  return (
    <section
      id="sobre"
      className="bg-[#fcfaf9] py-16 md:py-28 overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative group order-1 lg:order-2">
            <div className="mb-8 lg:hidden opacity-90">
              <SafeLogo
                alt="Dra. Yasmin Prata Ribeiro"
                width={140}
                height={50}
                className="object-contain h-auto mix-blend-multiply"
              />
            </div>

            <div className="absolute -top-10 -left-10 z-0 hidden lg:block opacity-10 group-hover:opacity-25 transition-opacity duration-1000 pointer-events-none">
              <SafeLogo
                alt=""
                width={180}
                height={180}
                className="object-contain mix-blend-multiply"
              />
            </div>

            <div className="hidden md:grid grid-cols-2 gap-6 relative z-10">
              {DESKTOP_IMAGES.map((src, idx) => (
                <div
                  key={src}
                  className={`relative overflow-hidden rounded-[40px] shadow-2xl transition-all duration-700 hover:scale-[1.03] ${
                    idx === 1 ? "mt-12" : ""
                  }`}
                >
                  <div className="relative aspect-[3/4] w-full bg-slate-200">
                    <Image
                      src={src}
                      alt="Dra. Yasmin Prata Ribeiro"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      priority={idx === 0}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="md:hidden relative aspect-[4/5] overflow-hidden rounded-[35px] shadow-xl">
              {MOBILE_IMAGES.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt="Dra. Yasmin Prata Ribeiro"
                  fill
                  className={`absolute inset-0 object-cover transition-opacity duration-1000 ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="100vw"
                />
              ))}
            </div>

            <div className="absolute -bottom-6 -right-2 md:right-6 bg-white p-5 rounded-[28px] shadow-2xl border border-slate-50 z-20 max-w-[170px] hidden sm:block text-center">
              <span className="text-2xl font-serif italic text-[rgb(var(--brand))] leading-none">
                12+ anos
              </span>
              <span className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">
                Prática Clínica
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start order-2 lg:order-1">
            <div className="mb-8 hidden lg:block transition-opacity hover:opacity-100 opacity-90">
              <SafeLogo
                alt="Dra. Yasmin Prata"
                width={140}
                height={50}
                className="object-contain h-auto mix-blend-multiply"
              />
            </div>

            <span className="text-[10px] uppercase tracking-[0.35em] font-bold text-[rgb(var(--brand))] mb-4 opacity-70">
              Trajetória e Especialidade
            </span>

            <h2 className="text-3xl md:text-4xl font-light text-slate-800 leading-[1.15] tracking-tight mb-8">
              Sobre a <br />
              <span className="font-serif italic text-[rgb(var(--brand))] text-4xl md:text-5xl block mt-1">
                Dra. Yasmin Prata Ribeiro
              </span>
            </h2>

            <div className="space-y-5 text-slate-600 font-light leading-relaxed text-base lg:text-[1.05rem]">
              <p>
                Sou médica, especialista pela USP Ribeirão Preto em Medicina de
                Família e Comunidade . Com uma trajetória de mais de 12 anos
                dedicados à prática clínica, minha missão é oferecer um cuidado
                médico integral, humano e personalizado.
              </p>

              <p>
                Acredito no resgate do papel do "médico da família": aquele
                profissional de antigamente tão querido e resolutivo que atuava
                como referência para as necessidades de saúde dos seus pacientes,
                compreendendo que cuidar de gente vai muito além de tratar
                sintomas isolados. Minha especialidade é olhar para o indivíduo
                como um todo, garantindo o manejo das condições mais prevalentes
                na população com segurança, ciência e empatia.
              </p>

              <p>
                Além da prática assistencial, dedico-me à formação das novas
                gerações de médicos como professora do curso de Medicina da
                UNINOVE Bauru há 8 anos. Essa vivência acadêmica me mantém em
                constante atualização e alinhada com as melhores evidências
                científicas, que aplico diariamente em meu consultório para
                promover a saúde e o bem-estar dos meus pacientes.
              </p>

              <p>
                Se você busca um atendimento médico que prioriza a escuta, a
                prevenção e uma relação de confiança duradoura, será um prazer
                recebê-lo(a).
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mt-10 w-full">
              {[
                {
                  icon: <GraduationCap className="w-4 h-4" />,
                  label: "Residência USP-RP",
                },
                {
                  icon: <BookOpen className="w-4 h-4" />,
                  label: "Professora UNINOVE",
                },
                {
                  icon: <FileCheck className="w-4 h-4" />,
                  label: CRM_RQE,
                },
                {
                  icon: <HeartPulse className="w-4 h-4" />,
                  label: "Foco em Casos Complexos",
                },
                {
                  icon: <ShieldCheck className="w-4 h-4" />,
                  label: "Segurança Farmacológica",
                },
                {
                  icon: <MapPin className="w-4 h-4" />,
                  label: "One Care Espaço e Saúde",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[rgb(var(--brand))] group-hover:bg-[rgb(var(--brand))] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[13px] font-medium text-slate-700">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200 w-full flex flex-col sm:flex-row items-center gap-6">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[rgb(var(--brand))] px-10 py-5 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-[rgb(var(--brand)/0.2)]"
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-12" />
                <span>Agendar Consulta</span>
              </a>

              <a
                href="#servicos"
                className="text-xs font-bold text-slate-400 hover:text-[rgb(var(--brand))] transition-colors uppercase tracking-widest"
              >
                Conheça os serviços →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}