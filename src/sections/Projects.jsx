import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { projectsByLang } from "../data/projects";
import { useLang } from "../i18n/LangContext";

export default function Projects() {
  const { lang, t } = useLang();
  const data = projectsByLang[lang];

  return (
    <div id="projects">
      <Section title={t.nav.projects}>
        <p className="mb-6 text-sm text-slate-600">{t.sections.projectsIntro}</p>

        <div className="grid gap-6 md:grid-cols-2">
          {data.main.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        <div className="mt-10">
          <div className="mb-3 text-sm font-semibold text-slate-900">
            {t.nav.bonus}
          </div>
          <p className="mb-6 text-sm text-slate-600">{t.sections.bonusIntro}</p>

          <div className="grid gap-6 md:grid-cols-2">
            {data.bonus.map((p) => (
              <ProjectCard key={p.title} project={p} variant="bonus" />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
