"use client";

import { useState } from "react";

type Lang = "en" | "es" | "ca";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");

  const content = {
    en: {
      nav: {
        home: "Home",
        locations: "Locations",
        menu: "Menu",
        gallery: "Gallery",
        contact: "Contact",
      },
      hero: {
        badge: "Thai & Spanish Fusion • Barcelona",
        title1: "Fresh food.",
        title2: "Simple style.",
        title3: "Two locations.",
        text: "Discover Iberico Thai in Barcelona with one shared menu, two convenient locations, and a modern casual dining experience inspired by Thai flavors and a vibrant city atmosphere.",
        menuBtn: "View Menu",
        locationBtn: "Choose Location",
      },
      locations: {
        label: "Our Locations",
        title: "Two places, one menu, same taste",
        text: "Visit the branch that suits you best. Both locations offer the same menu, fast service, and the Iberico Thai experience.",
        address: "Address",
        phone: "Phone",
        hours: "Hours",
        call: "Call",
        route: "Route",
      },
      menu: {
        label: "Menu Preview",
        title: "Popular dishes everyone loves",
        text: "A simple preview of your shared menu. You can also open the full food and drinks menu as PDF below.",
      },
      pdf: {
        foodTitle: "Full Food Menu",
        foodDesc: "Open the complete food menu in PDF format.",
        foodBtn: "Open Food PDF",
        drinksTitle: "Drinks Menu",
        drinksDesc: "Open the full drinks menu in PDF format.",
        drinksBtn: "Open Drinks PDF",
      },
      feature: {
        label: "Why Choose Us",
        title: "Fresh, fast, and easy to enjoy",
        item1Title: "Fresh ingredients",
        item1Text:
          "Balanced flavors, colorful presentation, and simple food people want to come back for.",
        item2Title: "Two convenient spots",
        item2Text:
          "Great for tourists, locals, and anyone exploring Barcelona.",
        item3Title: "Shared menu",
        item3Text:
          "No confusion. Same dishes, same quality, whichever location you choose.",
      },
      gallery: {
        label: "Gallery",
        title: "Food and atmosphere",
        text: "A simple gallery preview with your real dish images.",
      },
      contact: {
        label: "Contact",
        title: "Come visit Iberico Thai",
        text: "Two locations in Barcelona, one simple experience. Check the menu, choose your nearest branch, and enjoy the food.",
      },
      footer: "© 2026 Iberico Thai. All rights reserved.",
      subtitles: {
        entenca: "Near Train Station",
        sagrada: "Near Sagrada Familia",
      },
      dishes: {
        padThai:
          "Classic stir-fried rice noodles with a fresh, vibrant flavor.",
        redCurry:
          "Creamy Thai red curry with aromatic herbs and rich flavor.",
        friedRice:
          "Wok-fried rice with vegetables, egg, and your choice of protein.",
        tomYum:
          "Hot and sour Thai soup with bold citrus and herbal notes.",
        mangoStickyRice:
          "Sweet mango served with soft sticky rice and coconut.",
        thaiIcedTea:
          "Refreshing creamy tea with a smooth sweet finish.",
      },
    },

    es: {
      nav: {
        home: "Inicio",
        locations: "Ubicaciones",
        menu: "Menú",
        gallery: "Galería",
        contact: "Contacto",
      },
      hero: {
        badge: "Fusión Thai y Española • Barcelona",
        title1: "Comida fresca.",
        title2: "Estilo simple.",
        title3: "Dos ubicaciones.",
        text: "Descubre Iberico Thai en Barcelona con un menú compartido, dos ubicaciones convenientes y una experiencia gastronómica moderna e informal inspirada en sabores tailandeses y el ambiente vibrante de la ciudad.",
        menuBtn: "Ver Menú",
        locationBtn: "Elegir Ubicación",
      },
      locations: {
        label: "Nuestras Ubicaciones",
        title: "Dos lugares, un menú, el mismo sabor",
        text: "Visita la sucursal que más te convenga. Ambas ubicaciones ofrecen el mismo menú, servicio rápido y la experiencia Iberico Thai.",
        address: "Dirección",
        phone: "Teléfono",
        hours: "Horario",
        call: "Llamar",
        route: "Ruta",
      },
      menu: {
        label: "Vista previa del menú",
        title: "Platos populares que todos aman",
        text: "Una vista previa sencilla de su menú compartido. También puedes abrir el menú completo de comida y bebidas en PDF abajo.",
      },
      pdf: {
        foodTitle: "Menú Completo de Comida",
        foodDesc: "Abre el menú completo de comida en formato PDF.",
        foodBtn: "Abrir PDF de Comida",
        drinksTitle: "Menú de Bebidas",
        drinksDesc: "Abre el menú completo de bebidas en formato PDF.",
        drinksBtn: "Abrir PDF de Bebidas",
      },
      feature: {
        label: "Por Qué Elegirnos",
        title: "Fresco, rápido y fácil de disfrutar",
        item1Title: "Ingredientes frescos",
        item1Text:
          "Sabores equilibrados, presentación colorida y comida sencilla a la que la gente quiere volver.",
        item2Title: "Dos ubicaciones cómodas",
        item2Text:
          "Ideal para turistas, locales y cualquiera que esté explorando Barcelona.",
        item3Title: "Menú compartido",
        item3Text:
          "Sin confusión. Los mismos platos, la misma calidad, en cualquier ubicación que elijas.",
      },
      gallery: {
        label: "Galería",
        title: "Comida y ambiente",
        text: "Una vista previa sencilla de la galería con imágenes reales de tus platos.",
      },
      contact: {
        label: "Contacto",
        title: "Ven a visitar Iberico Thai",
        text: "Dos ubicaciones en Barcelona, una experiencia sencilla. Consulta el menú, elige tu sucursal más cercana y disfruta de la comida.",
      },
      footer: "© 2026 Iberico Thai. Todos los derechos reservados.",
      subtitles: {
        entenca: "Cerca de la estación de tren",
        sagrada: "Cerca de la Sagrada Familia",
      },
      dishes: {
        padThai:
          "Clásicos fideos de arroz salteados con un sabor fresco y vibrante.",
        redCurry:
          "Curry rojo tailandés cremoso con hierbas aromáticas y sabor intenso.",
        friedRice:
          "Arroz frito al wok con verduras, huevo y tu elección de proteína.",
        tomYum:
          "Sopa tailandesa picante y ácida con intensas notas cítricas y herbales.",
        mangoStickyRice:
          "Mango dulce servido con arroz pegajoso suave y coco.",
        thaiIcedTea:
          "Té cremoso y refrescante con un final dulce y suave.",
      },
    },

    ca: {
      nav: {
        home: "Inici",
        locations: "Ubicacions",
        menu: "Menú",
        gallery: "Galeria",
        contact: "Contacte",
      },
      hero: {
        badge: "Fusió Thai i Espanyola • Barcelona",
        title1: "Menjar fresc.",
        title2: "Estil simple.",
        title3: "Dues ubicacions.",
        text: "Descobreix Iberico Thai a Barcelona amb un menú compartit, dues ubicacions còmodes i una experiència gastronòmica moderna i informal inspirada en sabors tailandesos i l’ambient vibrant de la ciutat.",
        menuBtn: "Veure Menú",
        locationBtn: "Triar Ubicació",
      },
      locations: {
        label: "Les Nostres Ubicacions",
        title: "Dos llocs, un menú, el mateix gust",
        text: "Visita la sucursal que et vagi millor. Ambdues ubicacions ofereixen el mateix menú, servei ràpid i l’experiència Iberico Thai.",
        address: "Adreça",
        phone: "Telèfon",
        hours: "Horari",
        call: "Trucar",
        route: "Ruta",
      },
      menu: {
        label: "Vista prèvia del menú",
        title: "Plats populars que agraden a tothom",
        text: "Una vista prèvia senzilla del vostre menú compartit. També pots obrir el menú complet de menjar i begudes en PDF a sota.",
      },
      pdf: {
        foodTitle: "Menú Complet de Menjar",
        foodDesc: "Obre el menú complet de menjar en format PDF.",
        foodBtn: "Obrir PDF de Menjar",
        drinksTitle: "Menú de Begudes",
        drinksDesc: "Obre el menú complet de begudes en format PDF.",
        drinksBtn: "Obrir PDF de Begudes",
      },
      feature: {
        label: "Per Què Triar-nos",
        title: "Fresc, ràpid i fàcil de gaudir",
        item1Title: "Ingredients frescos",
        item1Text:
          "Sabors equilibrats, presentació colorida i menjar senzill al qual la gent vol tornar.",
        item2Title: "Dues ubicacions pràctiques",
        item2Text:
          "Ideal per a turistes, locals i qualsevol que estigui descobrint Barcelona.",
        item3Title: "Menú compartit",
        item3Text:
          "Sense confusió. Els mateixos plats, la mateixa qualitat, sigui quina sigui la ubicació que triïs.",
      },
      gallery: {
        label: "Galeria",
        title: "Menjar i ambient",
        text: "Una vista prèvia senzilla de la galeria amb imatges reals dels teus plats.",
      },
      contact: {
        label: "Contacte",
        title: "Vine a visitar Iberico Thai",
        text: "Dues ubicacions a Barcelona, una experiència senzilla. Consulta el menú, tria la sucursal més propera i gaudeix del menjar.",
      },
      footer: "© 2026 Iberico Thai. Tots els drets reservats.",
      subtitles: {
        entenca: "A prop de l’estació de tren",
        sagrada: "A prop de la Sagrada Família",
      },
      dishes: {
        padThai:
          "Clàssics fideus d’arròs saltats amb un sabor fresc i vibrant.",
        redCurry:
          "Curry vermell tailandès cremós amb herbes aromàtiques i un sabor intens.",
        friedRice:
          "Arròs fregit al wok amb verdures, ou i la teva elecció de proteïna.",
        tomYum:
          "Sopa tailandesa picant i àcida amb notes cítriques i herbals intenses.",
        mangoStickyRice:
          "Mango dolç servit amb arròs glutinós suau i coco.",
        thaiIcedTea:
          "Te cremós i refrescant amb un final dolç i suau.",
      },
    },
  } as const;

  const t = content[lang];

  const locations = [
    {
      name: "Entença",
      subtitle: t.subtitles.entenca,
      address: "Carrer d’Entença 140, Barcelona",
      phone: "+34 931 39 55 72",
      hours: "Daily · 10:00 – 23:00",
      map: "https://maps.google.com/?q=Carrer+d%27Entenca+140+Barcelona",
    },
    {
      name: "Sagrada Familia",
      subtitle: t.subtitles.sagrada,
      address: "C/ de Padilla, 288, Barcelona",
      phone: "+34 688 583 766",
      hours: "Daily · 10:00 – 23:00",
      map: "https://maps.google.com/?q=Carrer+de+Padilla+288+Barcelona",
    },
  ];

  const dishes = [
    {
      title: "Pad Thai",
      desc: t.dishes.padThai,
      price: "€11.90",
      image: "/PadThai.png",
    },
    {
      title: "Red Curry",
      desc: t.dishes.redCurry,
      price: "€12.50",
      image: "/RedCurry.png",
    },
    {
      title: "Fried Rice",
      desc: t.dishes.friedRice,
      price: "€10.90",
      image: "/FriedRice.png",
    },
    {
      title: "Tom Yum",
      desc: t.dishes.tomYum,
      price: "€8.90",
      image: "/omyum.png",
    },
    {
      title: "Mango Sticky Rice",
      desc: t.dishes.mangoStickyRice,
      price: "€6.90",
      image: "/stickyricemango.PNG",
    },
    {
      title: "Thai Iced Tea",
      desc: t.dishes.thaiIcedTea,
      price: "€4.50",
      image: "/ThaiIcedTea.PNG",
    },
  ];

  const gallery = [
    "/Obrazek.png",
    "/Obrazek1.png",
    "/Obrazek2.png",
    "/Obrazek3.png",
    "/Obrazek4.png",
    "/Obrazek5.png",
    "/Obrazek.png",
    "/Obrazek1.png",
  ];

  const pdfCards = [
    {
      title: t.pdf.foodTitle,
      desc: t.pdf.foodDesc,
      button: t.pdf.foodBtn,
      link: "/food-menu.pdf",
    },
    {
      title: t.pdf.drinksTitle,
      desc: t.pdf.drinksDesc,
      button: t.pdf.drinksBtn,
      link: "/drinkmenu.pdf",
      image: "/drinknahled.png",
    },
  ];

  return (
    <main className="page">
      <header className="header">
        <div className="brandWrap">
          <img
            src="/Iberico thai logo.PNG"
            alt="Iberico Thai Logo"
            className="headerLogo"
          />
          <div className="logo">IBERICO THAI</div>
        </div>

        <nav className="nav">
          <a href="#home">{t.nav.home}</a>
          <a href="#locations">{t.nav.locations}</a>
          <a href="#menu">{t.nav.menu}</a>
          <a href="#gallery">{t.nav.gallery}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <div className="langSwitch">
          <button
            onClick={() => setLang("en")}
            className={lang === "en" ? "langBtn active" : "langBtn"}
          >
            EN
          </button>
          <button
            onClick={() => setLang("es")}
            className={lang === "es" ? "langBtn active" : "langBtn"}
          >
            ES
          </button>
          <button
            onClick={() => setLang("ca")}
            className={lang === "ca" ? "langBtn active" : "langBtn"}
          >
            CA
          </button>
        </div>
      </header>

      <section id="home" className="hero container">
        <div className="heroText">
          <div className="badge">{t.hero.badge}</div>

          <h1>
            {t.hero.title1}
            <br />
            {t.hero.title2}
            <br />
            {t.hero.title3}
          </h1>

          <p>{t.hero.text}</p>

          <div className="heroButtons">
            <a href="#menu" className="primaryBtn">
              {t.hero.menuBtn}
            </a>
            <a href="#locations" className="secondaryBtn">
              {t.hero.locationBtn}
            </a>
          </div>
        </div>

        <div className="heroCard">
          <img
            src="/uvodfotka.png"
            alt="Iberico Thai featured dish"
            className="heroImage"
          />
        </div>
      </section>

      <section id="locations" className="section container">
        <div className="sectionIntro">
          <span className="sectionLabel">{t.locations.label}</span>
          <h2>{t.locations.title}</h2>
          <p>{t.locations.text}</p>
        </div>

        <div className="locationGrid">
          {locations.map((loc, index) => (
            <div className="locationCard" key={index}>
              <div className="locationTop">
                <div>
                  <h3>{loc.name}</h3>
                  <p>{loc.subtitle}</p>
                </div>
                <div className="locationDot"></div>
              </div>

              <div className="locationInfo">
                <p>
                  <strong>{t.locations.address}:</strong> {loc.address}
                </p>
                <p>
                  <strong>{t.locations.phone}:</strong> {loc.phone}
                </p>
                <p>
                  <strong>{t.locations.hours}:</strong> {loc.hours}
                </p>
              </div>

              <div className="locationButtons">
                <a
                  href={`tel:${loc.phone.replace(/\s/g, "")}`}
                  className="primarySmallBtn"
                >
                  {t.locations.call}
                </a>
                <a
                  href={loc.map}
                  target="_blank"
                  rel="noreferrer"
                  className="secondarySmallBtn"
                >
                  {t.locations.route}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="sectionAlt">
        <div className="container">
          <div className="sectionIntro center">
            <span className="sectionLabel">{t.menu.label}</span>
            <h2>{t.menu.title}</h2>
            <p>{t.menu.text}</p>
          </div>

          <div className="menuGrid">
            {dishes.map((dish, index) => (
              <div className="menuCard" key={index}>
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="menuImage"
                />

                <div className="menuContent">
                  <div className="menuTop">
                    <h3>{dish.title}</h3>
                    <span>{dish.price}</span>
                  </div>
                  <p>{dish.desc}</p>
                </div>
              </div>
            ))}

            {pdfCards.map((item, index) => (
              <a
                key={`pdf-${index}`}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="menuCard pdfCard"
              >
                <div className="pdfTop">
                  <span className="pdfBadge">PDF MENU</span>
                </div>

                <div className="pdfContent">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="pdfButton">{item.button}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="featureBox">
          <div>
            <span className="sectionLabel">{t.feature.label}</span>
            <h2>{t.feature.title}</h2>
          </div>

          <div className="featureRight">
            <div className="featureItem">
              <h4>{t.feature.item1Title}</h4>
              <p>{t.feature.item1Text}</p>
            </div>

            <div className="featureItem">
              <h4>{t.feature.item2Title}</h4>
              <p>{t.feature.item2Text}</p>
            </div>

            <div className="featureItem">
              <h4>{t.feature.item3Title}</h4>
              <p>{t.feature.item3Text}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="sectionAlt">
        <div className="container">
          <div className="sectionIntro center">
            <span className="sectionLabel">{t.gallery.label}</span>
            <h2>{t.gallery.title}</h2>
            <p>{t.gallery.text}</p>
          </div>

          <div className="galleryGrid">
            {gallery.map((item, index) => (
              <div className="galleryItem" key={index}>
                <img
                  src={item}
                  alt={`Gallery ${index + 1}`}
                  className="galleryImage"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section container">
        <div className="contactBox">
          <div>
            <span className="sectionLabel">{t.contact.label}</span>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.text}</p>
          </div>

          <div className="contactRight">
            {locations.map((loc, index) => (
              <div className="contactCard" key={index}>
                <h3>{loc.name}</h3>
                <p>{loc.address}</p>
                <p>{loc.phone}</p>
                <p>{loc.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>{t.footer}</p>
      </footer>

      <style jsx>{`
        .page {
          background: #f8f6f2;
          color: #1f1f1f;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding-left: 40px;
          padding-right: 40px;
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          background: rgba(248, 246, 242, 0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          gap: 20px;
          flex-wrap: wrap;
        }

        .brandWrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .headerLogo {
          width: 46px;
          height: 46px;
          object-fit: contain;
          border-radius: 12px;
          background: white;
          padding: 4px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        }

        .logo {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .nav {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        .nav a {
          text-decoration: none;
          color: #222;
          font-size: 15px;
          font-weight: 500;
        }

        .langSwitch {
          display: flex;
          gap: 8px;
          align-items: center;
          background: white;
          padding: 6px;
          border-radius: 999px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
        }

        .langBtn {
          border: none;
          background: transparent;
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          color: #444;
          transition: 0.2s ease;
        }

        .langBtn.active {
          background: #d98d3f;
          color: white;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: center;
          padding-top: 80px;
          padding-bottom: 60px;
        }

        .heroText {
          max-width: 650px;
        }

        .badge {
          display: inline-block;
          background: #efe4d4;
          color: #9a5e24;
          padding: 10px 16px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .hero h1 {
          font-size: 64px;
          line-height: 1.02;
          margin: 0 0 24px;
          font-weight: 700;
          letter-spacing: -0.04em;
        }

        .hero p {
          font-size: 18px;
          line-height: 1.7;
          color: #5d5d5d;
          margin-bottom: 28px;
          max-width: 580px;
        }

        .heroButtons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .primaryBtn,
        .primarySmallBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          background: #d98d3f;
          color: white;
          border-radius: 999px;
          font-weight: 600;
          transition: 0.2s ease;
        }

        .primaryBtn {
          padding: 14px 24px;
          box-shadow: 0 10px 30px rgba(217, 141, 63, 0.25);
        }

        .primarySmallBtn {
          padding: 12px 18px;
          font-size: 14px;
        }

        .secondaryBtn,
        .secondarySmallBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          border-radius: 999px;
          font-weight: 600;
          transition: 0.2s ease;
        }

        .secondaryBtn {
          background: white;
          color: #222;
          padding: 14px 24px;
          border: 1px solid rgba(0, 0, 0, 0.08);
        }

        .secondarySmallBtn {
          background: #f6f1ea;
          color: #222;
          padding: 12px 18px;
          font-size: 14px;
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .primaryBtn:hover,
        .primarySmallBtn:hover,
        .secondaryBtn:hover,
        .secondarySmallBtn:hover,
        .langBtn:hover {
          transform: translateY(-1px);
        }

        .heroCard {
          background: white;
          border-radius: 28px;
          padding: 18px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
        }

        .heroImage {
          width: 100%;
          min-height: 520px;
          height: 520px;
          object-fit: cover;
          border-radius: 22px;
          display: block;
        }

        .section {
          padding-top: 40px;
          padding-bottom: 80px;
        }

        .sectionAlt {
          background: #f2eee8;
          padding: 80px 0;
        }

        .sectionIntro {
          max-width: 760px;
          margin-bottom: 34px;
        }

        .sectionIntro.center {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        .sectionLabel {
          display: inline-block;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #b27030;
          margin-bottom: 14px;
        }

        .sectionIntro h2,
        .featureBox h2,
        .contactBox h2 {
          font-size: 42px;
          line-height: 1.08;
          margin: 0 0 16px;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .sectionIntro p,
        .featureBox p,
        .contactBox p {
          font-size: 17px;
          line-height: 1.7;
          color: #5f5f5f;
          margin: 0;
        }

        .locationGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .locationCard {
          background: white;
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(0, 0, 0, 0.04);
        }

        .locationTop {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .locationTop h3 {
          font-size: 28px;
          margin: 0 0 6px;
          font-weight: 700;
        }

        .locationTop p {
          font-size: 14px;
          color: #8a8a8a;
          margin: 0;
        }

        .locationDot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #d98d3f;
          margin-top: 8px;
        }

        .locationInfo {
          display: grid;
          gap: 10px;
          margin-bottom: 24px;
        }

        .locationInfo p {
          margin: 0;
          color: #4a4a4a;
          line-height: 1.6;
        }

        .locationButtons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .menuGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .menuCard {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.06);
        }

        .menuImage {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
        }

        .menuContent {
          padding: 22px;
        }

        .menuTop {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
        }

        .menuTop h3 {
          margin: 0;
          font-size: 22px;
          font-weight: 700;
        }

        .menuTop span {
          font-size: 15px;
          font-weight: 700;
          color: #b27030;
          background: #f8efe5;
          padding: 8px 12px;
          border-radius: 999px;
          white-space: nowrap;
        }

        .menuContent p {
          margin: 0;
          color: #5f5f5f;
          line-height: 1.7;
        }

        .pdfCard {
          text-decoration: none;
          color: inherit;
          background: linear-gradient(135deg, #fff8ef 0%, #f7eadb 100%);
          border: 1px solid rgba(178, 112, 48, 0.14);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 320px;
          transition: 0.25s ease;
        }

        .pdfCard:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 50px rgba(178, 112, 48, 0.14);
        }

        .pdfTop {
          padding: 22px 22px 0;
        }

        .pdfBadge {
          display: inline-block;
          background: #b27030;
          color: white;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          padding: 8px 12px;
          border-radius: 999px;
        }

        .pdfContent {
          padding: 22px;
        }

        .pdfContent h3 {
          margin: 18px 0 12px;
          font-size: 24px;
        }

        .pdfContent p {
          margin: 0 0 24px;
          line-height: 1.7;
          color: #5f5f5f;
        }

        .pdfButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #1f1f1f;
          color: white;
          padding: 12px 18px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
        }

        .featureBox {
          background: white;
          border-radius: 28px;
          padding: 38px;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 32px;
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.06);
        }

        .featureRight {
          display: grid;
          gap: 18px;
        }

        .featureItem {
          padding: 18px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .featureItem h4 {
          margin: 0 0 8px;
          font-size: 20px;
          font-weight: 700;
        }

        .galleryGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .galleryItem {
          background: white;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.05);
        }

        .galleryImage {
          width: 100%;
          height: 250px;
          object-fit: cover;
          display: block;
        }

        .contactBox {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 28px;
          align-items: start;
        }

        .contactRight {
          display: grid;
          gap: 20px;
        }

        .contactCard {
          background: white;
          border-radius: 22px;
          padding: 24px;
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.05);
        }

        .contactCard h3 {
          margin: 0 0 12px;
          font-size: 24px;
          font-weight: 700;
        }

        .contactCard p {
          margin: 0 0 8px;
          color: #595959;
          line-height: 1.6;
        }

        .footer {
          padding: 24px 40px 40px;
          text-align: center;
        }

        .footer p {
          margin: 0;
          color: #777;
          font-size: 14px;
        }

        @media (max-width: 980px) {
          .hero,
          .featureBox,
          .contactBox {
            grid-template-columns: 1fr;
          }

          .hero h1 {
            font-size: 48px;
          }

          .heroImage {
            min-height: 360px;
            height: 360px;
          }

          .galleryGrid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .container {
            padding-left: 20px;
            padding-right: 20px;
          }

          .header {
            padding: 16px 20px;
            gap: 16px;
            align-items: flex-start;
            flex-direction: column;
          }

          .nav {
            gap: 14px;
          }

          .hero {
            padding-top: 48px;
            padding-bottom: 40px;
          }

          .hero h1 {
            font-size: 38px;
          }

          .sectionIntro h2,
          .featureBox h2,
          .contactBox h2 {
            font-size: 32px;
          }

          .featureBox {
            padding: 26px;
          }

          .headerLogo {
            width: 40px;
            height: 40px;
          }

          .galleryGrid {
            grid-template-columns: 1fr;
          }

          .langSwitch {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </main>
  );
}
