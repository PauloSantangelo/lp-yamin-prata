"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const LOGO = "/images/logo/3.png";
const HERO_IMAGE = "/images/yasmin/yasmin4.webp";
// Atualizado com os dados corretos
const CRM_RQE = "CRM-SP: 178037 | RQE: 79913";

/**
 * Hook para gerenciar animações de entrada baseadas no scroll
 */
function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry?.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, options || { threshold: 0.1 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
}

export default function Hero() {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section 
      ref={ref}
      className="relative overflow-hidden bg-[#fcfaf9] pt-12 pb-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Logo Mobile */}
        <div className={`flex justify-start mb-12 lg:hidden transition-all duration-1000 ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}>
          <Image
            src={LOGO}
            alt="Dra. Yasmin Prata"
            width={320}
            height={80}
            className="w-auto h-16 object-contain opacity-95"
            priority
          />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* 2. Coluna da Imagem */}
          <div className={`lg:col-span-5 order-2 lg:order-2 transition-all duration-1000 delay-300 ease-out ${
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[50px] md:rounded-[80px] shadow-2xl ring-1 ring-black/5 bg-slate-100">
                <Image
                  src={HERO_IMAGE}
                  alt="Dra. Yasmin Prata Ribeiro"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              
              {/* Badge de Experiência */}
              <div className="absolute -bottom-6 -right-4 bg-white px-7 py-5 rounded-[32px] shadow-xl border border-slate-100 hidden sm:block">
                <p className="text-2xl font-serif italic text-[rgb(var(--brand))] leading-none">12+ anos</p>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mt-2 text-center">Experiência</p>
              </div>
            </div>
          </div>

          {/* 3. Coluna de Texto */}
          <div className={`lg:col-span-7 order-3 lg:order-1 transition-all duration-1000 delay-500 ease-out ${
            isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
          }`}>
            <div className="flex flex-col items-start gap-10">
              
              {/* Logo Desktop */}
              <div className="hidden lg:block">
                <Image
                  src={LOGO}
                  alt="Dra. Yasmin Prata"
                  width={260}
                  height={70}
                  className="w-auto h-16 object-contain opacity-95"
                />
              </div>

              <div className="space-y-7">
                <div className="flex items-center gap-3">
                  <span className="px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] font-bold bg-[rgb(var(--brand)/0.08)] text-[rgb(var(--brand))] rounded-full">
                    Medicina de Família • Bauru
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-light text-slate-800 leading-[1.1] tracking-tight">
                  Cuidado médico focado na <br className="hidden lg:block" />
                  <span className="font-serif italic text-[rgb(var(--brand))]">sua história.</span>
                </h1>

                <p className="max-w-lg text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                  Dra. Yasmin Prata: Especialista pela USP focada no acompanhamento 
                  contínuo e na organização do seu cuidado médico integral.
                </p>
              </div>

              {/* Ações */}
              <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto pt-4">
                <a
                  href="#contato"
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-4 rounded-full bg-[rgb(var(--brand))] px-12 py-6 text-sm font-bold text-white transition-all hover:scale-[1.03] hover:shadow-2xl hover:shadow-[rgb(var(--brand)/0.3)] active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  <span>Agendar Consulta</span>
                </a>
                
                <a href="#sobre" className="text-[11px] font-bold text-slate-400 hover:text-[rgb(var(--brand))] transition-colors uppercase tracking-[0.25em] border-b-2 border-transparent hover:border-[rgb(var(--brand)/0.2)] pb-1">
                  Conheça a Dra. Yasmin →
                </a>
              </div>

              {/* Rodapé Hero com CRM e RQE atualizados */}
              <div className="w-full pt-10 flex flex-wrap items-center gap-5 border-t border-slate-200/60 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[rgb(var(--brand))]" />
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    {CRM_RQE}
                  </span>
                </div>
                <div className="h-5 w-px bg-slate-200 hidden sm:block" />
                <span className="text-[11px] text-slate-400 uppercase tracking-[0.2em] font-medium italic">
                  USP Ribeirão Preto
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}