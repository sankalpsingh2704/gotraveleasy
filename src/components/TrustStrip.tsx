import { STATS } from '@/lib/content';

export function TrustStrip() {
  return (
    <section className="trust">
      <div className="container">
        <div className="trust-grid">
          {STATS.map((stat) => (
            <div className="stat" key={stat.label}>
              <div className="n">{stat.value}</div>
              <div className="l">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
