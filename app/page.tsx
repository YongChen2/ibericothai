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
          hours: "Ope
