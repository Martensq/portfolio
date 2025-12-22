import { useLang } from "../i18n/LangContext";

export default function Hero() {
  const { lang, setLang, t } = useLang();

  return (
    <header className="mx-auto max-w-5xl px-6 pt-14 pb-10">
      <div className="relative overflow-hidden rounded-3xl bg-white/70 p-8 shadow-sm ring-1 ring-slate-200 backdrop-blur">
        {/* soft background blob */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                {t.hero.badge}
              </span>

              {/* language toggle */}
              <div className="ml-0 md:ml-auto">
                <LangToggle lang={lang} setLang={setLang} />
              </div>
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              {t.hero.title}
            </h1>

            <p className="mt-3 text-lg font-semibold text-slate-800">
              {t.hero.subtitle}
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-700">
              {t.hero.intro} <span className="text-slate-600">{t.hero.intro2}</span>
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="#projects">{t.hero.ctaProjects}</ButtonLink>

              <ButtonLink
                href="https://github.com/Martensq"
                variant="secondary"
                external
              >
                {t.hero.ctaGithub}
              </ButtonLink>

              <ButtonLink
                href="https://www.linkedin.com/in/quentin-martens-624361230/"
                variant="secondary"
                external
              >
                {t.hero.ctaLinkedin}
              </ButtonLink>
            </div>

            <div className="mt-7">
              <div className="text-xs font-semibold text-slate-600">
                {t.hero.stackLabel}
              </div>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-700">
                <Pill>React</Pill>
                <Pill>Vite</Pill>
                <Pill>Tailwind</Pill>
                <Pill>Node.js</Pill>
                <Pill>Express</Pill>
                <Pill>Prisma</Pill>
                <Pill>PostgreSQL</Pill>
                <Pill>Git/GitHub</Pill>
                <Pill>Symfony</Pill>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[340px]">
            <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-slate-200 backdrop-blur">
              <div className="text-sm font-semibold text-slate-900">
                {t.hero.featured}
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-center justify-between gap-3">
                  <span className="font-medium">GameVault</span>
                  <a
                    href="https://martensq.github.io/game-vault/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    demo
                  </a>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span className="font-medium">Job Tracker</span>
                  <a 
                    href="https://martensq.github.io/job-tracker/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    demo
                  </a>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span className="font-medium">Project Brief Wizard</span>
                  <a 
                    href="https://martensq.github.io/project-brief-wizard/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    demo
                  </a>
                </li>
              </ul>

              <div className="mt-5 rounded-xl bg-slate-50 p-3 text-xs text-slate-600 ring-1 ring-slate-200">
                {t.hero.based}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function LangToggle({ lang, setLang }) {
  return (
    <div className="inline-flex rounded-full bg-white/70 p-1 ring-1 ring-slate-200 backdrop-blur">
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
          lang === "en" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("fr")}
        className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
          lang === "fr" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
        }`}
      >
        FR
      </button>
    </div>
  );
}

function ButtonLink({ href, children, variant = "primary", external = false }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2";

  const styles =
    variant === "primary"
      ? "bg-slate-900 text-white hover:bg-slate-800"
      : "bg-white/80 text-slate-900 ring-1 ring-slate-200 hover:bg-white";

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`${base} ${styles}`}
    >
      {children}
    </a>
  );
}

function Pill({ children }) {
  return (
    <span className="rounded-full bg-white/70 px-3 py-1 ring-1 ring-slate-200">
      {children}
    </span>
  );
}
