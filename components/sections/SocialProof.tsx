import Image from "next/image";
import { MessageCircle, Quote } from "lucide-react";

const LOGO = "/images/logo/3.png";
const CTA_IMAGE = "/images/yasmin/yasmin8.webp";

const WHATSAPP_PHONE = "5514991334579";
const WHATSAPP_MESSAGE = "Olá, gostaria de agendar uma consulta com a Dra. Yasmin Prata.";

export default function SocialProof() {
  const waHref = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section id="agendar" className="bg-[#fcfaf9] py-16 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= Coluna da Imagem ================= */}
          {/* Mobile: Ordem 1 (Topo) | Desktop: Ordem 2 (Direita) */}
          <div className="lg:col-span-5 relative flex justify-center order-1 lg:order-2">
            {/* Efeitos de Glow no Fundo */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[rgb(var(--brand)/0.1)] rounded-full blur-[80px]" />
            
            <div className="relative w-full max-w-[320px] md:max-w-[440px]">
              {/* Moldura da Foto */}
              <div className="relative aspect-[4/5] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.01]">
                <Image
                  src={CTA_IMAGE}
                  alt="Dra. Yasmin Prata Ribeiro"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Badge flutuante (Desktop) */}
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl border border-white/50 hidden sm:block">
                <div className="text-center leading-tight">
                  <span className="block text-xl md:text-2xl font-serif italic text-[rgb(var(--brand))]">Excelência</span>
                  <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-slate-400 font-bold">Em Atendimento</span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= Coluna de Conteúdo ================= */}
          {/* Mobile: Ordem 2 (Abaixo da foto) | Desktop: Ordem 1 (Esquerda) */}
          <div className="lg:col-span-7 z-10 flex flex-col items-start text-left order-2 lg:order-1">
            <div className="space-y-6 md:space-y-8 w-full">
              
              {/* Logo e Tagline */}
              <div className="flex flex-col items-start gap-4">
                <Image
                  src={LOGO}
                  alt="Dra. Yasmin Prata"
                  width={200}
                  height={50}
                  className="w-auto h-10 md:h-12 object-contain"
                />
                <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-[0.15em] font-bold bg-[rgb(var(--brand)/0.08)] text-[rgb(var(--brand))] rounded-full">
                  Medicina de Família • Bauru/SP
                </span>
              </div>

              {/* Título Responsivo */}
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-slate-800 leading-[1.15] tracking-tight">
                Cuidado médico que <br className="hidden md:block" />
                <span className="font-serif italic text-[rgb(var(--brand))]">prioriza sua história.</span>
              </h2>

              {/* Bloco de Missão em Destaque */}
              <div className="relative py-2 max-w-2xl">
                <Quote className="absolute -top-2 -left-4 w-8 h-8 text-[rgb(var(--brand))] opacity-10 rotate-180" />
                <div className="border-l-2 border-[rgb(var(--brand)/0.3)] pl-6">
                  <span className="text-[rgb(var(--brand))] font-sans font-bold uppercase text-[10px] tracking-widest block mb-2">
                    Minha Missão
                  </span>
                  <p className="text-slate-700 italic font-serif text-lg md:text-xl leading-relaxed">
                    "Oferecer um olhar atento ao ser humano, e não apenas aos exames ou diagnósticos. Através do método centrado na pessoa, o cuidado é construído de forma individualizada, valorizando a autonomia e a história de quem busca saúde integral em todas as fases da vida."
                  </p>
                </div>
              </div>

              {/* Texto de apoio e CTA */}
              <div className="pt-4 w-full md:w-auto">
                <p className="mb-6 max-w-lg text-base md:text-lg text-slate-500 leading-relaxed font-light">
                  Agende uma avaliação individualizada e inicie um acompanhamento focado na sua saúde e qualidade de vida.
                </p>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex w-full md:w-auto items-center justify-center gap-3 overflow-hidden rounded-full bg-[rgb(var(--brand))] px-8 py-4 md:py-5 text-sm font-semibold text-white transition-all hover:bg-[rgb(var(--brand)/0.9)] hover:shadow-xl hover:shadow-[rgb(var(--brand)/0.2)] active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  <span>Agendar Consulta agora</span>
                </a>
                
                <p className="mt-4 text-[10px] text-slate-400 uppercase tracking-widest">
                  *A consulta médica é individualizada e presencial.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}