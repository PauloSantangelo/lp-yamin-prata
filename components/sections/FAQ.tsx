"use client";

import { useState } from "react";
import { MessageCircle, ChevronDown, Calendar, UserCheck, HeartPulse, MapPin } from "lucide-react";

const WHATSAPP_PHONE = "5514991334579";
const WHATSAPP_MESSAGE = "Olá, gostaria de agendar uma consulta com a Dra. Yasmin Prata.";

const STEPS = [
  {
    title: "Agendamento",
    desc: "O contato inicial é feito via WhatsApp. Nossa equipe organiza sua consulta no Espaço Saúde - Rede OneCare, em Bauru, com total conveniência.",
    icon: <Calendar className="w-6 h-6" />,
  },
  {
    title: "Consulta Individualizada",
    desc: "Um momento de escuta atenta e sem pressa. Avaliamos sua história de vida, exames e todas as medicações em uso para um diagnóstico integral.",
    icon: <UserCheck className="w-6 h-6" />,
  },
  {
    title: "Plano de Cuidado",
    desc: "Definimos juntos as metas de saúde, ajustes de tratamentos e o acompanhamento contínuo para manter seu bem-estar em equilíbrio.",
    icon: <HeartPulse className="w-6 h-6" />,
  },
];

const FAQS = [
  {
    q: "Qual a principal área de atuação da Dra. Yasmin Prata?",
    a: "Dra. Yasmin é Médica de Família com foco no cuidado de adultos e idosos. Possui expertise no manejo de diabetes, saúde na pós-menopausa e, especialmente, em casos complexos com múltiplas doenças (multimorbidades) e polifarmácia — garantindo que o uso de vários medicamentos seja seguro e coordenado.",
  },
  {
    q: "Onde o consultório está localizado em Bauru?",
    a: "Os atendimentos presenciais ocorrem na OneCare Espaço e Saúde, na Rua Ruy Mendes de Rosis, 1-125 (Jardim Infante Dom Henrique). Como referência, estamos localizados logo ao lado do estacionamento do Bauru Shopping.",
  },
  {
    q: "A clínica possui acessibilidade e estacionamento?",
    a: "Sim. A OneCare oferece estacionamento privativo no local e elevadores modernos, garantindo acessibilidade total e conforto para pacientes idosos ou com mobilidade reduzida.",
  },
  {
    q: "A Dra. atende Sul América, Bradesco Saúde, Cassi ou APAES?",
    a: "Os atendimentos são particulares para garantir o tempo e o rigor técnico que casos complexos exigem. No entanto, emitimos nota fiscal e toda a documentação necessária para que pacientes da Sul América, Bradesco Saúde, Cassi e APAES solicitem o reembolso junto aos seus planos.",
  },
  {
    q: "Qual a diferença entre Médico de Família e um Clínico Geral?",
    a: "O Médico de Família (MFC) passa por uma residência específica para cuidar da pessoa ao longo da vida. Diferente de um clínico geral, a Dra. Yasmin foca na prevenção personalizada e na coordenação de todos os seus tratamentos médicos de forma unificada.",
  },
  {
    q: "Como funciona o tratamento para Diabetes e Menopausa?",
    a: "O foco é o equilíbrio metabólico e hormonal. Realizamos o acompanhamento do diabetes tipo 2 e resistência insulínica, além do manejo dos sintomas da pós-menopausa, sempre priorizando a saúde cardiovascular.",
  },
  {
    q: "É possível realizar consultas por Telemedicina?",
    a: "Sim. Embora a primeira avaliação seja preferencialmente presencial para um exame físico completo em Bauru, consultas de retorno ou monitoramento de pacientes crônicos podem ser realizadas via telemedicina com total segurança.",
  },
];

export default function ProcessAndFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const waHref = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  // Toggle exclusivo: se já estiver aberto, fecha. Se não, abre o novo e fecha o anterior.
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Schema.org JSON-LD para SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };

  return (
    <section className="bg-[#fcfaf9] py-20 md:py-32 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* ================= SEÇÃO: COMO FUNCIONA ================= */}
        <div id="como-funciona" className="mb-24 md:mb-40">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[rgb(var(--brand))] opacity-80">A Jornada do Paciente</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-light text-slate-800 leading-tight">
              Um cuidado planejado <br/>
              <span className="font-serif italic text-[rgb(var(--brand))]">para você.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-slate-200 z-0" />
            
            {STEPS.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-white border border-slate-100 shadow-xl flex items-center justify-center text-[rgb(var(--brand))] mb-8 transition-all group-hover:bg-[rgb(var(--brand))] group-hover:text-white duration-500">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{step.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed text-sm md:text-base px-4">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SEÇÃO: FAQ ================= */}
        <div id="faq" className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 text-left sticky top-32">
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[rgb(var(--brand))] opacity-80">Dúvidas</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-light text-slate-800 leading-tight">
              Dúvidas <br />
              <span className="font-serif italic text-[rgb(var(--brand))]">frequentes</span>
            </h2>
            <p className="mt-6 text-slate-500 font-light leading-relaxed max-w-sm">
              Encontre respostas sobre atendimentos, localização e a especialidade da Dra. Yasmin Prata em Bauru.
            </p>
            <div className="mt-10">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[rgb(var(--brand))] font-bold text-sm uppercase tracking-widest group"
              >
                <span className="border-b-2 border-[rgb(var(--brand)/0.2)] pb-1 group-hover:border-[rgb(var(--brand))] transition-all">
                  Falar no WhatsApp
                </span>
                <MessageCircle className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((item, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`rounded-3xl border border-white bg-white/60 backdrop-blur-sm shadow-sm transition-all duration-300 ${isOpen ? 'shadow-xl shadow-slate-200/50' : ''}`}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="flex w-full cursor-pointer items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className={`text-sm md:text-base font-semibold transition-colors duration-300 ${isOpen ? 'text-[rgb(var(--brand))]' : 'text-slate-700'}`}>
                      {item.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 opacity-40 ${isOpen ? 'rotate-180 text-[rgb(var(--brand))] opacity-100' : ''}`} />
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="p-6 pt-0 text-sm md:text-base text-slate-500 font-light leading-relaxed border-t border-slate-100/50 mt-2">
                      {item.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}