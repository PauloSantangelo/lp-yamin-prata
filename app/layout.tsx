"use client"; // Necessário para a lógica de scroll suave sem hash na URL

import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

const WHATSAPP_LINK =
  "https://wa.me/5514991334579?text=Olá, gostaria de agendar uma consulta com a Dra. Yasmin Prata Ribeiro."; //

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Função para scroll suave sem atualizar o hash (#) na URL
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Compensação do header fixo
        behavior: "smooth",
      });
      // Opcional: Atualiza a URL de forma "limpa" (ex: /sobre) se desejar via History API
      // window.history.pushState(null, "", `/${id}`); 
    }
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased text-slate-800 bg-white">
        
        {/* ================= HEADER PREMIUM ================= */}
        <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
            
            {/* Brand / Logo */}
            <a 
              href="/" 
              onClick={(e) => handleScroll(e, "topo")}
              className="flex items-center gap-3 group"
            >
              <Image 
                src="/images/logo/1.png" 
                alt="Logo Dra. Yasmin" 
                width={36} 
                height={36} 
                className="transition-transform group-hover:rotate-12" 
              />
              <div className="leading-tight hidden sm:block">
                <p className="text-sm font-bold tracking-tight">Dra. Yasmin Prata</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">Medicina de Família • Bauru</p>
              </div>
            </a>

            {/* Navegação Limpa */}
            <nav className="hidden lg:flex items-center gap-8">
              {[
                { name: "Sobre", id: "sobre" },
                { name: "Serviços", id: "servicos" },
                { name: "Como funciona", id: "como-funciona" },
                { name: "FAQ", id: "faq" },
                { name: "Contato", id: "contato" },
              ].map((link) => (
                <a
                  key={link.id}
                  href={`/${link.id}`}
                  onClick={(e) => handleScroll(e, link.id)}
                  className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500 hover:text-[rgb(var(--brand))] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Header */}
            <div className="flex items-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="hidden md:inline-flex items-center justify-center rounded-full bg-[rgb(var(--brand))] px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-[rgb(var(--brand)/0.2)]"
              >
                Agendar Consulta
              </a>
              {/* Menu Mobile Icon (Simplificado) */}
              <button className="lg:hidden p-2 text-slate-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
              </button>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main id="topo">{children}</main>

        {/* ================= FOOTER PREMIUM ================= */}
        <footer className="bg-[#fcfaf9] border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              
              {/* Coluna 1: Sobre */}
              <div className="space-y-6">
                <Image src="/images/logo/3.png" alt="Dra. Yasmin Prata" width={180} height={50} className="opacity-90" />
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  Acompanhamento médico integral em Bauru, com foco na organização do cuidado e 
                  continuidade terapêutica. Especialista pela USP Ribeirão Preto.
                </p>
              </div>

              {/* Coluna 2: Links Rápidos */}
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-slate-800">Navegação</p>
                <nav className="flex flex-col gap-4">
                  {["Sobre", "Serviços", "Como funciona", "Contato"].map((item) => (
                    <a 
                      key={item} 
                      href={`/${item.toLowerCase()}`}
                      onClick={(e) => handleScroll(e, item.toLowerCase())}
                      className="text-sm text-slate-500 hover:text-[rgb(var(--brand))] transition-colors w-fit"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Coluna 3: Atendimento */}
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-slate-800">Atendimento</p>
                <div className="space-y-4 text-sm text-slate-500 font-light">
                  <p className="flex items-start gap-3">
                    <span className="font-semibold text-slate-700">Local:</span>
                    Bauru • SP
                  </p>
                  <p>Consultas presenciais com hora marcada para garantir sua privacidade.</p>
                </div>
              </div>

              {/* Coluna 4: Contato Direto */}
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-slate-800">Fale Conosco</p>
                <div className="space-y-4">
                  <a href={WHATSAPP_LINK} className="flex items-center gap-3 text-sm text-slate-500 hover:text-[rgb(var(--brand))] transition-colors">
                    <span className="font-semibold text-slate-700">WhatsApp:</span> (14) 99133-4579
                  </a>
                  <p className="text-sm text-slate-500">
                    <span className="font-semibold text-slate-700">E-mail:</span> contato@dryasminprata.com.br
                  </p>
                </div>
              </div>
            </div>

            {/* Linha Final / Copyright */}
            <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-medium text-center md:text-left">
                <p>© {new Date().getFullYear()} Dra. Yasmin Prata Ribeiro • CRM/SP 000000</p>
                <p className="mt-1 italic">A avaliação e conduta médica são individualizadas.</p>
              </div>
              
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-400">
                <span>Desenvolvido por</span>
                <a href="https://vibemed.com.br" target="_blank" className="font-bold text-slate-600 hover:text-[rgb(var(--brand))] transition-colors">
                  Agência Vibemed
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}