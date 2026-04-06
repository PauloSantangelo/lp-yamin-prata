import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import HeaderClient from "../components/layout/HeaderClient";

export const metadata: Metadata = {
  title: "Dra. Yasmin Prata Ribeiro | Médica de Família em Bauru",
  description:
    "Consulta médica em Bauru com a Dra. Yasmin Prata Ribeiro. Medicina de Família com acompanhamento integral e cuidado individualizado.",
  metadataBase: new URL("https://dryasminprata.com.br"),
  alternates: {
    canonical: "/",
  },
};

const GA_ID = "G-5G616ZQC0Q";
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const ADS_CONV_LABEL = process.env.NEXT_PUBLIC_ADS_WA_LABEL;

const WHATSAPP_PHONE = "5514991334579";
const WHATSAPP_MESSAGE =
  "Olá, gostaria de agendar uma consulta com a Dra. Yasmin Prata Ribeiro.";

const waHref = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-white text-slate-800 antialiased">
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_ID}');

            ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ""}
          `}
        </Script>

        {/* Schema SEO local */}
        <Script
          id="schema-physician"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            name: "Dra. Yasmin Prata Ribeiro",
            medicalSpecialty: "Medicina de Família",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bauru",
              addressRegion: "SP",
              addressCountry: "BR",
            },
            telephone: "+55 14 99133-4579",
            areaServed: "Bauru - SP",
            url: "https://dryasminprata.com.br",
          })}
        </Script>

        <HeaderClient waHref={waHref} />

        <main id="topo">{children}</main>

        <footer className="border-t border-slate-200 bg-[#fcfaf9]">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-slate-200 pt-8 md:flex-row">
              <div className="text-center text-[10px] font-medium uppercase tracking-widest text-slate-400 md:text-left">
                <p>© {new Date().getFullYear()} Dra. Yasmin Prata Ribeiro</p>
                <p className="mt-1 italic">
                  A avaliação e conduta médica são individualizadas.
                </p>
              </div>

              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-400">
                <span>Desenvolvido por</span>
                <a
                  href="https://www.agenciavibemed.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-slate-600 transition-colors hover:text-[rgb(var(--brand))]"
                >
                  Agência Vibemed
                </a>
              </div>
            </div>
          </div>
        </footer>

        {/* Evento de clique no WhatsApp */}
        <Script id="whatsapp-conversion" strategy="afterInteractive">
          {`
            (function () {
              document.addEventListener("click", function (e) {
                const target = e.target.closest('a[href^="https://wa.me/"]');
                if (!target) return;

                try {
                  if (typeof window.gtag === "function") {
                    window.gtag("event", "click_whatsapp", {
                      event_category: "engagement",
                      event_label: "whatsapp",
                      value: 1
                    });

                    const adsId = "${ADS_ID || ""}";
                    const label = "${ADS_CONV_LABEL || ""}";

                    if (adsId && label) {
                      window.gtag("event", "conversion", {
                        send_to: adsId + "/" + label
                      });
                    }
                  }
                } catch (error) {
                  console.error("Erro no rastreio do WhatsApp:", error);
                }
              });
            })();
          `}
        </Script>
      </body>
    </html>
  );
}