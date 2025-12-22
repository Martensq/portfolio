export default function Section({ title, children }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-10">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      {children}
    </section>
  );
}
