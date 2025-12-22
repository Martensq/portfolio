export const projectsByLang = {
  en: {
    main: [
      {
        title: "GameVault",
        subtitle: "Fullstack app • Auth, API, Database",
        demo: "https://martensq.github.io/gamevault/",
        code: "https://github.com/Martensq/gamevault",
        image: "projects/gamevault.png",
        gif: "projects/gamevault.gif",
        bullets: [
          "Built a full CRUD application with JWT authentication",
          "Designed a REST API with Node.js, Prisma and PostgreSQL (Neon)",
          "Deployed front-end (GitHub Pages) and API (Render)",
        ],
      },
      {
        title: "Countries Dashboard",
        subtitle: "Data explorer UI",
        demo: "https://martensq.github.io/countries-dashboard/",
        code: "https://github.com/Martensq/countries-dashboard",
        image: "projects/countries-dashboard.png",
        gif: "projects/countries-dashboard2.png",
        bullets: [
          "Consumed a public REST API with pagination and stats",
          "Implemented table and card views with shared logic",
          "Handled loading, empty and error states cleanly",
        ],
      },
      {
        title: "Job Tracker",
        subtitle: "Kanban workflow & local persistence",
        demo: "https://martensq.github.io/job-tracker/",
        code: "https://github.com/Martensq/job-tracker",
        image: "projects/job-tracker.png",
        gif: "projects/job-tracker.gif",
        bullets: [
          "Built a Kanban workflow to track job applications",
          "Smooth UX: edit triggers scroll-to-form and focus",
          "Added JSON export/import for portability",
        ],
      },
      {
        title: "Project Brief Wizard",
        subtitle: "Multi-step form & validation",
        demo: "https://martensq.github.io/project-brief-wizard/",
        code: "https://github.com/Martensq/project-brief-wizard",
        image: "projects/project-brief-wizard.png",
        gif: "projects/project-brief-wizard.gif",
        bullets: [
          "Built a 4-step wizard with validation per step",
          "Persisted progress in LocalStorage (resume anytime)",
          "Exported a shareable summary + JSON download",
        ],
      },
    ],
    bonus: [
      {
        title: "PadelTime",
        subtitle: "Symfony 7 • Booking app (training project)",
        demo: "",
        code: "https://github.com/Martensq/padeltime",
        image: "projects/padeltime.png",
        gif: "projects/padeltime.gif",
        bullets: [
          "Designed relational schema and handled migrations",
          "Implemented booking logic and real constraints (availability, time slots)",
          "Worked through real-world debugging (timezone, cache, deprecated issues)",
        ],
      },
    ],
  },

  fr: {
    main: [
      {
        title: "GameVault",
        subtitle: "Application fullstack • Auth, API, Base de données",
        demo: "https://martensq.github.io/gamevault/",
        code: "https://github.com/Martensq/gamevault",
        image: "/projects/gamevault.png",
        gif: "/projects/gamevault.gif",
        bullets: [
          "Application CRUD complète avec authentification JWT",
          "API REST Node.js + Prisma + PostgreSQL (Neon)",
          "Déploiement front (GitHub Pages) + API (Render)",
        ],
      },
      {
        title: "Countries Dashboard",
        subtitle: "Interface data explorer",
        demo: "https://martensq.github.io/countries-dashboard/",
        code: "https://github.com/Martensq/countries-dashboard",
        image: "projects/countries-dashboard.png",
        gif: "projects/countries-dashboard2.png",
        bullets: [
          "Consommation d’une API REST publique avec pagination et stats",
          "Deux modes d’affichage (table / cards) avec logique partagée",
          "Gestion propre des états loading/empty/error",
        ],
      },
      {
        title: "Job Tracker",
        subtitle: "Kanban & persistance locale",
        demo: "https://martensq.github.io/job-tracker/",
        code: "https://github.com/Martensq/job-tracker",
        image: "projects/job-tracker.png",
        gif: "projects/job-tracker.gif",
        bullets: [
          "Kanban pour suivre les candidatures",
          "UX fluide : l’édition déclenche scroll vers le formulaire + focus",
          "Export / import JSON pour la portabilité",
        ],
      },
      {
        title: "Project Brief Wizard",
        subtitle: "Wizard multi-étapes & validation",
        demo: "https://martensq.github.io/project-brief-wizard/",
        code: "https://github.com/Martensq/project-brief-wizard",
        image: "projects/project-brief-wizard.png",
        gif: "projects/project-brief-wizard.gif",
        bullets: [
          "Wizard 4 étapes avec validation par étape",
          "Persistance LocalStorage (reprise du formulaire)",
          "Export résumé copiable + téléchargement JSON",
        ],
      },
    ],
    bonus: [
      {
        title: "PadelTime",
        subtitle: "Symfony 7 • App de réservation (projet de formation)",
        demo: "",
        code: "https://github.com/Martensq/padeltime",
        image: "projects/padeltime.png",
        gif: "projects/padeltime.gif",
        bullets: [
          "Conception du schéma relationnel et gestion des migrations",
          "Implémentation de la logique de réservation et contraintes réelles (disponibilités, créneaux)",
          "Debug sur des problématiques concrètes (timezone, cache, deprecated)",
        ],
      },
    ],
  },
};
