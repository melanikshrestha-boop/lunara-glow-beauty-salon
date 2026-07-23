/** Real salon copy + menu — no marketing fog. */

export const lunara = {
  name: "Lunara Glow Beauty Salon",
  shortName: "Lunara Glow",
  address: "38-02 Broadway, Astoria, NY 11103",
  phone: "(347) 242-2127",
  phoneDial: "3472422127",
  email: "lunaraglow@gmail.com",
  instagram: "@lunaraglow_astoria",
  yelp: "https://www.yelp.com/biz/queens-beauty-parlor-astoria",
  hours: "Mon–Sun · 8 a.m.–9 p.m.",
  offer: "First visit: 20% off",
  loyalty:
    "Each visit +1 point (1→10). At 10: free brow threading, then reset.",
  services: [
    {
      id: "waxing",
      title: "Waxing",
      note: "Face, body, bikini.",
      items: [
        { name: "Brow Wax", price: "$40", time: "15 min" },
        { name: "Brow Tweeze", price: "$50", time: "20 min" },
        { name: "Brow Threading", price: "$25", time: "15 min" },
        { name: "Lip", price: "$15", time: "5 min" },
        { name: "Chin", price: "$15", time: "10 min" },
        { name: "Underarms", price: "$25", time: "15 min" },
        { name: "Half Arm", price: "$55", time: "20 min" },
        { name: "Full Arm", price: "$70", time: "30 min" },
        { name: "Lower Leg", price: "$55", time: "30 min" },
        { name: "Upper Leg", price: "$70", time: "30 min" },
        { name: "Bikini", price: "$35+", time: "20 min" },
      ],
    },
    {
      id: "brows",
      title: "Brows",
      note: "Shape, tint, lamination.",
      items: [
        { name: "Brow Tint", price: "$30", time: "15 min" },
        { name: "Brow Lamination + Shaping", price: "$100", time: "45 min" },
        {
          name: "Brow Lamination + Shaping + Color",
          price: "$125",
          time: "60 min",
        },
        { name: "Brow Center", price: "$10", time: "5 min" },
      ],
    },
    {
      id: "lashes",
      title: "Lashes",
      note: "Lift, tint, extensions.",
      items: [
        { name: "Lash Lift + Tint", price: "$70", time: "60 min" },
        { name: "Lash Tint", price: "$45", time: "20 min" },
        { name: "Classic Lash Extensions", price: "$150", time: "120 min" },
        { name: "Lash Clusters", price: "Varies", time: "30–45 min" },
      ],
    },
    {
      id: "facials",
      title: "Facials",
      note: "From express to full resets.",
      items: [
        {
          name: "Express Facial",
          price: "$75",
          time: "30 min",
          description: "Quick cleanse, light polish, hydrate, SPF.",
        },
        {
          name: "Classic Facial",
          price: "$145",
          time: "60 min",
          description: "Full facial with steam, optional extractions, massage, mask.",
        },
        {
          name: "Hydra Dew",
          price: "$80",
          time: "50 min",
          description: "Hydration-focused. Dewy finish, not sticky.",
        },
        {
          name: "Hydra Medic",
          price: "$95",
          time: "50 min",
          description: "Clarifying path for congestion without stripping.",
        },
        {
          name: "Gold / Deep Clean",
          price: "$65",
          time: "45 min",
          description: "Deeper clean for buildup and dull skin.",
        },
        {
          name: "Seaweed",
          price: "$80",
          time: "50 min",
          description: "Mineral / algae calm for stressed skin.",
        },
        {
          name: "Herbal Facial",
          price: "$45",
          time: "30 min",
          description: "Gentle botanical option. Easy on sensitive days.",
        },
        {
          name: "Eye Optimum",
          price: "$35",
          time: "30 min",
          description: "Eye-area only. Tired eyes, short visit.",
        },
        {
          name: "Four Layer",
          price: "$80",
          time: "50 min",
          description: "Layered cleanse → polish → massage → mask.",
        },
        {
          name: "Biolight Anti-Aging",
          price: "$100",
          time: "50 min",
          description: "Brighten + smooth. Even finish.",
        },
      ],
    },
  ],
  reviews: [
    {
      quote: "Bima did an amazing job and very kind.",
      author: "Estefanie Z. · Yelp",
    },
    {
      quote: "Bima was wonderful. I am so happy and satisfied.",
      author: "Shraddha S. · Yelp",
    },
    {
      quote: "The service was quick, gentle, and exactly what I wanted.",
      author: "Client · Yelp",
    },
  ],
} as const;

export type ServiceGroup = (typeof lunara.services)[number];
