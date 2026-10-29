import { PACKAGES } from '@/lib/content';
import { PackageCard } from './PackageCard';
import { SectionHead } from './SectionHead';

export function Packages() {
  return (
    <section className="packages" id="packages">
      <div className="container">
        <SectionHead icon="fa-box-open" eyebrow="Complete packages" title="Curated packages for every traveler">
          All-inclusive bundles for solo explorers, lively groups and our exclusive hosted journeys.
        </SectionHead>
        <div className="pkg-grid">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.title} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
