import { DESTINATIONS } from '@/lib/content';
import { DestinationCard } from './DestinationCard';
import { SectionHead } from './SectionHead';

export function Destinations() {
  return (
    <section className="dest" id="destinations">
      <div className="container">
        <SectionHead icon="fa-earth-asia" eyebrow="Trending now" title="Destinations travelers love">
          Handpicked places with the best experiences, stays and value this season.
        </SectionHead>
        <div className="dest-grid">
          {DESTINATIONS.map((dest) => (
            <DestinationCard key={dest.name} {...dest} />
          ))}
        </div>
      </div>
    </section>
  );
}
