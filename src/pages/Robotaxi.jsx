const Robotaxi = () => {
  return (
    <section className="relative px-6 py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-brand-dark via-brand-dark/80 to-brand-primary/15" />
      <div className="mx-auto max-w-5xl space-y-8 rounded-3xl border border-white/5 bg-white/5 p-8 text-white shadow-[0_40px_120px_rgba(4,7,19,0.9)] backdrop-blur-xl">
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-secondary">
            Robotaxi Program
          </p>
          <h1 className="font-display text-4xl font-semibold">
            Autonomous urban shuttle for dense city corridors
          </h1>
        </div>
        <p className="text-white/75">
          Robotaxi pairs Temir At.kz drive-by-wire chassis with redundant
          autonomy compute to move passengers safely through Almaty, Astana, and
          beyond. The platform supports Level 4 autonomous operation with remote
          fallback supervision.
        </p>
        <ul className="grid gap-6 md:grid-cols-2">
          {[
            'Multi-layer safety envelope with predictive braking and obstacle avoidance.',
            'Passenger-first cabin featuring adaptive lighting and conversational UI.',
            'Fleet intelligence dashboard to coordinate dispatch, maintenance, and OTA updates.',
            'Compliance-ready telemetry for regulators and municipal partners.',
          ].map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-2xl border border-white/5 bg-black/30 p-5 text-sm text-white/80"
            >
              <span className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-brand-secondary to-brand-primary text-xs font-semibold text-white">
                •
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Robotaxi

