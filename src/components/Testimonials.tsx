import { TESTIMONIALS } from '@/lib/content';
import { SectionHead } from './SectionHead';

export function Testimonials() {
  return (
    <section className="testi">
      <div className="container">
        <SectionHead icon="fa-heart" eyebrow="Loved by travelers" title="Real journeys, real smiles" />
        <div className="testi-grid">
          {TESTIMONIALS.map((t) => (
            <div className="t-card" key={t.name}>
              <div className="stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </div>
              <p>"{t.quote}"</p>
              <div className="t-who">
                <img src={t.avatar} alt={t.alt} />
                <div>
                  <div className="nm">{t.name}</div>
                  <div className="rl">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
