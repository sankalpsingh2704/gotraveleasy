import { HERO_BADGES } from '@/lib/content';

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <span className="eyebrow" style={{ background: 'rgba(255,255,255,.15)', color: '#fff' }}>
          <i className="fa-solid fa-location-dot"></i> Proudly made in India
        </span>
        <h1>
          Travel made <span className="hl">effortless</span> —<br />
          solo, together, or along with us.
        </h1>
        <p className="sub">
          From smart itineraries and handpicked stays to complete solo &amp; group packages — plan your perfect escape
          in minutes. Or unlock <strong>Travel Along</strong> and journey with a curated circle on select dates.
        </p>
        <div className="hero-cta">
          <a href="#packages" className="btn btn-coral btn-lg">
            <i className="fa-solid fa-compass"></i> Explore packages
          </a>
          <a href="#along" className="btn btn-light btn-lg">
            <i className="fa-solid fa-crown"></i> Discover Travel Along
          </a>
        </div>
        <div className="hero-badges">
          {HERO_BADGES.map((badge) => (
            <div className="b" key={badge.text}>
              <i className={`fa-solid ${badge.icon}`}></i> {badge.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
