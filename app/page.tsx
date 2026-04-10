"use client";

export default function Home() {
  const locations = [
    {
      name: "Entença",
      subtitle: "Near Train Station",
      address: "Carrer d’Entença 140, Barcelona",
      phone: "+34 931 39 55 72",
      hours: "Daily · 10:00 – 00:00",
      map: "https://maps.google.com/?q=Carrer+d%27Entenca+140+Barcelona",
    },
    {
      name: "Sagrada Familia",
      subtitle: "Near Sagrada Familia",
      address: "C/ de Padilla, 288, Barcelona",
      phone: "+34 688 583 766",
      hours: "Daily · 10:00 – 20:00",
      map: "https://maps.google.com/?q=Carrer+de+Padilla+288+Barcelona",
    },
  ];

  const dishes = [
    {
      title: "Pad Thai",
      desc: "Classic stir-fried rice noodles with a fresh, vibrant flavor.",
      price: "€11.90",
      image: "/PadThai.png",
    },
    {
      title: "Red Curry",
      desc: "Creamy Thai red curry with aromatic herbs and rich flavor.",
      price: "€12.50",
      image: "/RedCurry.png",
    },
    {
      title: "Fried Rice",
      desc: "Wok-fried rice with vegetables, egg, and your choice of protein.",
      price: "€10.90",
      image: "/FriedRice.png",
    },
    {
      title: "Tom Yum",
      desc: "Hot and sour Thai soup with bold citrus and herbal notes.",
      price: "€8.90",
      image: "/omyum.png",
    },
    {
      title: "Mango Sticky Rice",
      desc: "Sweet mango served with soft sticky rice and coconut.",
      price: "€6.90",
      image: "/stickyricemango.PNG",
    },
    {
      title: "Thai Iced Tea",
      desc: "Refreshing creamy tea with a smooth sweet finish.",
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
      title: "Full Food Menu",
      desc: "Open the complete food menu in PDF format.",
      button: "Open Food PDF",
      link: "/food-menu.pdf",
    },
    {
      title: "Drinks Menu",
      desc: "Open the full drinks menu in PDF format.",
      button: "Open Drinks PDF",
      link: "/drinkmenu.pdf",
      image: "/drinknahled.png",
    },
  ];

  const handleCall = (phone) => {
    const cleanedPhone = phone.replace(/\s/g, "");
    const confirmed = window.confirm(`Do you want to call ${phone}?`);

    if (confirmed) {
      window.location.href = `tel:${cleanedPhone}`;
    }
  };

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
          <a href="#home">Home</a>
          <a href="#locations">Locations</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero container">
        <div className="heroText">
          <div className="badge">Thai & Spanish Fusion • Barcelona</div>

          <h1>
            Fresh food.
            <br />
            Simple style.
            <br />
            Two locations.
          </h1>

          <p>
            Discover Iberico Thai in Barcelona with one shared menu, two
            convenient locations, and a modern casual dining experience inspired
            by Thai flavors and a vibrant city atmosphere.
          </p>

          <div className="heroButtons">
            <a href="#menu" className="primaryBtn">
              View Menu
            </a>
            <a href="#locations" className="secondaryBtn">
              Choose Location
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
          <span className="sectionLabel">Our Locations</span>
          <h2>Two places, one menu, same taste</h2>
          <p>
            Visit the branch that suits you best. Both locations offer the same
            menu, fast service, and the Iberico Thai experience.
          </p>
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
                  <strong>Address:</strong> {loc.address}
                </p>
                <p>
                  <strong>Phone:</strong> {loc.phone}
                </p>
                <p>
                  <strong>Hours:</strong> {loc.hours}
                </p>
              </div>

              <div className="locationButtons">
                <button
                  type="button"
                  onClick={() => handleCall(loc.phone)}
                  className="primarySmallBtn callBtn"
                >
                  Call
                </button>
                <a
                  href={loc.map}
                  target="_blank"
                  rel="noreferrer"
                  className="secondarySmallBtn"
                >
                  Route
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="sectionAlt">
        <div className="container">
          <div className="sectionIntro center">
            <span className="sectionLabel">Menu Preview</span>
            <h2>Popular dishes everyone loves</h2>
            <p>
              A simple preview of your shared menu. You can also open the full
              food and drinks menu as PDF below.
            </p>
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
            <span className="sectionLabel">Why Choose Us</span>
            <h2>Fresh, fast, and easy to enjoy</h2>
          </div>

          <div className="featureRight">
            <div className="featureItem">
              <h4>Fresh ingredients</h4>
              <p>
                Balanced flavors, colorful presentation, and simple food people
                want to come back for.
              </p>
            </div>

            <div className="featureItem">
              <h4>Two convenient spots</h4>
              <p>
                Great for tourists, locals, and anyone exploring Barcelona.
              </p>
            </div>

            <div className="featureItem">
              <h4>Shared menu</h4>
              <p>
                No confusion. Same dishes, same quality, whichever location you
                choose.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="sectionAlt">
        <div className="container">
          <div className="sectionIntro center">
            <span className="sectionLabel">Gallery</span>
            <h2>Food and atmosphere</h2>
            <p>A simple gallery preview with your real dish images.</p>
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
            <span className="sectionLabel">Contact</span>
            <h2>Come visit Iberico Thai</h2>
            <p>
              Two locations in Barcelona, one simple experience. Check the menu,
              choose your nearest branch, and enjoy the food.
            </p>
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
        <p>© 2026 Iberico Thai. All rights reserved.</p>
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
          border: none;
          cursor: pointer;
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
        .secondarySmallBtn:hover {
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

        .callBtn {
          font-family: inherit;
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
        }
      `}</style>
    </main>
  );
}
