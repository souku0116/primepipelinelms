export function PageShell({ title, subtitle, actions, children }) {
  return (
    <div>
      <header className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
                {subtitle}
              </p>
            ) : null}
            {actions ? <div className="mt-8">{actions}</div> : null}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(60%_60%_at_70%_20%,#60a5fa_0%,transparent_55%)]" />
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="space-y-10">{children}</div>
      </main>
    </div>
  );
}
