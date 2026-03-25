"use client";

import { MessageCircle, MapPin, Clock, Building2 } from "lucide-react";

const WHATSAPP_PHONE = "5514991334579";
const WHATSAPP_MESSAGE = "Olá, gostaria de agendar uma consulta com a Dra. Yasmin Prata.";

export default function Contact() {
  const waHref = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section id="contato" className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[rgb(var(--brand))] opacity-80">Contato</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-light text-slate-800 leading-tight">
                Inicie seu <span className="font-serif italic text-[rgb(var(--brand))]">acompanhamento.</span>
              </h2>
            </div>

            <div className="grid gap-4">
              {/* Endereço e Referência */}
              <div className="flex items-start gap-4 p-5 rounded-3xl bg-[#fcfaf9] border border-slate-100 transition-colors hover:border-[rgb(var(--brand)/0.2)]">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white shadow-sm flex items-center justify-center text-[rgb(var(--brand))]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Espaço Saúde - Rede OneCare</p>
                  <div className="mt-1 text-xs text-slate-500 leading-relaxed">
                    <p>R. Ruy Mendes de Rosis, 1-125 - Jd. Infante Dom Henrique</p>
                    <p className="mt-1 text-[rgb(var(--brand))] font-medium">
                      Próximo ao Estacionamento do Bauru Shopping
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Infraestrutura: Estacionamento e Elevador */}
              <div className="flex items-center gap-4 p-5 rounded-3xl bg-[#fcfaf9] border border-slate-100 transition-colors hover:border-[rgb(var(--brand)/0.2)]">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white shadow-sm flex items-center justify-center text-[rgb(var(--brand))]">
                  <Building2 className="w-5 h-5" />
                </div>
                <p className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                  Estacionamento local e Elevador
                </p>
              </div>

              {/* Horário */}
              <div className="flex items-center gap-4 p-5 rounded-3xl bg-[#fcfaf9] border border-slate-100 transition-colors hover:border-[rgb(var(--brand)/0.2)]">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white shadow-sm flex items-center justify-center text-[rgb(var(--brand))]">
                  <Clock className="w-5 h-5" />
                </div>
                <p className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Segunda a Sexta, 08h às 18h</p>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href={waHref} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex w-full items-center justify-center gap-4 rounded-full bg-[rgb(var(--brand))] px-10 py-6 text-sm font-bold text-white transition-all hover:shadow-2xl hover:shadow-[rgb(var(--brand)/0.3)]"
              >
                <MessageCircle className="w-6 h-6 transition-transform group-hover:rotate-12" />
                <span>Falar no WhatsApp</span>
              </a>
              <p className="mt-4 text-[10px] text-slate-400 text-center uppercase tracking-[0.2em]">
                Atendimento Particular • Recibo para Reembolso
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="h-full min-h-[450px] w-full relative rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl border-8 border-[#fcfaf9]">
              <iframe
                title="Localização Espaço Saúde - Rede One Care"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.1) contrast(1.05)" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.134704253164!2d-49.06016142469904!3d-22.33054197966453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf6797a7803a65%3A0xc0768c7e0c490e63!2sR.%20Ruy%20Mendes%20de%20Rosis%2C%201-125%20-%20Jardim%20Infante%20Dom%20Henrique%2C%20Bauru%20-%20SP%2C%2017012-636!5e0!3m2!1spt-BR!2sbr!4v1715632485631!5m2!1spt-BR!2sbr" 
                className="absolute inset-0"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}