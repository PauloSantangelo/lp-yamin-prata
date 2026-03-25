"use client";

import { MessageCircle, MapPin, Clock, Building2, Navigation } from "lucide-react";

const WHATSAPP_PHONE = "5514991334579";
const WHATSAPP_MESSAGE = "Olá, gostaria de agendar uma consulta com a Dra. Yasmin Prata.";
const ADDRESS_LINK = "https://www.google.com/maps/dir/?api=1&destination=R.+Ruy+Mendes+de+Rosis,+1-125+-+Jd.+Infante+Dom+Henrique,+Bauru+-+SP";

export default function Contact() {
  const waHref = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section id="contato" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Centralizei e reduzi a largura do grid para o mapa não ocupar tudo */}
        <div className="grid lg:grid-cols-11 gap-12 items-center">
          
          {/* Coluna de Texto - Ocupa 5 colunas */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[rgb(var(--brand))] opacity-80">Localização</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-light text-slate-800 leading-tight">
                Onde estamos <br />
                <span className="font-serif italic text-[rgb(var(--brand))]">localizados.</span>
              </h2>
            </div>

            <div className="grid gap-3">
              <div className="flex items-start gap-4 p-5 rounded-3xl bg-[#fcfaf9] border border-slate-100 transition-all hover:shadow-md">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white shadow-sm flex items-center justify-center text-[rgb(var(--brand))]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Espaço Saúde - Rede OneCare</p>
                  <div className="mt-1 text-xs text-slate-500 leading-relaxed">
                    <p>R. Ruy Mendes de Rosis, 1-125 - Jd. Infante Dom Henrique</p>
                    <p className="mt-1 text-[rgb(var(--brand))] font-medium flex items-center gap-1">
                       Bauru/SP — Em frente ao Bauru Shopping
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#fcfaf9]/50 border border-slate-50">
                <Building2 className="w-4 h-4 text-slate-400" />
                <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Estacionamento e Elevador</p>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#fcfaf9]/50 border border-slate-50">
                <Clock className="w-4 h-4 text-slate-400" />
                <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Segunda a Sexta, 08h às 18h</p>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <a 
                href={waHref} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex w-full items-center justify-center gap-4 rounded-full bg-[rgb(var(--brand))] px-10 py-5 text-sm font-bold text-white transition-all hover:shadow-xl hover:shadow-[rgb(var(--brand)/0.2)]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Agendar via WhatsApp</span>
              </a>
              
              <a 
                href={ADDRESS_LINK}
                target="_blank"
                className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-400 hover:text-[rgb(var(--brand))] transition-colors font-bold"
              >
                <Navigation className="w-3 h-3" />
                Ver no Google Maps
              </a>
            </div>
          </div>

          {/* Coluna do Mapa - Reduzida para 6 colunas e com altura controlada */}
          <div className="lg:col-span-6">
            <div className="relative group overflow-hidden rounded-[40px] md:rounded-[50px] shadow-xl border-4 border-[#fcfaf9] bg-slate-100 max-h-[480px]">
              
              {/* Overlay para indicar que é clicável */}
              <a 
                href={ADDRESS_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center group-hover:bg-black/5 transition-all"
                title="Clique para abrir a rota no GPS"
              >
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-700">
                  <Navigation className="w-3 h-3 text-[rgb(var(--brand))]" />
                  Abrir Rota
                </div>
              </a>

              <iframe
                title="Localização"
                width="100%"
                height="480"
                style={{ border: 0, filter: "grayscale(0.1) contrast(1.02)" }}
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.1095392070114!2d-49.0620952!3d-22.3306917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf67eb2d8b584f%3A0xe54955b25327f315!2sEspa%C3%A7o%20Sa%C3%BAde%20-%20Rede%20OneCare!5e0!3m2!1spt-BR!2sbr!4v1715632485631!5m2!1spt-BR!2sbr" 
                className="w-full grayscale-[0.2]"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}