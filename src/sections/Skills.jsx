import Section from "../components/Section";
import { useLang } from "../i18n/LangContext";

export default function Skills() {
  const { t } = useLang();
  const groups = t.skills.groups;

  return (
    <div id="skills">
      <Section title={t.nav.skills}>
        <div className="grid gap-6 md:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.name}
              className="rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-slate-200 backdrop-blur"
            >
              <div className="text-sm font-semibold text-slate-900">{g.name}</div>

              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full bg-white/70 px-3 py-1 text-xs text-slate-700 ring-1 ring-slate-200"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
