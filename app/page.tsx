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
      phone: "+34 931 06 81 44",
      hours: "Daily · 10:00 – 20:00",
      map: "https://maps.google.com/?q=Carrer+de+Padilla+288+Barcelona",
    },
  ];

  const dishes = [
    {
      title: "Pad Thai",
      desc: "Classic stir-fried rice noodles with a fresh, vibrant flavor.",
      price: "€11.90",
    },
    {
      title: "Thai Curry",
      desc: "Creamy curry with vegetables, aromatic spices, and rich coconut flavor.",
      price: "€12.90",
    },
    {
      title: "Fried Rice",
      desc: "Wok-fried rice with vegetables, egg, and Thai seasonings.",
      price: "€10.90",
    },
    {
      title: "Tom Yum",
      desc: "Hot and sour Thai soup with herbs, seafood, and citrus notes.",
      price: "€13.50",
    },
    {
      title: "Mango Sticky Rice",
      desc: "Sweet mango with coconut sticky rice and sesame topping.",
      price: "€6.90",
    },
  ];

  const galleryImages = [
    "/obrazek.png",
    "/obrazek1.png",
    "/obrazek2.png",
    "/obrazek3.png",
    "/obrazek4.png",
    "/obrazek5.png",
  ];

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div style={styles.logo}>IBERICO THAI</div>

        <nav style={styles.nav}>
          <a href="#home" style={styles.navLink}>Home</a>
          <a href="#locations" style={styles.navLink}>Locations</a>
          <a href="#menu" style={styles.navLink}>Menu</a>
          <a href="#gallery" style={styles.navLink}>Gallery</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      <section id="home" style={styles.hero}>
        <div style={styles.heroInner}>
          <p style={styles.eyebrow}>THAI & SPANISH FUSION</p>
          <h1 style={styles.heroTitle}>Bold flavors, modern atmosphere.</h1>
          <p style={styles.heroText}>
            Discover a fresh dining experience in Barcelona with Thai-inspired cuisine,
            elegant presentation, and warm, stylish spaces.
          </p>

          <div style={styles.heroButtons}>
            <a href="#menu" style={styles.primaryButton}>View Menu</a>
            <a href="#locations" style={styles.secondaryButton}>Find a Location</a>
          </div>
        </div>
      </section>

      <section id="locations" style={styles.section}>
        <div style={styles.sectionIntro}>
          <p style={styles.eyebrow}>LOCATIONS</p>
          <h2 style={styles.sectionTitle}>Visit our restaurants</h2>
          <p style={styles.sectionText}>
            Two Barcelona locations with the same menu and a welcoming atmosphere.
          </p>
        </div>

        <div style={styles.locationGrid}>
          {locations.map((location, index) => (
            <div key={index} style={styles.locationCard}>
              <h3 style={styles.cardTitle}>{location.name}</h3>
              <p style={styles.cardSubtitle}>{location.subtitle}</p>
              <p style={styles.cardText}>{location.address}</p>
              <p style={styles.cardText}>{location.phone}</p>
              <p style={styles.cardText}>{location.hours}</p>
              <a href={location.map} target="_blank" rel="noreferrer" style={styles.cardLink}>
                Open Map
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="menu" style={styles.menuSection}>
        <div style={styles.sectionIntro}>
          <p style={styles.eyebrow}>MENU</p>
          <h2 style={styles.sectionTitle}>A taste of our favorites</h2>
          <p style={styles.sectionText}>
            A preview of popular dishes served in our restaurants.
          </p>
        </div>

        <div style={styles.menuGrid}>
          {dishes.map((dish, index) => (
            <div key={index} style={styles.menuCard}>
              <div style={styles.menuTop}>
                <h3 style={styles.cardTitle}>{dish.title}</h3>
                <span style={styles.price}>{dish.price}</span>
              </div>
              <p style={styles.cardText}>{dish.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" style={styles.gallerySection}>
        <div style={styles.sectionIntro}>
          <p style={styles.eyebrow}>GALLERY</p>
          <h2 style={styles.sectionTitle}>Food and atmosphere</h2>
          <p style={styles.sectionText}>
            A simple gallery preview with your real dish images.
          </p>
        </div>

        <div style={styles.galleryGrid}>
          {galleryImages.map((img, i) => (
            <div key={i} style={styles.galleryCard}>
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                style={styles.galleryImage}
              />
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={styles.section}>
        <div style={styles.contactBox}>
          <p style={styles.eyebrow}>CONTACT</p>
          <h2 style={styles.sectionTitle}>Come by or get in touch</h2>
          <p style={styles.sectionText}>
            Visit either of our Barcelona locations and enjoy our Thai fusion dishes.
          </p>
          <p style={styles.contactText}>Entença: +34 931 39 55 72</p>
          <p style={styles.contactText}>Sagrada Familia: +34 931 06 81 44</p>
        </div>
      </section>

      <footer style={styles.footer}>
        © 2026 Iberico Thai. All rights reserved.
      </footer>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    margin: 0,
    padding: 0,
    backgroundColor: "#f5f1eb",
    color: "#1c1c1f",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },

  header: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backgroundColor: "rgba(245, 241, 235, 0.92)",
    backdropFilter: "blur(10px)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
  },

  logo: {
    fontSize: "20px",
    fontWeight: 700,
    letterSpacing: "0.08em",
  },

  nav: {
    display: "flex",
    gap: "24px",
    flexWrap: "wrap",
  },

  navLink: {
    textDecoration: "none",
    color: "#1c1c1f",
    fontSize: "15px",
    fontWeight: 500,
  },

  hero: {
    padding: "110px 20px 90px",
  },

  heroInner: {
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
  },

  eyebrow: {
    color: "#b87333",
    fontWeight: 700,
    letterSpacing: "0.18em",
    fontSize: "14px",
    marginBottom: "18px",
  },

  heroTitle: {
    fontSize: "64px",
    lineHeight: 1.05,
    margin: "0 0 20px",
    fontWeight: 800,
  },

  heroText: {
    fontSize: "20px",
    lineHeight: 1.7,
    color: "#666",
    maxWidth: "760px",
    margin: "0 auto 34px",
  },

  heroButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
  },

  primaryButton: {
    textDecoration: "none",
    backgroundColor: "#1c1c1f",
    color: "#fff",
    padding: "14px 24px",
    borderRadius: "999px",
    fontWeight: 600,
  },

  secondaryButton: {
    textDecoration: "none",
    backgroundColor: "transparent",
    color: "#1c1c1f",
    padding: "14px 24px",
    borderRadius: "999px",
    border: "1px solid rgba(0,0,0,0.12)",
    fontWeight: 600,
  },

  section: {
    padding: "90px 20px",
  },

  menuSection: {
    padding: "90px 20px",
    backgroundColor: "#efe8df",
  },

  gallerySection: {
    padding: "90px 20px",
  },

  sectionIntro: {
    textAlign: "center",
    maxWidth: "760px",
    margin: "0 auto 46px",
  },

  sectionTitle: {
    fontSize: "40px",
    lineHeight: 1.15,
    margin: "0 0 18px",
    fontWeight: 800,
  },

  sectionText: {
    fontSize: "18px",
    lineHeight: 1.7,
    color: "#666",
    margin: 0,
  },

  locationGrid: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },

  locationCard: {
    backgroundColor: "#fff",
    borderRadius: "24px",
    padding: "28px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
  },

  cardTitle: {
    fontSize: "24px",
    margin: "0 0 8px",
    fontWeight: 700,
  },

  cardSubtitle: {
    fontSize: "14px",
    color: "#b87333",
    fontWeight: 700,
    margin: "0 0 16px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },

  cardText: {
    fontSize: "16px",
    lineHeight: 1.7,
    color: "#555",
    margin: "0 0 10px",
  },

  cardLink: {
    display: "inline-block",
    marginTop: "10px",
    textDecoration: "none",
    color: "#1c1c1f",
    fontWeight: 700,
  },

  menuGrid: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },

  menuCard: {
    backgroundColor: "#fff",
    borderRadius: "24px",
    padding: "24px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  },

  menuTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    marginBottom: "12px",
  },

  price: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#b87333",
    whiteSpace: "nowrap",
  },

  galleryGrid: {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "22px",
  },

  galleryCard: {
    backgroundColor: "#fff",
    borderRadius: "26px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  },

  galleryImage: {
    width: "100%",
    height: "320px",
    objectFit: "cover",
    display: "block",
  },

  contactBox: {
    maxWidth: "820px",
    margin: "0 auto",
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: "28px",
    padding: "40px 24px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  },

  contactText: {
    fontSize: "18px",
    lineHeight: 1.7,
    color: "#444",
    margin: "8px 0",
  },

  footer: {
    textAlign: "center",
    padding: "28px 20px 40px",
    color: "#777",
    fontSize: "14px",
  },
};
