"use client";

import { useEffect, useState } from "react";

type Lang = "en" | "es";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = "/logo.png";

  const content = {
    en: {
      nav: {
        home: "Home",
        menu: "Menu",
        locations: "Locations",
        gallery: "Gallery",
        about: "About",
        contact: "Contact",
      },
      hero: {
        badge: "Thai Restaurant • Barcelona",
        title1: "Light, modern",
        title2: "and elegant dining.",
        text: "A bright luxury one-page website for Iberico Thai with premium presentation, clean structure, warm atmosphere, and quick access to menu, locations, and contact.",
        primary: "View Menu",
        secondary: "Find Us",
        stat1: "2 locations",
        stat2: "Fresh dishes",
        stat3: "Modern Thai style",
      },
      intro: {
        badge: "Welcome",
        title: "A bright and refined restaurant experience.",
        text: "Fresh Thai cuisine, beautiful presentation, warm hospitality, and a clean modern atmosphere designed to feel premium but still inviting.",
      },
      menu: {
        badge: "Menu",
        title: "Popular dishes & drinks",
        text: "Use this section for signature dishes, bestsellers, and drinks. You can later replace these placeholders with your real menu items or connect your PDF menu.",
        items: [
          {
            title: "Pad Thai",
            text: "Classic stir-fried noodles with fresh ingredients and elegant presentation.",
          },
          {
            title: "Thai Curry",
            text: "Rich, creamy curry with balanced spice and authentic homemade taste.",
          },
          {
            title: "Signature Drinks",
            text: "Cocktails and fresh drinks that complete a stylish dining experience.",
          },
        ],
        button: "Open Full Menu",
      },
      locations: {
        badge: "Locations",
        title: "Visit Iberico Thai in Barcelona",
        text: "Present both places clearly so customers can quickly choose their preferred location.",
        first: {
          name: "Iberico & Thai",
          desc: "Family-owned Thai restaurant near the main train station.",
          address: "Carrer d’Entença 140, Barcelona",
          hours: "Open daily 10:00 – 00:00",
          phone: "+34 931 895 352",
        },
        second: {
          name: "Tropical Bar & Grill",
          desc: "Family-run Thai street food near Sagrada Familia.",
          address: "C/ de Padilla, 288, Eixample, 08025 Barcelona",
          hours: "Open daily 10:00 – 20:00",
          phone: "+34 688 583 766",
        },
        cta: "Open Map",
      },
      gallery: {
        badge: "Gallery",
        title: "Food & atmosphere",
        text: "Replace these placeholders with real restaurant photos, plated dishes, drinks, and interior moments.",
      },
      about: {
        badge: "About",
        title: "Authentic Thai recipes with a premium presentation",
        text1: "This template is designed for a restaurant that wants a stronger online presence with a bright, elegant, and modern visual identity.",
        text2: "The structure stays simple: strong visuals, clear menu access, direct contact, and beautiful location presentation.",
        points: [
          "Fresh ingredients",
          "Elegant plating",
          "Warm hospitality",
          "Modern atmosphere",
        ],
      },
      contact: {
        badge: "Contact",
        title: "Reserve, ask, or say hello",
        text: "Keep contact simple and premium with direct actions for menu, phone, and location.",
        menuBtn: "Open Menu PDF",
        phoneBtn: "Call Now",
        mapBtn: "Find Us",
      },
      footer: "© 2026 Iberico Thai. All rights reserved.",
    },
    es: {
      nav: {
        home: "Inicio",
        menu: "Menú",
        locations: "Ubicaciones",
        gallery: "Galería",
        about: "Sobre nosotros",
        contact: "Contacto",
      },
      hero: {
        badge: "Restaurante tailandés • Barcelona",
        title1: "Elegancia moderna,",
        title2: "clara y luminosa.",
        text: "Una web de una sola página, luminosa y premium, para Iberico Thai, con una presentación moderna, estructura limpia y acceso rápido al menú, ubicaciones y contacto.",
        primary: "Ver menú",
        secondary: "Cómo llegar",
        stat1: "2 ubicaciones",
        stat2: "Platos frescos",
        stat3: "Estilo thai moderno",
      },
      intro: {
        badge: "Bienvenidos",
        title: "Una experiencia gastronómica luminosa y refinada.",
        text: "Cocina tailandesa fresca, presentación cuidada, hospitalidad cálida y un ambiente moderno pensado para sentirse premium pero acogedor.",
      },
      menu: {
        badge: "Menú",
        title: "Platos y bebidas populares",
        text: "Usa esta sección para platos estrella, favoritos y bebidas. Después puedes sustituir estos textos por tu menú real o conectar tu PDF.",
        items: [
          {
            title: "Pad Thai",
            text: "Fideos salteados clásicos con ingredientes frescos y presentación elegante.",
          },
          {
            title: "Curry Thai",
            text: "Curry cremoso, intenso y equilibrado con sabor auténtico y casero.",
          },
          {
            title: "Bebidas especiales",
            text: "Cócteles y bebidas frescas para completar una experiencia cuidada.",
          },
        ],
        button: "Abrir menú completo",
      },
      locations: {
        badge: "Ubicaciones",
        title: "Visita Iberico Thai en Barcelona",
        text: "Presenta ambos locales claramente para que el cliente elija rápido su ubicación preferida.",
        first: {
          name: "Iberico & Thai",
          desc: "Restaurante tailandés familiar cerca de la estación principal.",
          address: "Carrer d’Entença 140, Barcelona",
          hours: "Abierto todos los días 10:00 – 00:00",
          phone: "+34 931 895 352",
        },
        second: {
          name: "Tropical Bar & Grill",
          desc: "Thai street food familiar cerca de Sagrada Familia.",
          address: "C/ de Padilla, 288, Eixample, 08025 Barcelona",
          hours: "Abierto todos los días 10:00 – 20:00",
          phone: "+34 688 583 766",
        },
        cta: "Abrir mapa",
      },
      gallery: {
        badge: "Galería",
        title: "Comida y ambiente",
        text: "Sustituye estos espacios por fotos reales del restaurante, platos, bebidas e interior.",
      },
      about: {
        badge: "Sobre nosotros",
        title: "Recetas tailandesas auténticas con presentación premium",
        text1: "Esta plantilla está diseñada para un restaurante que quiere una presencia online más fuerte con una identidad visual luminosa, elegante y moderna.",
        text2: "La estructura se mantiene simple: buenas fotos, acceso claro al menú, contacto directo y presentación bonita de las ubicaciones.",
        points: [
          "Ingredientes frescos",
          "Presentación elegante",
          "Hospitalidad cálida",
          "Ambiente moderno",
        ],
      },
      contact: {
        badge: "Contacto",
        title: "Reserva, pregunta o saluda",
        text: "Mantén el contacto simple y premium con accesos directos al menú, teléfono y ubicación.",
        menuBtn: "Abrir menú PDF",
        phoneBtn: "Llamar ahora",
        mapBtn: "Cómo llegar",
      },
      footer: "© 2026 Iberico Thai. Todos los derechos reservados.",
    },
  };

  const current = content[lang];

  const galleryImages = ["/food1.jpg", "/food2.jpg", "/food3.jpg", "/food4.jpg"];

  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#1d1d1d] selection:bg-[#d8b36a] selection:text-black">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          background: linear-gradient(180deg, #fcfaf6 0%, #f5efe5 100%);
        }
        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          animation: fadeUp 0.8s ease forwards;
        }
        .fade-up-delay-2 {
          opacity: 0;
          transform: translateY(24px);
          animation: fadeUp 0.8s ease forwards;
          animation-delay: 0.25s;
        }
        .glow-bg {
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 15% 15%, rgba(216, 179, 106, 0.18), transparent 26%),
            radial-gradient(circle at 85% 12%, rgba(255, 215, 160, 0.22), transparent 28%),
            radial-gradient(circle at 50% 90%, rgba(235, 205, 160, 0.18), transparent 32%);
          z-index: 0;
        }
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="glow-bg" />

      <header className="fixed top-0 z-50 w-full border-b border-[#cdb98c]/30 bg-[#fcfaf6]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#home" className="flex items-center gap-3">
            <img src={logoSrc} alt="Iberico Thai logo" className="h-10 w-10 rounded-full border border-[#d8c8a5] bg-white object-cover p-1" />
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8f6a27]">Iberico Thai</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-8 text-sm text-[#3f3a33]/75">
              <a href="#home" className="transition hover:text-black">{current.nav.home}</a>
              <a href="#menu" className="transition hover:text-black">{current.nav.menu}</a>
              <a href="#locations" className="transition hover:text-black">{current.nav.locations}</a>
              <a href="#gallery" className="transition hover:text-black">{current.nav.gallery}</a>
              <a href="#about" className="transition hover:text-black">{current.nav.about}</a>
              <a href="#contact" className="transition hover:text-black">{current.nav.contact}</a>
            </nav>

            <div className="flex items-center gap-2 rounded-full border border-[#d8c8a5] bg-white/70 p-1 shadow-sm">
              <button onClick={() => setLang("en")} className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${lang === "en" ? "bg-[#d8b36a] text-black" : "text-[#5b5348] hover:text-black"}`}>EN</button>
              <button onClick={() => setLang("es")} className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${lang === "es" ? "bg-[#d8b36a] text-black" : "text-[#5b5348] hover:text-black"}`}>ES</button>
            </div>
          </div>
        </div>
      </header>

      <section id="home" className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 lg:px-10">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2">
          <div className={mounted ? "fade-up" : "opacity-0"}>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-[#b8862f]">{current.hero.badge}</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight text-[#1c1a17] sm:text-6xl lg:text-7xl">
              {current.hero.title1}
              <br />
              {current.hero.title2}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#554d42]">{current.hero.text}</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#menu" className="rounded-full bg-[#d8b36a] px-7 py-4 text-sm font-medium text-black transition hover:scale-[1.03] hover:shadow-lg">{current.hero.primary}</a>
              <a href="#locations" className="rounded-full border border-[#d4c3a1] bg-white/70 px-7 py-4 text-sm font-medium text-[#2b2722] transition hover:border-[#b8862f] hover:text-[#b8862f]">{current.hero.secondary}</a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#dfd1b2] bg-white/75 p-4 shadow-sm">
                <p className="text-2xl font-semibold text-[#1c1a17]">2</p>
                <p className="mt-1 text-sm text-[#6a6256]">{current.hero.stat1}</p>
              </div>
              <div className="rounded-2xl border border-[#dfd1b2] bg-white/75 p-4 shadow-sm">
                <p className="text-2xl font-semibold text-[#1c1a17]">Fresh</p>
                <p className="mt-1 text-sm text-[#6a6256]">{current.hero.stat2}</p>
              </div>
              <div className="rounded-2xl border border-[#dfd1b2] bg-white/75 p-4 shadow-sm">
                <p className="text-2xl font-semibold text-[#1c1a17]">Modern</p>
                <p className="mt-1 text-sm text-[#6a6256]">{current.hero.stat3}</p>
              </div>
            </div>
          </div>

          <div className={mounted ? "fade-up-delay-2" : "opacity-0"}>
            <div className="relative overflow-hidden rounded-[2rem] border border-[#e3d7be] bg-white/75 p-4 shadow-[0_20px_70px_rgba(160,130,80,0.16)]">
              <img src="/hero-food.jpg" alt="Thai food" className="h-[520px] w-full rounded-[1.6rem] object-cover" />
              <div className="absolute inset-x-8 bottom-8 rounded-[1.5rem] border border-white/70 bg-[#fffaf1]/80 p-5 backdrop-blur-md shadow-lg">
                <p className="text-sm uppercase tracking-[0.25em] text-[#b8862f]">Iberico Thai</p>
                <p className="mt-3 text-lg text-[#423b32]">{current.intro.title}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="rounded-[2rem] border border-[#e3d7be] bg-white/75 p-8 shadow-sm sm:p-10">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#b8862f]">{current.intro.badge}</p>
          <h2 className="text-4xl font-semibold tracking-tight text-[#1c1a17] sm:text-5xl">{current.intro.title}</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5d5549]">{current.intro.text}</p>
        </div>
      </section>

      <section id="menu" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#b8862f]">{current.menu.badge}</p>
          <h2 className="text-4xl font-semibold tracking-tight text-[#1c1a17] sm:text-5xl">{current.menu.title}</h2>
          <p className="mt-5 text-lg leading-8 text-[#5d5549]">{current.menu.text}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {current.menu.items.map((item) => (
            <div key={item.title} className="rounded-[1.8rem] border border-[#e2d6bf] bg-white/80 p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
              <div className="mb-5 h-12 w-12 rounded-2xl bg-[#f3e3bb] ring-1 ring-[#d8b36a]/35" />
              <h3 className="text-2xl font-medium text-[#1c1a17]">{item.title}</h3>
              <p className="mt-4 leading-8 text-[#5d5549]">{item.text}</p>
            </div>
          ))}
        </div>

        <div c
