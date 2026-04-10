"use client";

import { useEffect, useState } from "react";

type Lang = "en" | "es";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Luxusní barevná paleta:
  // Pozadí: #F9F7F2 (Soft Ivory)
  // Text: #2D2926 (Deep Charcoal)
  // Akcent: #C5A358 (Muted Gold)
  // Sekundární text: #706B63 (Warm Grey)

  const content = {
    // ... (váš stávající content zůstává stejný)
  };

  const current = content[lang];

  return (
    <main className="min-h-screen bg-[#F9F7F2] text-[#2D2926] selection:bg-[#C5A358] selection:text-white font-serif">
      
      {/* --- NAVIGACE --- */}
      <nav className="fixed w-full z-50 bg-[#F9F7F2]/80 backdrop-blur-md border-b border-[#C5A358]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-light tracking-[0.2em] uppercase text-[#2D2926]">
            Iberico <span className="text-[#C5A358]">&</span> Thai
          </div>
          
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-[#706B63]">
            {Object.entries(current.nav).map(([key, label]) => (
              <a key={key} href={`#${key}`} className="hover:text-[#C5A358] transition-colors">
                {label}
              </a>
            ))}
          </div>

          <button 
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="border border-[#C5A358]/30 px-4 py-1 text-xs uppercase tracking-tighter hover:bg-[#C5A358] hover:text-white transition-all"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-4 py-1 mb-6 border border-[#C5A358] text-[#C5A358] text-[10px] uppercase tracking-[0.3em] rounded-full">
            {current.hero.badge}
          </span>
          <h1 className="text-5xl md:text-7xl font-light mb-4 leading-tight">
            {current.hero.title1} <br />
            <span className="italic font-serif text-[#C5A358]">{current.hero.title2}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[#706B63] text-lg mb-10 leading-relaxed">
            {current.hero.text}
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-[#2D2926] text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-[#C5A358] transition-all">
              {current.hero.primary}
            </button>
            <button className="border border-[#2D2926] px-10 py-4 uppercase tracking-widest text-sm hover:bg-[#2D2926] hover:text-white transition-all">
              {current.hero.secondary}
            </button>
          </div>
        </div>
      </section>

      {/* --- STATS / QUICK INFO --- */}
      <section className="border-y border-[#C5A358]/20 py-12 bg-white/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around gap-8 text-center">
          {[current.hero.stat1, current.hero.stat2, current.hero.stat3].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-[#C5A358] mb-2">✦</span>
              <span className="uppercase tracking-[0.2em] text-xs font-medium">{stat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- MENU PREVIEW --- */}
      <section id="menu" className="py-24 px-6 bg-[#F3F0E9]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-light uppercase tracking-widest mb-4">{current.menu.title}</h2>
          <div className="w-12 h-[1px] bg-[#C5A358] mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {current.menu.items.map((item, i) => (
            <div key={i} className="group cursor-default">
              <div className="overflow-hidden mb-6 bg-white aspect-[4/5] shadow-sm group-hover:shadow-xl transition-all duration-500">
                <div className="w-full h-full bg-[#EAE7E0] flex items-center justify-center text-[#C5A358] italic">
                  Image Placeholder
                </div>
              </div>
              <h3 className="text-xl mb-2 group-hover:text-[#C5A358] transition-colors">{item.title}</h3>
              <p className="text-[#706B63] text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-[#C5A358]/10 text-center">
        <p className="text-[#706B63] text-xs uppercase tracking-widest">
          {current.footer}
        </p>
      </footer>
    </main>
  );
}
