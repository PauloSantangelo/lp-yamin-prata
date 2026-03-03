import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import HeaderClient from "../components/layout/HeaderClient";

export const metadata: Metadata = {
  title: "Dra. Yasmin Prata Ribeiro | Médica de Família em Bauru",
  description:
    "Consulta médica em Bauru com a Dra. Yasmin Prata Ribeiro. Medicina de Família com acompanhamento integral e cuidado individualizado.",
  alternates: { canonical: "https://dryasminprata.com.br" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;
  const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const ADS_CONV_LABEL = process.env.NEXT_PUBLIC_ADS_WA_LABEL;

  const WHATSAPP_PHONE = "5514991334579";
  const WHATSAPP_MESSAGE =
    "Olá, gostaria de agendar uma consulta com a Dra. Yasmin Prata.";

  const waHref = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased text-slate-800 bg-white">

        {/* ================= GA4 ================= */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        )}

        {/* ================= Google Ads ================= */}
        {ADS_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ads-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ADS_ID}');
              `}
            </Script>
          </>
        )}

        {/* ================= Schema Médico (SEO Local Forte) ================= */}
        <Script
          id="schema-medico"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
          {
            "@context": "https://schema.org",
            "@type": "Physician",
            "name": "Dra. Yasmin Prata Ribeiro",
            "medicalSpecialty": "Medicina de Família",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bauru",
              "addressRegion": "SP",
              "addressCountry": "BR"
            },
            "telephone": "+55 14 99133-4579",
            "areaServed": "Bauru - SP"
          }
          `}
        </Script>

        {/* ================= Header ================= */}
        <HeaderClient waHref={waHref} />

        <main id="topo">{children}</main>

        {/* ================= Footer ================= */}
        <footer className="bg-[#fcfaf9] border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-medium text-center md:text-left">
                <p>© {new Date().getFullYear()} Dra. Yasmin Prata Ribeiro</p>
                <p className="mt-1 italic">A avaliação e conduta médica são individualizadas.</p>
              </div>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-400">
                <span>Desenvolvido por</span>
                <a
                  href="https://www.agenciavibemed.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-slate-600 hover:text-[rgb(var(--brand))] transition-colors"
                >
                  Agência Vibemed
                </a>
              </div>
            </div>
          </div>
        </footer>

        {/* ================= Conversão WhatsApp ================= */}
        <Script id="wa-conversion" strategy="afterInteractive">
          {`
            (function(){
              document.addEventListener('click', function(e){
                const target = e.target.closest('a[href^="https://wa.me/"]');
                if(!target) return;

                try {
                  if (typeof gtag === 'function') {
                    gtag('event', 'click_whatsapp', {
                      event_category: 'engagement',
                      event_label: 'whatsapp',
                      value: 1
                    });

                    const adsId = '${ADS_ID || ""}';
                    const label = '${ADS_CONV_LABEL || ""}';

                    if (adsId && label) {
                      gtag('event', 'conversion', {
                        send_to: adsId + '/' + label
                      });
                    }
                  }
                } catch(e){}
              });
            })();
          `}
        </Script>

      </body>
    </html>
  );
}