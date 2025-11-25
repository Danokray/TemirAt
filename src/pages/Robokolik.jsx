const Robokolik = () => {
  return (
    <section className="relative isolate px-6 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-dark via-brand-dark/90 to-brand-secondary/10" />
      <div className="mx-auto flex max-w-5xl flex-col gap-10 rounded-3xl border border-white/5 bg-white/5 p-8 text-white shadow-[0_40px_120px_rgba(4,7,19,0.9)] backdrop-blur-xl">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-brand-secondary">
            Robokolik Platform
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-white">
            Adaptive ground robot for industrial inspections
          </h1>
        </div>
        <p className="text-white/80">
          Robokolik is Temir At.kz&apos;s rugged reconnaissance rover. It blends
          AI vision, independent wheel suspension, and hybrid energy modules to
          negotiate refineries, mines, and power plants with minimal downtime.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Sensor fusion',
              copy: '360° LiDAR, mmWave radar, and thermal vision feed a single autonomy stack.',
            },
            {
              title: 'Field endurance',
              copy: '18-hour swappable power cores keep missions alive beyond a single shift.',
            },
            {
              title: 'Operator link',
              copy: 'Encrypted multi-band communications give pilots instant situational awareness.',
            },
          ].map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-white/5 bg-black/30 p-5"
            >
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-sm text-white/70">{card.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Robokolik

