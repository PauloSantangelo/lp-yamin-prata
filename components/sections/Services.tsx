"use client";

import Image from "next/image";
import { 
  Stethoscope, 
  TrendingUp, 
  Pill, 
  Brain, 
  Leaf, 
  Venus, 
  UserRound, 
  UserCheck 
} from "lucide-react";

const DOCTOR_IMAGE = "/images/yasmin/yasmin6.webp";
const LOGO_PATH = "/images/logo/logo1.png";

const SERVICES = [
  {
    title: "Consultas de Rotina e Check-ups",
    desc: "Foco na prevenção e na manutenção da saúde em todas as fases da vida, com um olhar atento, integral e individualizado.",
    tag: "Prevenção",
    icon: <Stethoscope className="w-5 h-5" />,
  },
  {
    title: "Acompanhamento de Doenças Crônicas",
    desc: "Gestão contínua e coordenada de condições como diabetes, hipertensão e obesidade, priorizando a autonomia e a qualidade de vida.",
    tag: "Crônicos",
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    title: "Revisão e Otimização de Medicamentos",
    desc: "Análise criteriosa das medicações em uso (polifarmácia) e ajuste de prescrição de acordo com a realidade de cada pessoa.",
    tag: "Polifarmácia",
    icon: <Pill className="w-5 h-5" />,
  },
  {
    title: "Saúde Mental e Bem-estar",
    desc: "Cuidado e tratamento para ansiedade, depressão e burnout, acolhendo o sofrimento emocional com escuta qualificada.",
    tag: "Saúde Mental",
    icon: <Brain className="w-5 h-5" />,
  },
  {
    title: "Abordagem de Condições Frequentes",
    desc: "Tratamento de dores de cabeça, insônia, fibromialgia e sintomas respiratórios, unindo ciência ao entendimento da rotina.",
    tag: "Rotina",
    icon: <Leaf className="w-5 h-5" />,
  },
  {
    title: "Saúde da Mulher e Climatério",
    desc: "Acompanhamento preventivo, coleta de exames e manejo de sintomas da menopausa, respeitando as particularidades femininas.",
    tag: "Mulher",
    icon: <Venus className="w-5 h-5" />,
  },
  {
    title: "Cuidado à Pessoa Idosa",
    desc: "Avaliação focada no envelhecimento saudável, rastreamento cognitivo e manutenção da funcionalidade.",
    tag: "Geriatria",
    icon: <UserRound className="w-5 h-5" />,
  },
  {
    title: "Cuidado Centrado na Pessoa",
    desc: "Atendimento focado na experiência única do indivíduo, onde o plano terapêutico é construído de forma individualizada.",
    tag: "Individualizado",
    icon: <UserCheck className="w-5 h-5" />,
  },
];

const CONVENIOS = [
  { name: "SulAmérica", src: "/images/convenio/sulamerica.png" },
  { name: "APAS", src: "/images/convenio/logoapas.jpg" },
  { name: "Bradesco Saúde", src: "/images/convenio/bradescosaude.png" },
  { name: "CASSI", src: "/images/convenio/logo-cassi.png" },
];

export default function Services() {
  return (
    <section id="servicos" className="relative bg-[#fcfaf9] py-16 md:py-28 font-sans overflow-hidden">
      
      {/* 1. LOGO WATERMARK (Fundo da seção - Evidência sutil de marca) */}
      <div className="absolute top-1/4 -right-20 pointer-events-none opacity-[0.03] rotate-12 hidden lg:block">
        <Image src={LOGO_PATH} alt="" width={800} height={800} className="mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ================= Header ================= */}
        <div className="flex flex-col gap-6 mb-12 md:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-6">
              {/* Logo como elemento de ancoragem no Header */}
              <div className="shrink-0 hidden sm:block">
                <Image src={LOGO_PATH} alt="" width={60} height={60} className="mix-blend-multiply opacity-80" />
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-slate-800">
                  Serviços <span className="font-serif italic text-[rgb(var(--brand))]">médicos</span>
                </h2>
                <p className="mt-3 text-slate-500 leading-relaxed font-light text-base md:text-lg">
                  Abordagem integral da Medicina de Família, focada em todas as dimensões da saúde.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Grid Principal ================= */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start mb-20 md:mb-32">
          
          {/* Foto da Médica com Selo de Marca Flutuante */}
          <div className="lg:col-span-4 order-1 lg:order-2">
            <div className="lg:sticky lg:top-24">
              <div className="relative group">
                
                {/* 2. LOGO FLOATING BADGE (Selo de evidência sobre a imagem) */}
                <div className="absolute -top-6 -left-6 z-20 w-24 h-24 bg-white rounded-full p-4 shadow-xl border border-slate-50 flex items-center justify-center transition-transform group-hover:rotate-12 duration-700">
                  <Image src={LOGO_PATH} alt="Marca Dra. Yasmin" width={60} height={60} className="object-contain mix-blend-multiply" />
                </div>

                <div className="relative overflow-hidden rounded-[35px] md:rounded-[50px] bg-white shadow-xl shadow-slate-200/50">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={DOCTOR_IMAGE}
                      alt="Dra. Yasmin Prata Ribeiro"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 30vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                    <p className="text-lg font-medium">Dra. Yasmin Prata Ribeiro</p>
                    <p className="text-xs opacity-80 font-light tracking-wide uppercase italic">CRM-SP: 178037 | RQE: 79913</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid de Cards de Serviço */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <div className="grid gap-4 sm:grid-cols-2">
              {SERVICES.map((item) => (
                <div
                  key={item.title}
                  className="group relative rounded-[24px] border border-white bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-full bg-[rgb(var(--brand)/0.08)] text-[rgb(var(--brand))] flex items-center justify-center transition-colors group-hover:bg-[rgb(var(--brand))] group-hover:text-white">
                        {item.icon}
                      </div>
                      <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-slate-400">
                        {item.tag}
                      </span>
                    </div>
                    
                    <h3 className="text-base font-semibold text-slate-800 group-hover:text-[rgb(var(--brand))] transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="mt-3 text-sm leading-relaxed text-slate-500 font-light">
                      {item.desc}
                    </p>
                    
                    <div className="mt-auto pt-4 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[rgb(var(--brand)/0.3)]" />
                      <span className="text-[10px] text-slate-400 italic">Cuidado individualizado</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= Convênios ================= */}
        <div className="border-t border-slate-200 pt-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            <div className="text-left">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-[rgb(var(--brand))] mb-3">
                Documentação para Reembolso
              </h3>
              <p className="text-slate-500 font-light text-sm md:text-base">
                Emitimos nota fiscal detalhada para facilitar seu reembolso.
              </p>
            </div>
            
            {/* 3. LOGO FOOTER ACCENT (Assinatura final da seção) */}
            <div className="hidden md:block opacity-40 hover:opacity-100 transition-opacity">
               <Image src={LOGO_PATH} alt="" width={100} height={40} className="object-contain mix-blend-multiply" />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 md:gap-16">
            {CONVENIOS.map((logo) => (
              <div key={logo.name} className="relative w-24 h-10 md:w-32 md:h-14">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}