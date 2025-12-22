export default function ProjectCard({ project, variant = "main" }) {
  const isBonus = variant === "bonus";

  return (
    <div
      className={`
        group relative overflow-hidden rounded-2xl
        bg-white/70 p-6 backdrop-blur
        ring-1 ring-slate-200
        transition
        hover:-translate-y-1 hover:shadow-lg
        ${isBonus ? "opacity-90" : ""}
      `}
    >
      {/* subtle hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -inset-20 bg-gradient-to-r from-sky-200/20 via-indigo-200/20 to-transparent blur-3xl" />
      </div>

      <div className="relative">
        {/* Media (Option C): image always, gif on hover */}
        {project.image ? (
          <div className="mb-5 overflow-hidden rounded-xl ring-1 ring-slate-200">
            <div className="relative aspect-[16/9] bg-slate-100">
              {/* Static image (default) */}
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-200 group-hover:opacity-0"
                loading="lazy"
              />

              {/* GIF on hover (optional) */}
              {project.gif ? (
                <img
                  src={project.gif}
                  alt={`${project.title} demo`}
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  loading="lazy"
                />
              ) : null}
            </div>
          </div>
        ) : null}

        {/* header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-slate-600">{project.subtitle}</p>
          </div>

          {isBonus && (
            <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
              Bonus
            </span>
          )}
        </div>

        {/* bullets */}
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          {project.bullets.map((b) => (
            <li key={b} className="leading-6">
              • {b}
            </li>
          ))}
        </ul>

        {/* actions */}
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-slate-900 underline underline-offset-4 transition hover:opacity-80"
            >
              Live demo
            </a>
          )}
          <a
            href={project.code}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-slate-900 underline underline-offset-4 transition hover:opacity-80"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
