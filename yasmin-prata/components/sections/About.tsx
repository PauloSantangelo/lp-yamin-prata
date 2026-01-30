"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { MessageCircle, GraduationCap, MapPin, Clock } from "lucide-react";

const DESKTOP_IMAGES = [
  "/images/yasmin/yasmin3.webp",
  "/images/yasmin/yasmin7.webp",
];

const MOBILE_IMAGES = [
  "/images/yasmin/yasmin2.webp",
  "/images/yasmin/yasmin5.webp",
  "/images/yasmin/yasmin8.webp",
];

const WHATSAPP_PHONE = "5514991334579";
const WHATSAPP_MESSAGE = "Olá, gostaria de agendar uma consulta com a Dra. Yasmin Prata.";

export default function About() {
  const [active, setActive] = useState(0);

  const waHref = useMemo(() => {
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const t = setInterval(() => {
      setActive((i) => (i + 1) % MOBILE_IMAGES.length);
    }, 4200);

    return () => clearInterval(t);
  }, []);

  return (
    <section id="sobre" className="bg-[#fcfaf9] py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-start">
          
          {/* ================= Coluna Visual ================= */}
          <div className="relative group">
            {/* Desktop: Duas fotos lado a lado com profundidade */}
            <div className="hidden md:grid grid-cols-2 gap-6">
              {DESKTOP_IMAGES.map((src, idx) => (
                <div
                  key={src}
                  className={`relative overflow-hidden rounded-[40px] shadow-2xl transition-transform duration-700 hover:scale-[1.02] ${
                    idx === 1 ? "mt-12" : "" // Efeito desalinhado editorial
                  }`}
                >
                  <div className="relative aspect-[4/5] w-full bg-slate-200">
                    <Image
                      src={src}
                      alt="Dra. Yasmin Prata"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile: Slideshow elegante */}
            <div className="md:hidden relative aspect-[4/5] overflow-hidden rounded-[35px] shadow-xl">
              {MOBILE_IMAGES.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt="Dra. Yasmin Prata"
                  fill
                  className={`absolute inset-0 object-cover transition-opacity duration-1000 ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="100vw"
                />
              ))}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {MOBILE_IMAGES.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 rounded-full transition-all ${i === active ? "w-6 bg-white" : "w-2 bg-white/40"}`} 
                  />
                ))}
              </div>
            </div>

            {/* Badge Editorial de Experiência */}
            <div className="absolute -bottom-10 -right-4 md:right-4 bg-white p-6 rounded-[30px] shadow-xl border border-slate-100 z-20 max-w-[200px] hidden sm:block">
              <div className="flex flex-col gap-1 text-center">
                <span className="text-3xl font-serif italic text-[rgb(var(--brand))] leading-none">12+ anos</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">De experiência clínica</span>
              </div>
            </div>
          </div>

          {/* ================= Coluna Conteúdo ================= */}
          <div className="flex flex-col items-start pt-4 lg:pt-8">
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[rgb(var(--brand))] mb-4 opacity-80">
              Trajetória e Propósito
            </span>
            
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 leading-tight tracking-tight mb-8">
              Sobre a <br />
              <span className="font-serif italic text-[rgb(var(--brand))] text-5xl md:text-6xl">Dra. Yasmin Prata</span>
            </h2>

            <div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg">
              <p>
                A Dra. Yasmin Prata Ribeiro é Médica de Família e Clínica Geral em 
                Bauru. Com especialização pela <strong>USP Ribeirão Preto</strong>, 
                sua conduta é pautada pelo rigor clínico e pela escuta atenta.
              </p>
              <p>
                Acredita que o cuidado médico deve ser integral e contínuo, conectando a prevenção 
                de doenças ao manejo de condições crônicas e ao cuidado com a saúde mental.
              </p>
            </div>

            {/* Grid de Atributos Minimalista */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 w-full">
              {[
                { icon: <GraduationCap className="w-5 h-5" />, label: "Formação USP-RP" },
                { icon: <Clock className="w-5 h-5" />, label: "12+ Anos de Prática" },
                { icon: <MapPin className="w-5 h-5" />, label: "Atendimento em Bauru" },
                { icon: <MessageCircle className="w-5 h-5" />, label: "Foco Humanizado" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[rgb(var(--brand))] group-hover:bg-[rgb(var(--brand))] group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Único e Premium */}
            <div className="mt-16 pt-8 border-t border-slate-200 w-full flex flex-col sm:flex-row items-center gap-6">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[rgb(var(--brand))] px-10 py-5 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-[rgb(var(--brand)/0.3)]"
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-12" />
                <span>Agendar Consulta</span>
              </a>
              
              <a href="#como-funciona" className="text-sm font-semibold text-slate-400 hover:text-[rgb(var(--brand))] transition-colors uppercase tracking-widest">
                Como funciona a consulta →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}