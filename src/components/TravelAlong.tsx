import { ALONG_MEDIA, ALONG_PERKS } from '@/lib/content';

export function TravelAlong() {
  return (
    <section className="along" id="along">
      <div className="container along-grid">
        <div className="along-text">
          <span className="crown">
            <i className="fa-solid fa-crown"></i> Premium Feature
          </span>
          <h2>
            Travel <span className="hl">Along</span> — journey with a curated circle
          </h2>
          <p className="lead">
            Our signature experience. On select dates and destinations, a limited number of handpicked travelers get to
            join a guided journey — travelling <em>along with us</em>. Real connections, shared adventures, zero
            planning stress.
          </p>
          <ul className="perks">
            {ALONG_PERKS.map((perk) => (
              <li key={perk.title}>
                <i className={`fa-solid ${perk.icon}`}></i>
                <div>
                  <b>{perk.title}</b>
                  <span>{perk.text}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="hero-cta">
            <a href="#" className="btn btn-coral btn-lg">
              <i className="fa-solid fa-ticket"></i> Request an invite
            </a>
            <a href="#" className="btn btn-light btn-lg">
              View upcoming departures
            </a>
          </div>
        </div>
        <div className="along-visual">
          <div className="photo">
            <img src={ALONG_MEDIA.photo} alt="Travel Along group journey" />
          </div>
          <div className="seats-chip">
            <i className="fa-solid fa-chair"></i> Only 6 seats left
          </div>
          <div className="host-chip">
            <img src={ALONG_MEDIA.host} alt="Trip host" />
            <div>
              <div className="hn">Hosted journey</div>
              <div className="hr">
                <i className="fa-solid fa-star"></i> 4.95 · Ladakh · Nov 18–24
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
