"use client"; // Adicionado para evitar erro de componentes que usam estado no Next.js

import { useState } from "react";

const WHATSAPP_PHONE = "5514991334579";
const WHATSAPP_MESSAGE = "Olá, gostaria de agendar uma consulta com a Dra. Yasmin Prata.";

const STEPS = [
  {
    title: "Agendamento",
    desc: "O primeiro contato é feito via WhatsApp, onde nossa equipe organiza o melhor horário para sua consulta presencial em Bauru.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    ),
  },
  {
    title: "Consulta Individualizada",
    desc: "Um momento de escuta atenta, sem pressa, focado na sua história e na organização do seu cuidado médico integral.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    ),
  },
  {
    title: "Plano de Cuidado",
    desc: "Definimos juntos as condutas, exames e o acompanhamento contínuo necessário para manter sua saúde em equilíbrio.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    ),
  },
];

const FAQS = [
  {
    q: "A Dra. atende convênios médicos?",
    a: "Os atendimentos são estritamente particulares para garantir o tempo e a qualidade que um cuidado integral exige. Fornecemos recibo detalhado para que você possa solicitar o reembolso junto ao seu plano de saúde.",
  },
  {
    q: "Onde o consultório está localizado?",
    a: "Nosso espaço de atendimento presencial está localizado em Bauru/SP, estruturado para oferecer conforto e sigilo durante sua avaliação.",
  },
  {
    q: "A consulta é apenas para adultos?",
    a: "Como Médica de Família, a Dra. Yasmin possui formação para acompanhar pessoas em todas as fases da vida, desde a infância até a terceira idade, com foco em prevenção e rotina.",
  },
  {
    q: "É possível realizar teleconsulta?",
    a: "A primeira avaliação é preferencialmente presencial para um exame clínico detalhado. Consultas de retorno ou acompanhamentos específicos podem ser realizados via telemedicina, conforme a necessidade clínica.",
  },
];

export default function ProcessAndFAQ() {
  const waHref = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="bg-[#fcfaf9] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ================= COMO FUNCIONA ================= */}
        <div id="como-funciona" className="mb-24 md:mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[rgb(var(--brand))] opacity-80">Passo a Passo</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-light text-slate-800 leading-tight">
              Como funciona a <span className="font-serif italic text-[rgb(var(--brand))]">sua consulta</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
            {/* Linha conectora otimizada com h-px */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-slate-200 z-0" />
            
            {STEPS.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white border border-slate-100 shadow-xl flex items-center justify-center text-[rgb(var(--brand))] mb-8 transition-transform group-hover:scale-110 duration-500">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{step.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed text-sm md:text-base">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= FAQ ================= */}
        <div id="faq" className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 text-left">
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 leading-tight">
              Dúvidas <br />
              <span className="font-serif italic text-[rgb(var(--brand))]">frequentes</span>
            </h2>
            <p className="mt-6 text-slate-500 font-light leading-relaxed">
              Caso sua dúvida não esteja listada aqui, nossa equipe está pronta para 
              ajudar você através do atendimento no WhatsApp.
            </p>
            <div className="mt-10">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[rgb(var(--brand))] font-bold text-sm uppercase tracking-widest border-b-2 border-[rgb(var(--brand)/0.2)] pb-2 hover:border-[rgb(var(--brand))] transition-all"
              >
                Falar com a equipe →
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((item, idx) => (
              <details 
                key={idx} 
                className="group rounded-3xl border border-white bg-white/60 backdrop-blur-sm p-6 shadow-sm transition-all open:shadow-xl open:shadow-slate-200/50"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-800 group-open:text-[rgb(var(--brand))]">
                  <span className="text-sm md:text-base">{item.q}</span>
                  <span className="transition-transform group-open:rotate-180 opacity-50">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </span>
                </summary>
                <div className="mt-4 text-sm md:text-base text-slate-500 font-light leading-relaxed border-t border-slate-100 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}