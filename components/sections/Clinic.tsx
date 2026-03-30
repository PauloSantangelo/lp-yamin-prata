"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { MapPin, Car, CheckCircle2 } from "lucide-react";

const CLINIC_IMAGES = [
  "/images/clinica/clinica1.webp",
  "/images/clinica/clinica2.webp",
  "/images/clinica/clinica3.webp",
  "/images/clinica/clinica4.webp",
];

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  const opts = useMemo(() => ({
    root: null,
    rootMargin: "0px 0px -15% 0px",
    threshold: 0.12,
    ...options,
  }), [options]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
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
      className="relative bg-white py-20 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Layout invertido e diferenciado da seção Sobre */}
        <div className="grid gap-16 lg:grid-cols-12 items-center">
          
          {/* ================= Visual (Galeria Assimétrica) ================= */}
          {/* Ocupa 7 colunas no Desktop e vem PRIMEIRO no mobile */}
          <div className={`lg:col-span-7 order-1 lg:order-2 transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="grid grid-cols-12 gap-4">
              {/* Foto Principal */}
              <div className="col-span-12 md:col-span-8 relative aspect-[16/10] overflow-hidden rounded-[2rem] shadow-xl">
                <Image src={CLINIC_IMAGES[0]} alt="Clínica" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              {/* Foto 2 */}
              <div className="hidden md:block md:col-span-4 relative aspect-square overflow-hidden rounded-[2rem] shadow-lg">
                <Image src={CLINIC_IMAGES[1]} alt="Ambiente" fill className="object-cover" />
              </div>
              {/* Foto 3 e 4 (Menores embaixo) */}
              <div className="col-span-6 md:col-span-4 relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lg">
                <Image src={CLINIC_IMAGES[2]} alt="Consultório" fill className="object-cover" />
              </div>
              <div className="col-span-6 md:col-span-8 relative aspect-[16/6] overflow-hidden rounded-[2rem] shadow-lg">
                <Image src={CLINIC_IMAGES[3]} alt="Recepção" fill className="object-cover" />
              </div>
            </div>
            
            {/* Tag de Localização Flutuante diferenciada */}
            <div className="mt-6 flex flex-wrap gap-4 items-center justify-center lg:justify-start">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-sm text-slate-500 font-medium">
                <MapPin className="w-4 h-4 text-[rgb(var(--brand))]" />
                Em frente ao Bauru Shopping
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-sm text-slate-500 font-medium">
                <Car className="w-4 h-4 text-[rgb(var(--brand))]" />
                Estacionamento próprio
              </div>
            </div>
          </div>

          {/* ================= Conteúdo ================= */}
          {/* Ocupa 5 colunas no Desktop e vem DEPOIS no mobile */}
          <div className={`lg:col-span-5 order-2 lg:order-1 transition-all duration-1000 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="inline-block px-4 py-1 rounded-full bg-[rgb(var(--brand)/0.1)] text-[rgb(var(--brand))] text-[10px] uppercase tracking-[0.3em] font-bold mb-6">
              Onde cuidamos de você
            </div>
            
            <h2 id="clinica-title" className="text-4xl md:text-5xl font-light text-slate-800 leading-tight mb-8">
              Um ambiente de <br />
              <span className="font-serif italic text-[rgb(var(--brand))]">Bem-estar e Rigor</span>
            </h2>

            <p className="text-slate-600 font-light leading-relaxed text-lg mb-10">
              As consultas são realizadas no <strong>Espaço Saúde One Care</strong>, local de fácil acesso planejado para oferecer privacidade e conforto absoluto.
            </p>

            {/* Lista de diferenciais em formato de "Ticks" em vez de cards pesados */}
            <div className="space-y-4">
              {[
                "Infraestrutura moderna e acessível",
                "Consultórios climatizados",
                "Foco total em segurança e ética",
                "Ambiente acolhedor e privativo"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[rgb(var(--brand))] flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium text-sm">{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-3xl bg-slate-50 border border-dashed border-slate-200">
               <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-2">Diferencial</p>
               <p className="text-slate-600 text-sm leading-relaxed">
                 Pensamos na sua conveniência: nossa localização permite que você estacione com tranquilidade em nosso espaço exclusivo, sem custos adicionais.
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}