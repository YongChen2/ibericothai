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
        badge: "Thai Street Food • Barcelona",
        title1: "Fresh Thai food.",
        title2: "Modern clean vibe.",
        text: "A modern one-page restaurant website for Iberico Thai with a premium dark style, strong first impression, and easy access to menu, locations, and contact.",
        primary: "View Menu",
        secondary: "Find Us",
        stat1: "2 locations",
        stat2: "Open daily",
        stat3: "Thai street food",
      },
      intro: {
        badge: "Welcome",
        title: "Two locations. One unforgettable taste.",
        text: "Fresh Thai street food and modern cuisine served in Barcelona with a warm family atmosphere, fast service, and homemade taste.",
      },
      menu: {
        badge: "Menu",
        title: "Popular dishes & drinks",
        text: "Use this section for your bestsellers, signatures, and quick categories. Replace the placeholders with your real menu items or connect PDF menu links.",
        items: [
          {
            title: "Pad Thai",
            text: "Classic stir-fried noodles with fresh ingredients and authentic Thai flavor.",
          },
          {
            title: "Thai Curry",
            text: "Creamy curry with rich aroma, balanced spice, and homemade taste.",
          },
          {
            title: "Signature Drinks",
            text: "Cocktails, fresh drinks, and tropical bar specials for a complete experience.",
          },
        ],
        button: "Open Full Menu",
      },
      locations: {
        badge: "Locations",
        title: "Visit Iberico Thai in Barcelona",
        text: "Show both places clearly so customers can quickly choose where to go.",
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
        text: "Replace these placeholders with your real food photos, restaurant interior, drinks, and signature dishes.",
      },
      about: {
        badge: "About",
        title: "Authentic Thai recipes made with care",
        text1: "This template is built for a restaurant that wants a stronger online presence with a modern premium look.",
        text2: "You can keep it simple: great photos, menu access, fast contact, and clear location information.",
        points: [
          "Fresh ingredients",
          "Fast service",
          "Homemade taste",
          "Friendly atmosphere",
        ],
      },
      contact: {
        badge: "Contact",
        title: "Reserve, ask, or say hello",
        text: "Use direct contact buttons or add a booking system later. This template keeps contact simple and clear.",
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
        badge: "Comida callejera tailandesa • Barcelona",
        title1: "Comida tailandesa fresca.",
        title2: "Estilo moderno y limpio.",
        text: "Una plantilla moderna de una sola página para Iberico Thai con estilo oscuro premium, buena primera impresión y acceso rápido al menú, ubicaciones y contacto.",
        primary: "Ver menú",
        secondary: "Cómo llegar",
        stat1: "2 ubicaciones",
        stat2: "Abierto todos los días",
        stat3: "Street food tailandés",
      },
      intro: {
        badge: "Bienvenidos",
        title: "Dos ubicaciones. Un sabor inolvidable.",
        text: "Comida callejera tailandesa fresca y cocina moderna en Barcelona con ambiente familiar, servicio rápido y sabor casero.",
      },
      menu: {
        badge: "Menú",
        title: "Platos y bebidas populares",
        text: "Usa esta sección para tus platos estrella, favoritos y categorías rápidas. Sustituye los textos por tu menú real o conecta enlaces al PDF.",
        items: [
          {
            title: "Pad Thai",
            text: "Fideos salteados clásicos con ingredientes frescos y sabor tailandés auténtico.",
          },
          {
            title: "Curry Thai",
            text: "Curry cremoso con aroma intenso, especias equilibradas y sabor casero.",
          },
          {
            title: "Bebidas especiales",
            text: "Cócteles, bebidas frescas y especiales tropicales para una experiencia completa.",
          },
        ],
        button: "Abrir menú completo",
      },
      locations: {
        badge: "Ubicaciones",
        title: "Visita Iberico Thai en Barcelona",
        text: "Muestra los dos locales de forma clara para que los clientes elijan rápido a dónde ir.",
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
        text: "Sustituye estos espacios por fotos reales de platos, interior del restaurante, bebidas y especialidades.",
      },
      about: {
        badge: "Sobre nosotros",
        title: "Recetas tailandesas auténticas hechas con cuidado",
        text1: "Esta plantilla está hecha para un restaurante que quiere una presencia online más fuerte con una imagen moderna y premium.",
        text2: "Puedes mantenerlo simple: grandes fotos, acceso al menú, contacto rápido e información clara de ubicación.",
        points: [
          "Ingredientes frescos",
          "Servicio rápido",
          "Sabor casero",
          "Ambiente agradable",
        ],
      },
      contact: {
        badge: "Contacto",
        title: "Reserva, pregunta o saluda",
        text: "Usa botones directos de contacto o añade un sistema de reservas más adelante. Esta plantilla mantiene el contacto simple y claro.",
        menuBtn: "Abrir menú PDF",
        phoneBtn: "Llamar ahora",
        mapBtn: "Cómo llegar",
      },
      footer: "© 2026 Iberico Thai. Todos los derechos reservados.",
    },
  };

  const current = content[lang];

  const galleryImages = [
    "/food1.jpg",
    "/food2.jpg",
    "/food3.jpg",
    "/food4.jpg",
  ];

  return (
    <main className="min-h-screen bg-[#060606] text-white selection:bg-[#d6a54a] selection:text-black">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          background: #060606;
        }
        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          animation: fadeUp 0.8s ease forwards;
        }
        .fade-up-delay-1 {
          opacity: 0;
          transform: translateY(24px);
          animation: fadeUp 0.8s ease forwards;
          animation-delay: 0.15s;
        }
        .fade-up-delay-2 {
          opacity: 0;
          transform: translateY(24px);
          animation: fadeUp 0.8s ease forwards;
          animation-delay: 0.3s;
        }
        .glow-bg {
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 20% 20%, rgba(214, 165, 74, 0.1), transparent 28%),
            radial-gradient(circle at 80% 10%, rgba(214, 165, 74, 0.08), transparent 24%),
            radial-gradient(circle at 50% 80%, rgba(255, 120, 60, 0.05), transparent 30%);
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

      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/65 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="Iberico Thai logo"
              className="h-10 w-10 rounded-full border border-white/10 bg-white/5 object-cover p-1"
            />
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#d6a54a]">
                Iberico Thai
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-8 text-sm text-white/75">
              <a href="#home" className="transition hover:text-white">{current.nav.home}</a>
              <a href="#menu" className="transition hover:text-white">{current.nav.menu}</a>
              <a href="#locations" className="transition hover:text-white">{current.nav.locations}</a>
              <a href="#gallery" className="transition hover:text-white">{current.nav.gallery}</a>
              <a href="#about" className="transition hover:text-white">{current.nav.about}</a>
              <a href="#contact" className="transition hover:text-white">{current.nav.contact}</a>
            </nav>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  lang === "en" ? "bg-[#d6a54a] text-black" : "text-white/70 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("es")}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  lang === "es" ? "bg-[#d6a54a] text-black" : "text-white/70 hover:text-white"
                }`}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </header>

      <section
        id="home"
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 lg:px-10"
      >
        <div className="grid w-full items-center gap-14 lg:grid-cols-2">
          <div className={mounted ? "fade-up" : "opacity-0"}>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-[#d6a54a]">
              {current.hero.badge}
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {current.hero.title1}
              <br />
              {current.hero.title2}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">
              {current.hero.text}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#menu"
                className="rounded-full bg-[#d6a54a] px-7 py-4 text-sm font-medium text-black transition hover:scale-[1.03]"
              >
                {current.hero.primary}
              </a>
              <a
                href="#locations"
                className="rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white transition hover:border-[#d6a54a] hover:text-[#d6a54a]"
              >
                {current.hero.secondary}
              </a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold text-white">2</p>
                <p className="mt-1 text-sm text-white/60">{current.hero.stat1}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold text-white">Daily</p>
                <p className="mt-1 text-sm text-white/60">{current.hero.stat2}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold text-white">Thai</p>
                <p className="mt-1 text-sm text-white/60">{current.hero.stat3}</p>
              </div>
            </div>
          </div>

          <div className={mounted ? "fade-up-delay-2" : "opacity-0"}>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 shadow-[0_0_80px_rgba(214,165,74,0.12)]">
              <img
                src="/hero-food.jpg"
                alt="Thai food"
                className="h-[520px] w-full rounded-[1.6rem] object-cover"
              />
              <div className="absolute inset-x-8 bottom-8 rounded-[1.5rem] border border-white/10 bg-black/55 p-5 backdrop-blur-md">
                <p className="text-sm uppercase tracking-[0.25em] text-[#d6a54a]">
                  Iberico Thai | Thai Bar
                </p>
                <p className="mt-3 text-lg text-white/80">
                  {current.intro.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d6a54a]">
            {current.intro.badge}
          </p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {current.intro.title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
            {current.intro.text}
          </p>
        </div>
      </section>

      <section id="menu" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d6a54a]">
            {current.menu.badge}
          </p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {current.menu.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/60">
            {current.menu.text}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {current.menu.items.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-2 hover:border-[#d6a54a]/40"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-[#d6a54a]/10 ring-1 ring-[#d6a54a]/20" />
              <h3 className="text-2xl font-medium text-white">{item.title}</h3>
              <p className="mt-4 leading-8 text-white/60">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="/menu.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-[#d6a54a] px-7 py-4 text-sm font-medium text-black transition hover:scale-[1.03]"
          >
            {current.menu.button}
          </a>
        </div>
      </section>

      <section id="locations" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d6a54a]">
            {current.locations.badge}
          </p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {current.locations.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/60">
            {current.locations.text}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-[#d6a54a]">Location 01</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">{current.locations.first.name}</h3>
            <p className="mt-4 text-white/65">{current.locations.first.desc}</p>
            <div className="mt-8 space-y-4 text-white/75">
              <p>{current.locations.first.address}</p>
              <p>{current.locations.first.hours}</p>
              <a href={`tel:${current.locations.first.phone}`} className="block text-[#f4deb0] hover:text-[#d6a54a]">{current.locations.first.phone}</a>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-[#d6a54a] hover:text-[#d6a54a]"
            >
              {current.locations.cta}
            </a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-[#d6a54a]">Location 02</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">{current.locations.second.name}</h3>
            <p className="mt-4 text-white/65">{current.locations.second.desc}</p>
            <div className="mt-8 space-y-4 text-white/75">
              <p>{current.locations.second.address}</p>
              <p>{current.locations.second.hours}</p>
              <a href={`tel:${current.locations.second.phone}`} className="block text-[#f4deb0] hover:text-[#d6a54a]">{current.locations.second.phone}</a>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-[#d6a54a] hover:text-[#d6a54a]"
            >
              {current.locations.cta}
            </a>
          </div>
        </div>
      </section>

      <section id="gallery" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d6a54a]">
            {current.gallery.badge}
          </p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {current.gallery.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/60">
            {current.gallery.text}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.03]"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="h-80 w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d6a54a]">
              {current.about.badge}
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {current.about.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              {current.about.text1}
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
              {current.about.text2}
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[#d6a54a]">Highlights</p>
            <div className="grid gap-4">
              {current.about.points.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white/75"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d6a54a]">
            {current.contact.badge}
          </p>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {current.contact.title}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                {current.contact.text}
              </p>
            </div>

            <div className="grid gap-4">
              <a
                href="/menu.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#d6a54a] px-7 py-4 text-center text-sm font-medium text-black transition hover:scale-[1.02]"
              >
                {current.contact.menuBtn}
              </a>
              <a
                href="tel:+34931895352"
                className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-medium text-white transition hover:border-[#d6a54a] hover:text-[#d6a54a]"
              >
                {current.contact.phoneBtn}
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-medium text-white transition hover:border-[#d6a54a] hover:text-[#d6a54a]"
              >
                {current.contact.mapBtn}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-white/45 md:flex-row lg:px-10">
          <div className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="Iberico Thai logo"
              className="h-8 w-8 rounded-full border border-white/10 bg-white/5 object-cover p-1"
            />
            <span className="tracking-[0.3em] text-white/70">Iberico Thai</span>
          </div>
          <p>{current.footer}</p>
        </div>
      </footer>
    </main>
  );
}
