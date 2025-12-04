export const projects = [
  {
    id: 1,
    name: "Planify",
    image: "/planify/logo.png",
  },
  {
    id: 2,
    name: "Usitech",
    image: "/usitech/logo.png",
  },
  {
    id: 3,
    name: "UsiAdmin",
    image: "/usiadmin/logo.png",
  },
  {
    id: 4,
    name: "Booking",
    image: "/booking/logo.png",
  },
  {
    id: 5,
    name: "OwnMeal",
    image: "/ownmeal/logo.png",
  },
];

export const detailProjects = [
  {
    id: 1,
    name: "Planify",
    tagline: "A lightweight task planner built with Expo for simplicity and productivity.",
    description:
      "Planify is a simple and intuitive mobile task planner designed to help users organize daily work more effectively. The app focuses on speed, clarity, and a clean experience.",
    overview_tech: "React Native • Expo • TypeScript",

    core: [
      "Task creation & daily planning",
      "Smart reminders",
      "Lightweight UI, optimized for mobile",
      "Local storage syncing"
    ],

    // Role: Frontend only
    tech: {
      frontend: ["React Native", "Expo", "NativeWind", "TypeScript"],
      backend: [],
      devops: []
    },

    demoVideo: "/planify/asset.mp4"
  },

  {
    id: 2,
    name: "UsiTech",
    tagline: "A workflow automation marketplace built with Next.js 15 and FastAPI.",
    description:
      "UsiTech is a platform for browsing, exploring, filtering, and purchasing automation workflows. It includes workflow pages, shopping cart, checkout, and real-time updates via FastAPI.",
    overview_tech: "Next.js • TypeScript • FastAPI",

    core: [
      "Workflow browsing, filtering, and detail pages",
      "Cart & checkout",
      "User accounts & order history",
      "Realtime sync with FastAPI"
    ],

    // Role: Fullstack (both FE & BE & DevOps)
    tech: {
      frontend: ["Next.js 15", "React", "TailwindCSS", "shadcn/ui", "Redux"],
      backend: ["PostgreSQL", "FastAPI"],
      devops: ["WebSocket", "Cloudinary", "Cloudflare"]
    },

    demoVideo: "/usitech/asset.mp4",
    url: "https://app.usitech.io.vn"
  },

  {
    id: 3,
    name: "UsiAdmin",
    tagline: "An admin dashboard for managing workflows, users, and system operations.",
    description:
      "UsiAdmin is the management dashboard for the UsiTech ecosystem. It handles system analytics, workflow management, accounts, and platform operations.",
    overview_tech: "Next.js • TypeScript • PostgreSQL",

    core: [
      "Workflow & system management",
      "User & admin accounts",
      "Order and payment tracking",
      "Content and service configuration"
    ],

    // Role: Fullstack (both FE & BE & DevOps)
    tech: {
      frontend: ["Next.js 15", "React", "TailwindCSS", "shadcn/ui", "Redux"],
      backend: ["PostgreSQL", "FastAPI"],
      devops: ["WebSocket", "Cloudinary", "Cloudflare"]
    },

    demoVideo: "/usiadmin/asset.mp4",
    url: "https://admin.usitech.io.vn"
  },

  {
    id: 4,
    name: "Booking Photo",
    tagline: "A platform for browsing and booking photography packages.",
    description:
      "Booking Photo allows users to explore photography packages, check availability, compare pricing, and place bookings seamlessly.",
    overview_tech: "Next.js • TailwindCSS • TypeScript",

    core: [
      "Photo package browsing",
      "Availability checking",
      "Booking management",
      "User authentication & history"
    ],

    // Role: Frontend only
    tech: {
      frontend: ["Next.js", "React", "TypeScript", "TailwindCSS"],
      backend: [],
      devops: []
    },

    demoVideo: "/booking/asset.mp4"
  },

  {
    id: 5,
    name: "OwnMeal",
    tagline: "Personalized mobile calorie and meal tracking app.",
    description:
      "OwnMeal is a modern mobile app designed to help users effortlessly track their calorie intake, maintain detailed food diaries, and create customized meals tailored to individual health goals. With powerful analytics and intuitive features, it supports sustainable healthy living.",
    overview_tech: "Expo • React Native • NativeWind",

    core: [
      "Advanced calorie & nutrition tracking",
      "Smart meal logging and personalized suggestions",
      "Flexible goal customization and management",
      "Sleek, mobile-first user interface"
    ],

    // Role: Frontend only
    tech: {
      frontend: ["Expo", "React Native", "TypeScript", "NativeWind"],
      backend: [],
      devops: []
    },

    demoVideo: "/ownmeal/asset.mp4"
  }
];


export type DetailProject = (typeof detailProjects)[number];
