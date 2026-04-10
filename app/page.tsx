"use client";
import type { CSSProperties } from "react";

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
      title: "Green Curry",
      desc: "Creamy Thai curry with aromatic herbs and smooth spice.",
      price: "€12.50",
    },
    {
      title: "Fried Rice",
      desc: "Wok-fried rice with vegetables, egg, and your choice of protein.",
      price: "€10.90",
    },
    {
      title: "Tom Yum",
      desc: "Hot and sour Thai soup with bold citrus and herbal notes.",
      price: "€8.90",
    },
    {
      title: "Mango Sticky Rice",
      desc: "Sweet mango served with soft sticky rice and coconut.",
      price: "€6.90",
    },
    {
      title: "Thai Iced Tea",
      desc: "Refreshing creamy tea with a smooth sweet finish.",
      price: "€4.50",
    },
  ];

  const gallery = [
    "/food1.jpg",
    "/food2.jpg",
    "/food3.jpg",
    "/food4.jpg",
    "/food5.jpg",
    "/food6.jpg",
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
        <div style={styles.heroTextWrap}>
          <div style={styles.badge}>Thai & Spanish Fusion • Barcelona</div>
          <h1 style={styles.heroTitle}>
            Fresh food.
            <br />
            Simple style.
            <br />
            Two locations.
          </h1>
          <p style={styles.heroText}>
            Discover Iberico Thai in Barcelona with one shared menu, two convenient
            locations, and a modern casual dining experience inspired by Thai flavors
            and a vibrant city atmosphere.
          </p>

          <div style={styles.heroButtons}>
            <a href="#menu" style={styles.primaryBtn}>View Menu</a>
            <a href="#locations" style={styles.secondaryBtn}>Choose Location</a>
          </div>
        </div>

        <div style={styles.heroCard}>
          <div style={styles.heroImagePlaceholder}>
            Add hero food image here
          </div>
        </div>
      </section>

      <section id="locations" style={styles.section}>
        <div style={styles.sectionIntro}>
          <span style={styles.sectionLabel}>Our Locations</span>
          <h2 style={styles.sectionTitle}>Two places, one menu, same taste</h2>
          <p style={styles.sectionText}>
            Visit the branch that suits you best. Both locations offer the same menu,
            fast service, and the Iberico Thai experience.
          </p>
        </div>

        <div style={styles.locationGrid}>
          {locations.map((loc, index) => (
            <div key={index} style={styles.locationCard}>
              <div style={styles.locationTop}>
                <div>
                  <h3 style={styles.locationTitle}>{loc.name}</h3>
                  <p style={styles.locationSubtitle}>{loc.subtitle}</p>
                </div>
                <div style={styles.locationDot}></div>
              </div>

              <div style={styles.locationInfo}>
                <p style={styles.locationLine}><strong>Address:</strong> {loc.address}</p>
                <p style={styles.locationLine}><strong>Phone:</strong> {loc.phone}</p>
                <p style={styles.locationLine}><strong>Hours:</strong> {loc.hours}</p>
              </div>

              <div style={styles.locationButtons}>
                <a href={`tel:${loc.phone.replace(/\s/g, "")}`} style={styles.primarySmallBtn}>
                  Call
                </a>
                <a href={loc.map} target="_blank" rel="noreferrer" style={styles.secondarySmallBtn}>
                  Route
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="menu" style={styles.altSection}>
        <div style={styles.sectionIntroCenter}>
          <span style={styles.sectionLabel}>Menu Preview</span>
          <h2 style={styles.sectionTitle}>Popular dishes everyone loves</h2>
          <p style={styles.sectionTextCenter}>
            A simple preview of your shared menu. Later we can expand this into
            full categories like noodles, rice, curry, soups, drinks, and desserts.
          </p>
        </div>

        <div style={styles.menuGrid}>
          {dishes.map((dish, index) => (
            <div key={index} style={styles.menuCard}>
              <div style={styles.menuImagePlaceholder}>Food Image</div>
              <div style={styles.menuContent}>
                <div style={styles.menuTop}>
                  <h3 style={styles.menuTitle}>{dish.title}</h3>
                  <span style={styles.menuPrice}>{dish.price}</span>
                </div>
                <p style={styles.menuDesc}>{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.featureBox}>
          <div style={styles.featureLeft}>
            <span style={styles.sectionLabel}>Why Choose Us</span>
            <h2 style={styles.sectionTitle}>Fresh, fast, and easy to enjoy</h2>
          </div>

          <div style={styles.featureRight}>
            <div style={styles.featureItem}>
              <h4 style={styles.featureTitle}>Fresh ingredients</h4>
              <p style={styles.featureText}>
                Balanced flavors, colorful presentation, and simple food people want
                to come back for.
              </p>
            </div>
            <div style={styles.featureItem}>
              <h4 style={styles.featureTitle}>Two convenient spots</h4>
              <p style={styles.featureText}>
                Great for tourists, locals, and anyone exploring Barcelona.
              </p>
            </div>
            <div style={styles.featureItem}>
              <h4 style={styles.featureTitle}>Shared menu</h4>
              <p style={styles.featureText}>
                No confusion. Same dishes, same quality, whichever location you choose.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" style={styles.altSection}>
        <div style={styles.sectionIntroCenter}>
          <span style={styles.sectionLabel}>Gallery</span>
          <h2 style={styles.sectionTitle}>Food and atmosphere</h2>
          <p style={styles.sectionTextCenter}>
            Replace these placeholders with real photos of dishes, drinks, and your restaurant.
          </p>
        </div>

        <div style={styles.galleryGrid}>
          {gallery.map((img, index) => (
            <div key={index} style={styles.galleryItem}>
              <div style={styles.galleryPlaceholder}>Photo {index + 1}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={styles.section}>
        <div style={styles.contactBox}>
          <div style={styles.contactLeft}>
            <span style={styles.sectionLabel}>Contact</span>
            <h2 style={styles.sectionTitle}>Come visit Iberico Thai</h2>
            <p style={styles.sectionText}>
              Two locations in Barcelona, one simple experience. Check the menu,
              choose your nearest branch, and enjoy the food.
            </p>
          </div>

          <div style={styles.contactRight}>
            {locations.map((loc, index) => (
              <div key={index} style={styles.contactCard}>
                <h3 style={styles.contactCardTitle}>{loc.name}</h3>
                <p style={styles.contactLine}>{loc.address}</p>
                <p style={styles.contactLine}>{loc.phone}</p>
                <p style={styles.contactLine}>{loc.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2026 Iberico Thai. All rights reserved.</p>
      </footer>
    </main>
  );
}

const styles = {
  page: {
    backgroundColor: "#f8f6f2",
    color: "#1e1e1e",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    minHeight: "100vh",
  },

  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: "rgba(248, 246, 242, 0.92)",
    backdropFilter: "blur(12px)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
  },

  logo: {
    fontSize: "18px",
    fontWeight: 700,
    letterSpacing: "0.12em",
  },

  nav: {
    display: "flex",
    gap: "24px",
    flexWrap: "wrap",
  },

  navLink: {
    textDecoration: "none",
    color: "#222",
    fontSize: "15px",
    fontWeight: 500,
  },

  hero: {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: "40px",
    alignItems: "center",
    padding: "80px 40px 60px",
    maxWidth: "1280px",
    margin: "0 auto",
  },

  heroTextWrap: {
    maxWidth: "650px",
  },

  badge: {
    display: "inline-block",
    backgroundColor: "#efe4d4",
    color: "#9a5e24",
    padding: "10px 16px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: 600,
    marginBottom: "20px",
  },

  heroTitle: {
    fontSize: "64px",
    lineHeight: 1.02,
    margin: "0 0 24px",
    fontWeight: 700,
    letterSpacing: "-0.04em",
  },

  heroText: {
    fontSize: "18px",
    lineHeight: 1.7,
    color: "#5d5d5d",
    marginBottom: "28px",
    maxWidth: "580px",
  },

  heroButtons: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    backgroundColor: "#d98d3f",
    color: "#fff",
    padding: "14px 24px",
    borderRadius: "999px",
    fontWeight: 600,
    boxShadow: "0 10px 30px rgba(217, 141, 63, 0.25)",
  },

  secondaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    backgroundColor: "#fff",
    color: "#222",
    padding: "14px 24px",
    borderRadius: "999px",
    fontWeight: 600,
    border: "1px solid rgba(0,0,0,0.08)",
  },

  heroCard: {
    backgroundColor: "#fff",
    borderRadius: "28px",
    padding: "18px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
  },

  heroImagePlaceholder: {
    minHeight: "520px",
    borderRadius: "22px",
    background:
      "linear-gradient(135deg, #f3e8db 0%, #f7efe7 50%, #ece6dd 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#8c7d6d",
    fontSize: "18px",
    fontWeight: 600,
  },

  section: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "40px 40px 80px",
  },

  altSection: {
    backgroundColor: "#f2eee8",
    padding: "80px 40px",
  },

  sectionIntro: {
    maxWidth: "720px",
    marginBottom: "34px",
  },

  sectionIntroCenter: {
    maxWidth: "760px",
    margin: "0 auto 34px",
    textAlign: "center",
  },

  sectionLabel: {
    display: "inline-block",
    fontSize: "14px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    color: "#b27030",
    marginBottom: "14px",
  },

  sectionTitle: {
    fontSize: "42px",
    lineHeight: 1.08,
    margin: "0 0 16px",
    fontWeight: 700,
    letterSpacing: "-0.03em",
  },

  sectionText: {
    fontSize: "17px",
    lineHeight: 1.7,
    color: "#5f5f5f",
    margin: 0,
  },

  sectionTextCenter: {
    fontSize: "17px",
    lineHeight: 1.7,
    color: "#5f5f5f",
    margin: 0,
  },

  locationGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },

  locationCard: {
    backgroundColor: "#fff",
    borderRadius: "24px",
    padding: "28px",
    boxShadow: "0 16px 40px rgba(0,0,0,0.06)",
    border: "1px solid rgba(0,0,0,0.04)",
  },

  locationTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "20px",
  },

  locationTitle: {
    fontSize: "28px",
    margin: "0 0 6px",
    fontWeight: 700,
  },

  locationSubtitle: {
    fontSize: "14px",
    color: "#8a8a8a",
    margin: 0,
  },

  locationDot: {
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    backgroundColor: "#d98d3f",
    marginTop: "8px",
  },

  locationInfo: {
    display: "grid",
    gap: "10px",
    marginBottom: "24px",
  },

  locationLine: {
    margin: 0,
    color: "#4a4a4a",
    lineHeight: 1.6,
  },

  locationButtons: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },

  primarySmallBtn: {
    textDecoration: "none",
    backgroundColor: "#d98d3f",
    color: "#fff",
    padding: "12px 18px",
    borderRadius: "999px",
    fontWeight: 600,
    fontSize: "14px",
  },

  secondarySmallBtn: {
    textDecoration: "none",
    backgroundColor: "#f6f1ea",
    color: "#222",
    padding: "12px 18px",
    borderRadius: "999px",
    fontWeight: 600,
    fontSize: "14px",
    border: "1px solid rgba(0,0,0,0.06)",
  },

  menuGrid: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },

  menuCard: {
    backgroundColor: "#fff",
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 16px 40px rgba(0,0,0,0.06)",
  },

  menuImagePlaceholder: {
    height: "220px",
    background:
      "linear-gradient(135deg, #ead8c4 0%, #f4e7d9 50%, #e7d2bf 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#8c7259",
    fontWeight: 600,
  },

  menuContent: {
    padding: "22px",
  },

  menuTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    marginBottom: "12px",
  },

  menuTitle: {
    margin: 0,
    fontSize: "22px",
    fontWeight: 700,
  },

  menuPrice: {
    fontSize: "15px",
    fontWeight: 700,
    color: "#b27030",
    backgroundColor: "#f8efe5",
    padding: "8px 12px",
    borderRadius: "999px",
    whiteSpace: "nowrap",
  },

  menuDesc: {
    margin: 0,
    color: "#5f5f5f",
    lineHeight: 1.7,
  },

  featureBox: {
    backgroundColor: "#fff",
    borderRadius: "28px",
    padding: "38px",
    display: "grid",
    gridTemplateColumns: "0.9fr 1.1fr",
    gap: "32px",
    boxShadow: "0 18px 50px rgba(0,0,0,0.06)",
  },

  featureLeft: {},

  featureRight: {
    display: "grid",
    gap: "18px",
  },

  featureItem: {
    padding: "18px 0",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
  },

  featureTitle: {
    margin: "0 0 8px",
    fontSize: "20px",
    fontWeight: 700,
  },

  featureText: {
    margin: 0,
    color: "#5f5f5f",
    lineHeight: 1.7,
  },

  galleryGrid: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "18px",
  },

  galleryItem: {
    backgroundColor: "#fff",
    borderRadius: "22px",
    overflow: "hidden",
    boxShadow: "0 14px 40px rgba(0,0,0,0.05)",
  },

  galleryPlaceholder: {
    height: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(135deg, #efe2d3 0%, #f7eee4 50%, #eadac8 100%)",
    color: "#8d7c6a",
    fontWeight: 600,
  },

  contactBox: {
    display: "grid",
    gridTemplateColumns: "0.9fr 1.1fr",
    gap: "28px",
    alignItems: "start",
  },

  contactLeft: {},

  contactRight: {
    display: "grid",
    gap: "20px",
  },

  contactCard: {
    backgroundColor: "#fff",
    borderRadius: "22px",
    padding: "24px",
    boxShadow: "0 14px 40px rgba(0,0,0,0.05)",
  },

  contactCardTitle: {
    margin: "0 0 12px",
    fontSize: "24px",
    fontWeight: 700,
  },

  contactLine: {
    margin: "0 0 8px",
    color: "#595959",
    lineHeight: 1.6,
  },

  footer: {
    padding: "24px 40px 40px",
    textAlign: "center",
  },

  footerText: {
    margin: 0,
    color: "#777",
    fontSize: "14px",
  },
};
