"use client";

import { useEffect, useState } from "react";

type Lang = "en" | "cz" | "es";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = "/LOGO1.png";
  const contactEmail = "info@jinlab.eu";

  const content = {
    en: {
      nav: {
        home: "Home",
        services: "Services",
        portfolio: "Portfolio",
        about: "About",
        pricing: "Pricing",
        contact: "Contact",
      },
      hero: {
        badge: "Modern Web & Design Studio",
        title1: "Minimal design.",
        title2: "Maximum impact.",
        text: "I create modern websites and digital design for brands that want to stand out with a clean, premium, and simple online presence.",
        primary: "Start a Project",
        secondary: "View Portfolio",
        stats1: "Featured projects",
        stats2: "Simple workflow",
        stats3: "Premium design style",
        fast: "Fast",
        clean: "Clean",
        card1Title: "Clean Layout",
        card1Text:
          "Modern structure with premium spacing and a strong first impression.",
        card2Title: "Visual Focus",
        card2Text:
          "Design that stays simple, elegant, and easy to understand.",
      },
      services: {
        badge: "Services",
        title: "What I do",
        text: "Clean visual work and modern digital presentation for businesses, restaurants, and personal brands.",
        items: [
          {
            title: "Web Design",
            text: "Modern websites with a clean structure, premium look, and strong first impression.",
          },
          {
            title: "Brand Identity",
            text: "Minimal logo concepts and visual presentation for brands that want a modern style.",
          },
          {
            title: "Digital Design",
            text: "Menus, posters, and other digital materials designed to look polished and professional.",
          },
        ],
      },
      portfolio: {
        badge: "Portfolio",
        title: "Selected projects",
        text: "A mix of website, branding, and visual design projects built in a clean modern style.",
        click: "Click to view project",
        preview: "Preview project",
      },
      about: {
        badge: "About",
        title: "Built with a clean modern mindset",
        text1: "JinLab is a modern creative studio focused on websites, visual design, and simple digital presentation.",
        text2: "I work on projects for small businesses, restaurants, and brands that want a stronger online presence with a modern look.",
        why: "Why JinLab",
        whyText:
          "Clean design, strong first impression, simple communication, and a modern visual style.",
        focus: "Focus",
        focusText:
          "Websites, branding, menus, posters, and digital materials that are easy to use and visually polished.",
      },
      pricing: {
        badge: "Pricing",
        title: "Simple pricing direction",
        text: "Final pricing depends on project scope, number of sections, design detail, and content preparation.",
        items: [
          {
            name: "Starter",
            price: "from €150",
            text: "Simple landing page or small design project for individuals and small businesses.",
          },
          {
            name: "Business",
            price: "from €300",
            text: "Professional website with stronger structure, clean styling, and modern presentation.",
          },
          {
            name: "Custom",
            price: "Custom",
            text: "For larger websites, branding, or combined design work tailored to your project.",
          },
        ],
      },
      contact: {
        badge: "Contact",
        title: "Let’s build something clean and modern",
        text: "Want a website, visual concept, or design project? Send a message and let’s talk about your idea.",
        email: "Email",
        quick: "Quick contact",
        quickText:
          "Use the form below or send a direct email if you already know what you need.",
        emailMe: "Email Me",
        formTitle: "Start a Project",
        formText: "Fill out the form and send a quick message about your project.",
        name: "Name",
        emailLabel: "Email",
        projectType: "Project Type",
        message: "Message",
        yourName: "Your name",
        yourEmail: "your@email.com",
        projectPlaceholder: "Website, logo, menu, branding...",
        messagePlaceholder: "Tell me a little about your project...",
        send: "Send Inquiry",
      },
      footer: "© 2026 JinLab. All rights reserved.",
    },

    cz: {
      nav: {
        home: "Domů",
        services: "Služby",
        portfolio: "Portfolio",
        about: "O mně",
        pricing: "Ceník",
        contact: "Kontakt",
      },
      hero: {
        badge: "Moderní webové a designové studio",
        title1: "Minimalistický design.",
        title2: "Maximální dojem.",
        text: "Tvořím moderní weby a digitální design pro značky, které chtějí vyniknout čistou, prémiovou a jednoduchou online prezentací.",
        primary: "Začít projekt",
        secondary: "Zobrazit portfolio",
        stats1: "Vybrané projekty",
        stats2: "Jednoduchý proces",
        stats3: "Prémiový styl designu",
        fast: "Rychle",
        clean: "Čistě",
        card1Title: "Čistý layout",
        card1Text:
          "Moderní struktura s prémiovým spacingem a silným prvním dojmem.",
        card2Title: "Vizuální fokus",
        card2Text:
          "Design, který zůstává jednoduchý, elegantní a snadno pochopitelný.",
      },
      services: {
        badge: "Služby",
        title: "Co dělám",
        text: "Čistá vizuální práce a moderní digitální prezentace pro firmy, restaurace a osobní značky.",
        items: [
          {
            title: "Web Design",
            text: "Moderní weby s čistou strukturou, prémiovým vzhledem a silným prvním dojmem.",
          },
          {
            title: "Brand Identita",
            text: "Minimalistické návrhy loga a vizuální prezentace pro značky, které chtějí moderní styl.",
          },
          {
            title: "Digitální Design",
            text: "Nápojové lístky, plakáty a další digitální materiály navržené tak, aby působily profesionálně a čistě.",
          },
        ],
      },
      portfolio: {
        badge: "Portfolio",
        title: "Vybrané projekty",
        text: "Mix webových, brandingových a vizuálních projektů vytvořených v čistém moderním stylu.",
        click: "Klikni pro zobrazení projektu",
        preview: "Náhled projektu",
      },
      about: {
        badge: "O mně",
        title: "Postavené na čistém moderním přístupu",
        text1: "JinLab je moderní kreativní studio zaměřené na weby, vizuální design a jednoduchou digitální prezentaci.",
        text2: "Pracuji na projektech pro malé firmy, restaurace a značky, které chtějí silnější online prezentaci s moderním vzhledem.",
        why: "Proč JinLab",
        whyText:
          "Čistý design, silný první dojem, jednoduchá komunikace a moderní vizuální styl.",
        focus: "Zaměření",
        focusText:
          "Weby, branding, menu, plakáty a digitální materiály, které jsou snadno použitelné a vizuálně dotažené.",
      },
      pricing: {
        badge: "Ceník",
        title: "Jednoduché cenové směřování",
        text: "Finální cena závisí na rozsahu projektu, počtu sekcí, detailu designu a připravenosti obsahu.",
        items: [
          {
            name: "Starter",
            price: "od 150 €",
            text: "Jednoduchý landing page nebo menší designový projekt pro jednotlivce a malé firmy.",
          },
          {
            name: "Business",
            price: "od 300 €",
            text: "Profesionální web se silnější strukturou, čistým stylem a moderní prezentací.",
          },
          {
            name: "Custom",
            price: "Na míru",
            text: "Pro větší weby, branding nebo kombinované designové práce podle potřeb projektu.",
          },
        ],
      },
      contact: {
        badge: "Kontakt",
        title: "Pojďme vytvořit něco čistého a moderního",
        text: "Chceš web, vizuální koncept nebo designový projekt? Napiš mi a pobavíme se o tvém nápadu.",
        email: "E-mail",
        quick: "Rychlý kontakt",
        quickText:
          "Použij formulář níže nebo pošli rovnou e-mail, pokud už víš, co potřebuješ.",
        emailMe: "Napsat e-mail",
        formTitle: "Začít projekt",
        formText: "Vyplň formulář a pošli krátkou zprávu o svém projektu.",
        name: "Jméno",
        emailLabel: "E-mail",
        projectType: "Typ projektu",
        message: "Zpráva",
        yourName: "Tvé jméno",
        yourEmail: "tvuj@email.com",
        projectPlaceholder: "Web, logo, menu, branding...",
        messagePlaceholder: "Napiš mi něco o svém projektu...",
        send: "Odeslat poptávku",
      },
      footer: "© 2026 JinLab. Všechna práva vyhrazena.",
    },

    es: {
      nav: {
        home: "Inicio",
        services: "Servicios",
        portfolio: "Portfolio",
        about: "Sobre mí",
        pricing: "Precios",
        contact: "Contacto",
      },
      hero: {
        badge: "Estudio moderno de web y diseño",
        title1: "Diseño minimalista.",
        title2: "Máximo impacto.",
        text: "Creo sitios web modernos y diseño digital para marcas que quieren destacar con una presencia online limpia, premium y simple.",
        primary: "Empezar proyecto",
        secondary: "Ver portfolio",
        stats1: "Proyectos destacados",
        stats2: "Proceso simple",
        stats3: "Estilo de diseño premium",
        fast: "Rápido",
        clean: "Limpio",
        card1Title: "Diseño limpio",
        card1Text:
          "Estructura moderna con espacios premium y una fuerte primera impresión.",
        card2Title: "Enfoque visual",
        card2Text:
          "Diseño simple, elegante y fácil de entender.",
      },
      services: {
        badge: "Servicios",
        title: "Lo que hago",
        text: "Trabajo visual limpio y presentación digital moderna para empresas, restaurantes y marcas personales.",
        items: [
          {
            title: "Diseño Web",
            text: "Sitios web modernos con una estructura limpia, aspecto premium y una fuerte primera impresión.",
          },
          {
            title: "Identidad de Marca",
            text: "Conceptos de logo minimalistas y presentación visual para marcas que quieren un estilo moderno.",
          },
          {
            title: "Diseño Digital",
            text: "Menús, pósters y otros materiales digitales diseñados para verse pulidos y profesionales.",
          },
        ],
      },
      portfolio: {
        badge: "Portfolio",
        title: "Proyectos seleccionados",
        text: "Una mezcla de proyectos de web, branding y diseño visual construidos con un estilo moderno y limpio.",
        click: "Haz clic para ver el proyecto",
        preview: "Vista previa del proyecto",
      },
      about: {
        badge: "Sobre mí",
        title: "Creado con una mentalidad moderna y limpia",
        text1: "JinLab es un estudio creativo moderno enfocado en sitios web, diseño visual y presentación digital simple.",
        text2: "Trabajo en proyectos para pequeñas empresas, restaurantes y marcas que quieren una presencia online más fuerte con un aspecto moderno.",
        why: "Por qué JinLab",
        whyText:
          "Diseño limpio, fuerte primera impresión, comunicación simple y un estilo visual moderno.",
        focus: "Enfoque",
        focusText:
          "Sitios web, branding, menús, pósters y materiales digitales fáciles de usar y visualmente pulidos.",
      },
      pricing: {
        badge: "Precios",
        title: "Dirección simple de precios",
        text: "El precio final depende del alcance del proyecto, número de secciones, detalle del diseño y preparación del contenido.",
        items: [
          {
            name: "Starter",
            price: "desde 150 €",
            text: "Landing page simple o pequeño proyecto de diseño para individuos y pequeñas empresas.",
          },
          {
            name: "Business",
            price: "desde 300 €",
            text: "Sitio web profesional con mejor estructura, estilo limpio y presentación moderna.",
          },
          {
            name: "Custom",
            price: "Personalizado",
            text: "Para sitios web más grandes, branding o trabajos de diseño combinados adaptados a tu proyecto.",
          },
        ],
      },
      contact: {
        badge: "Contacto",
        title: "Construyamos algo limpio y moderno",
        text: "¿Quieres una web, un concepto visual o un proyecto de diseño? Envíame un mensaje y hablamos de tu idea.",
        email: "Correo",
        quick: "Contacto rápido",
        quickText:
          "Usa el formulario abajo o envía un correo directo si ya sabes lo que necesitas.",
        emailMe: "Enviar correo",
        formTitle: "Empezar un proyecto",
        formText: "Rellena el formulario y envía un mensaje rápido sobre tu proyecto.",
        name: "Nombre",
        emailLabel: "Correo",
        projectType: "Tipo de proyecto",
        message: "Mensaje",
        yourName: "Tu nombre",
        yourEmail: "tu@email.com",
        projectPlaceholder: "Web, logo, menú, branding...",
        messagePlaceholder: "Cuéntame un poco sobre tu proyecto...",
        send: "Enviar consulta",
      },
      footer: "© 2026 JinLab. Todos los derechos reservados.",
    },
  };

  const current = content[lang];

  const projects = [
    {
      title: "Project 1",
      subtitle: "JinLab",
      image: "/project1.png",
      link: "https://www.jinlab.eu",
    },
    {
      title: "Project 2",
      subtitle: "Iberico Thai",
      image: "/project2.png",
      link: "https://www.ibericothai.eu",
    },
    {
      title: "Project 3",
      subtitle: "Stinotek",
      image: "/project3.png",
      link: "https://www.stinotek.cz",
    },
    {
      title: "Project 4",
      subtitle: "Drinks Menu",
      image: "/project4.png",
      link: "/project4.pdf",
    },
    {
      title: "Project 5",
      subtitle: "Mini Drinks Menu",
      image: "/project5.png",
      link: "/project5.pdf",
    },
    {
      title: "Project 6",
      subtitle: "JinLab Logo",
      image: "/LOGO1.png",
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#d4a645] selection:text-black">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          background: #000;
        }
        .fade-up {
          opacity: 0;
          transform: translateY(28px);
          animation: fadeUp 0.8s ease forwards;
        }
        .fade-up-delay-1 {
          opacity: 0;
          transform: translateY(28px);
          animation: fadeUp 0.8s ease forwards;
          animation-delay: 0.15s;
        }
        .fade-up-delay-2 {
          opacity: 0;
          transform: translateY(28px);
          animation: fadeUp 0.8s ease forwards;
          animation-delay: 0.3s;
        }
        .glow-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 65% 35%, rgba(212, 166, 69, 0.16), transparent 26%),
            radial-gradient(circle at 30% 20%, rgba(212, 166, 69, 0.08), transparent 20%);
          pointer-events: none;
        }
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="glow-bg" />

      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="JinLab logo"
              className="h-10 w-10 rounded-full border border-white/10 bg-white/5 p-1 object-cover"
            />
            <span className="text-lg font-semibold tracking-[0.35em] text-[#f2e4bf]">
              JinLab
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-8 text-sm text-white/75">
              <a href="#home" className="transition hover:text-white">
                {current.nav.home}
              </a>
              <a href="#services" className="transition hover:text-white">
                {current.nav.services}
              </a>
              <a href="#portfolio" className="transition hover:text-white">
                {current.nav.portfolio}
              </a>
              <a href="#about" className="transition hover:text-white">
                {current.nav.about}
              </a>
              <a href="#pricing" className="transition hover:text-white">
                {current.nav.pricing}
              </a>
              <a href="#contact" className="transition hover:text-white">
                {current.nav.contact}
              </a>
            </nav>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  lang === "en"
                    ? "bg-[#d4a645] text-black"
                    : "text-white/70 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("cz")}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  lang === "cz"
                    ? "bg-[#d4a645] text-black"
                    : "text-white/70 hover:text-white"
                }`}
              >
                CZ
              </button>
              <button
                onClick={() => setLang("es")}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  lang === "es"
                    ? "bg-[#d4a645] text-black"
                    : "text-white/70 hover:text-white"
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
        className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 lg:px-10"
      >
        <div className="grid w-full items-center gap-14 lg:grid-cols-2">
          <div className={mounted ? "fade-up" : "opacity-0"}>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-[#d4a645]">
              {current.hero.badge}
            </p>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {current.hero.title1}
              <br />
              {current.hero.title2}
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">
              {current.hero.text}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#project-form"
                className="rounded-full bg-[#d4a645] px-7 py-4 text-sm font-medium text-black transition hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(212,166,69,0.25)]"
              >
                {current.hero.primary}
              </a>
              <a
                href="#portfolio"
                className="rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white transition hover:border-[#d4a645] hover:text-[#d4a645]"
              >
                {current.hero.secondary}
              </a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1">
                <p className="text-2xl font-semibold text-white">6</p>
                <p className="mt-1 text-sm text-white/60">{current.hero.stats1}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1">
                <p className="text-2xl font-semibold text-white">{current.hero.fast}</p>
                <p className="mt-1 text-sm text-white/60">{current.hero.stats2}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1">
                <p className="text-2xl font-semibold text-white">{current.hero.clean}</p>
                <p className="mt-1 text-sm text-white/60">{current.hero.stats3}</p>
              </div>
            </div>
          </div>

          <div className={mounted ? "fade-up-delay-2" : "opacity-0"}>
            <div className="relative mx-auto max-w-xl rounded-[2rem] border border-[#d4a645]/15 bg-[#080808] p-5 shadow-[0_0_80px_rgba(212,166,69,0.08)]">
              <div className="mb-4 flex gap-2 px-2">
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
              </div>

              <div className="rounded-[1.8rem] border border-white/8 bg-black/50 p-5">
                <div className="rounded-[1.4rem] border border-white/8 bg-[#0a0a0a] p-6">
                  <div className="mb-5 rounded-[1.2rem] border border-white/8 bg-black/40 p-6">
                    <div className="mb-4 h-3 w-24 rounded-full bg-[#d4a645]" />
                    <div className="mb-3 h-3 w-40 rounded-full bg-white/20" />
                    <div className="h-3 w-28 rounded-full bg-white/15" />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.2rem] border border-white/8 bg-black/40 p-5 transition hover:-translate-y-1">
                      <p className="mb-3 text-base font-medium text-[#d4a645]">
                        {current.hero.card1Title}
                      </p>
                      <p className="text-sm leading-7 text-white/60">
                        {current.hero.card1Text}
                      </p>
                    </div>

                    <div className="rounded-[1.2rem] border border-white/8 bg-black/40 p-5 transition hover:-translate-y-1">
                      <p className="mb-3 text-base font-medium text-[#d4a645]">
                        {current.hero.card2Title}
                      </p>
                      <p className="text-sm leading-7 text-white/60">
                        {current.hero.card2Text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d4a645]">
            {current.services.badge}
          </p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {current.services.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/60">
            {current.services.text}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {current.services.items.map((service) => (
            <div
              key={service.title}
              className="group rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#d4a645]/40 hover:bg-white/[0.05]"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-[#d4a645]/10 ring-1 ring-[#d4a645]/20" />
              <h3 className="text-2xl font-medium text-white">{service.title}</h3>
              <p className="mt-4 leading-8 text-white/60">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d4a645]">
            {current.portfolio.badge}
          </p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {current.portfolio.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/60">
            {current.portfolio.text}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target={project.link !== "#" ? "_blank" : "_self"}
              rel={project.link !== "#" ? "noreferrer" : undefined}
              className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-[#d4a645]/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                <img
                  src={project.image}
                  alt={project.subtitle}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[#d4a645]">
                  {project.title}
                </p>
                <h3 className="mt-3 text-2xl font-medium text-white">
                  {project.subtitle}
                </h3>
                <p className="mt-4 text-sm text-white/55">
                  {project.link !== "#"
                    ? current.portfolio.click
                    : current.portfolio.preview}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d4a645]">
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

          <div className="grid gap-6">
            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-2xl font-medium text-white">{current.about.why}</h3>
              <p className="mt-4 leading-8 text-white/60">{current.about.whyText}</p>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-2xl font-medium text-white">
                {current.about.focus}
              </h3>
              <p className="mt-4 leading-8 text-white/60">
                {current.about.focusText}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d4a645]">
            {current.pricing.badge}
          </p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {current.pricing.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/60">
            {current.pricing.text}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {current.pricing.items.map((item) => (
            <div
              key={item.name}
              className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-2 hover:border-[#d4a645]/40"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-[#d4a645]">
                {item.name}
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-white">
                {item.price}
              </h3>
              <p className="mt-5 leading-8 text-white/60">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d4a645]">
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

              <div className="mt-8">
                <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                  {current.contact.email}
                </p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="mt-3 inline-block text-2xl font-medium text-[#f2e4bf] transition hover:text-[#d4a645]"
                >
                  {contactEmail}
                </a>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-black/30 p-6">
              <p className="mb-5 text-xl font-medium text-white">
                {current.contact.quick}
              </p>
              <p className="leading-8 text-white/60">{current.contact.quickText}</p>

              <div className="mt-8">
                <a
                  href={`mailto:${contactEmail}?subject=Project%20Inquiry`}
                  className="inline-flex rounded-full bg-[#d4a645] px-7 py-4 text-sm font-medium text-black transition hover:scale-[1.03]"
                >
                  {current.contact.emailMe}
                </a>
              </div>
            </div>
          </div>

          <div
            id="project-form"
            className="mt-12 rounded-[1.8rem] border border-white/10 bg-black/30 p-6 sm:p-8"
          >
            <h3 className="text-2xl font-semibold text-white">
              {current.contact.formTitle}
            </h3>
            <p className="mt-3 max-w-2xl text-white/60">
              {current.contact.formText}
            </p>

            <form
              action="https://formsubmit.co/info@jinlab.eu"
              method="POST"
              className="mt-8 grid gap-5"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New JinLab Project Inquiry" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    {current.contact.name}
                  </label>
                  <input
                    type="text"
                    name="Name"
                    placeholder={current.contact.yourName}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#d4a645]/60"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    {current.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    name="Email"
                    placeholder={current.contact.yourEmail}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#d4a645]/60"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">
                  {current.contact.projectType}
                </label>
                <input
                  type="text"
                  name="Project Type"
                  placeholder={current.contact.projectPlaceholder}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#d4a645]/60"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">
                  {current.contact.message}
                </label>
                <textarea
                  name="Message"
                  rows={6}
                  placeholder={current.contact.messagePlaceholder}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#d4a645]/60"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="rounded-full bg-[#d4a645] px-7 py-4 text-sm font-medium text-black transition hover:scale-[1.03]"
                >
                  {current.contact.send}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-white/45 md:flex-row lg:px-10">
          <div className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="JinLab logo"
              className="h-8 w-8 rounded-full border border-white/10 bg-white/5 p-1 object-cover"
            />
            <span className="tracking-[0.3em] text-white/70">JinLab</span>
          </div>
          <p>{current.footer}</p>
        </div>
      </footer>
    </main>
  );
}
