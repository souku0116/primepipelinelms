export function ContentSection({ title, children, footer }) {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">{title}</h2>
      <div className="mt-4 rich-text">{children}</div>
      {footer ? <div className="mt-6">{footer}</div> : null}
    </section>
  );
}
