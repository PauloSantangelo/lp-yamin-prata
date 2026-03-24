import Image from "next/image";

const DOCTOR_IMAGE = "/images/yasmin/yasmin6.webp";

const SERVICES = [
  {
    title: "Consulta médica",
    desc: "Avaliação completa e orientação clínica com acompanhamento.",
    tag: "Consulta",
  },
  {
    title: "Consulta de rotina",
    desc: "Prevenção, check-up e organização do cuidado por fase da vida.",
    tag: "Rotina",
  },
  {
    title: "Ansiedade",
    desc: "Avaliação clínica e seguimento responsável dos sintomas.",
    tag: "Saúde mental",
  },
  {
    title: "Depressão",
    desc: "Investigação e acompanhamento com abordagem individualizada.",
    tag: "Saúde mental",
  },
  {
    title: "Hipertensão",
    desc: "Diagnóstico e controle com acompanhamento e orientações.",
    tag: "Crônicos",
  },
  {
    title: "Diabetes",
    desc: "Seguimento clínico com foco em controle e prevenção de complicações.",
    tag: "Crônicos",
  },
];

// Nomes e extensões validados conforme o seu print do Windows Explorer
const CONVENIOS = [
  { name: "SulAmérica", src: "/images/convenio/sulamerica.png" },
  { name: "APAS", src: "/images/convenio/logoapas.jpg" },
  { name: "Bradesco Saúde", src: "/images/convenio/bradescosaude.png" },
  { name: "CASSI", src: "/images/convenio/logo-cassi.png" },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-[#fcfaf9] py-16 md:py-28 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ================= Header da Seção ================= */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-start gap-4">
              <div 
                className="w-1 h-12 rounded-full" 
                style={{ background: "rgb(var(--brand))" }} 
              />
              <div>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[rgb(var(--fg))]">
                  Serviços <span className="font-serif italic text-[rgb(var(--brand))]">médicos</span>
                </h2>
                <p className="mt-3 text-slate-500 leading-relaxed font-light">
                  Atendimento clínico focado em prevenção, organização do cuidado 
                  e acompanhamento contínuo para sua saúde.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {["Consulta", "Rotina", "Crônicos", "Saúde mental"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-200 bg-white/50 px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold text-slate-500 transition-colors hover:border-[rgb(var(--brand)/0.3)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ================= Layout Principal: Foto + Cards ================= */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start mb-24 md:mb-32">
          
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-[rgb(var(--brand)/0.03)] rounded-[50px] blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
            
            <div className="relative overflow-hidden rounded-[35px] md:rounded-[50px] bg-white shadow-xl shadow-slate-200/50">
              <div className="relative aspect-[16/10] lg:aspect-[4/5] w-full">
                <Image
                  src={DOCTOR_IMAGE}
                  alt="Dra. Yasmin Prata Ribeiro"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <p className="text-lg font-medium">Dra. Yasmin Prata Ribeiro</p>
                <p className="text-xs opacity-80 font-light tracking-wide uppercase">Medicina de Família • Bauru</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {SERVICES.map((item) => (
                <div
                  key={item.title}
                  className="group relative rounded-[24px] border border-white bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60"
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[rgb(var(--brand))] bg-[rgb(var(--brand)/0.08)] px-2.5 py-1 rounded-lg">
                          {item.tag}
                        </span>
                        <div className="h-1.5 w-1.5 rounded-full bg-slate-200 group-hover:bg-[rgb(var(--brand))] transition-colors" />
                      </div>
                      <h3 className="text-base font-semibold text-slate-800 group-hover:text-[rgb(var(--brand))] transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500 font-light">
                        {item.desc}
                      </p>
                    </div>
                    
                    <div className="mt-6 flex items-center gap-2 pt-4 border-t border-slate-50">
                      <div className="w-1 h-1 rounded-full bg-[rgb(var(--brand)/0.4)]" />
                      <span className="text-[10px] text-slate-400 italic">
                        Avaliação individualizada
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-[rgb(var(--brand)/0.03)] border border-[rgb(var(--brand)/0.05)]">
              <p className="text-[11px] text-slate-500 leading-relaxed text-center md:text-left">
                <strong>Nota:</strong> A definição de exames e tratamentos ocorre exclusivamente 
                durante o ato médico, respeitando a autonomia e o histórico de cada paciente.
              </p>
            </div>
          </div>
        </div>

        {/* ================= Nova Subseção: Convênios para Reembolso ================= */}
        <div className="border-t border-slate-200 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-3">
              Documentação para Reembolso
            </h3>
            <p className="text-slate-500 font-light text-sm md:text-base">
              Emitimos nota fiscal detalhada para facilitar seu reembolso nos principais planos e associações:
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
            {CONVENIOS.map((logo) => (
              <div 
                key={logo.name} 
                className="relative w-24 h-10 md:w-32 md:h-14 transition-all duration-500 group"
              >
                <Image
                  src={logo.src}
                  alt={`Logo convênio ${logo.name}`}
                  fill
                  className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 mix-blend-multiply"
                  sizes="150px"
                />
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-medium border-t border-slate-100 pt-8 w-full text-center">
              Atendimento Particular • Bauru/SP
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}