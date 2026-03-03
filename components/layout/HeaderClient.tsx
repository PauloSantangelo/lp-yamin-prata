"use client";

import Image from "next/image";

export default function HeaderClient({ waHref }: { waHref: string }) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
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
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
              Medicina de Família • Bauru
            </p>
          </div>
        </a>

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

        <div className="flex items-center gap-4">
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-[rgb(var(--brand))] px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-[rgb(var(--brand)/0.2)]"
          >
            Agendar Consulta
          </a>
          <button className="lg:hidden p-2 text-slate-500" aria-label="Menu">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}