import { STEPS } from '@/lib/content';
import { SectionHead } from './SectionHead';

export function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="container">
        <SectionHead icon="fa-wand-magic-sparkles" eyebrow="Simple & seamless" title="Your trip, planned in 4 easy steps">
          From daydream to departure — we make every step effortless.
        </SectionHead>
        <div className="how-grid">
          {STEPS.map((step) => (
            <div className="how-card" key={step.title}>
              <div className="how-ic">
                <i className={`fa-solid ${step.icon}`}></i>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
