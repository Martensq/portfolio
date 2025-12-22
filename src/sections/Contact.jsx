import Section from "../components/Section";
import { useLang } from "../i18n/LangContext";

const EMAIL = "quentin.martens@orange.fr";
const GITHUB = "https://github.com/Martensq";
const LINKEDIN = "https://www.linkedin.com/in/quentin-martens-624361230/";

export default function Contact() {
  const { t } = useLang();

  return (
    <div id="contact">
      <Section title={t.nav.contact}>
        <div className="rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-slate-200 backdrop-blur">
          <p className="text-sm text-slate-700">{t.contact.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              {t.contact.ctaEmail}
            </a>

            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white/80 px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              {t.contact.ctaGithub}
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white/80 px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              {t.contact.ctaLinkedin}
            </a>
          </div>

          <div className="mt-4 text-xs text-slate-600">{EMAIL}</div>
        </div>
      </Section>
    </div>
  );
}
