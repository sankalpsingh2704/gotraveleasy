import { SERVICES } from '@/lib/content';
import { SectionHead } from './SectionHead';

export function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <SectionHead icon="fa-sparkles" eyebrow="What we offer" title="Everything your journey needs, in one place">
          Whether you're flying solo or rolling with your crew, we handle the planning so you can focus on the
          memories.
        </SectionHead>
        <div className="svc-grid">
          {SERVICES.map((svc) => (
            <div className="svc-card" key={svc.title}>
              <div className={`svc-ic ${svc.variant}`}>
                <i className={`fa-solid ${svc.icon}`}></i>
              </div>
              <h3>{svc.title}</h3>
              <p>{svc.text}</p>
              <a href={svc.link.href} className="more">
                {svc.link.label} <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
