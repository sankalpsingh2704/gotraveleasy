import type { TravelPackage } from '@/lib/content';

export function PackageCard(pkg: TravelPackage) {
  return (
    <div className={pkg.featured ? 'pkg-card featured' : 'pkg-card'}>
      <div className="pkg-media">
        <span className={pkg.hot ? 'ribbon hot' : 'ribbon'}>
          {pkg.ribbonIcon && (
            <>
              <i className={`fa-solid ${pkg.ribbonIcon}`}></i>{' '}
            </>
          )}
          {pkg.ribbon}
        </span>
        <img src={pkg.image} alt={pkg.imageAlt} />
      </div>
      <div className="pkg-body">
        <div className="ptype">{pkg.type}</div>
        <h3>{pkg.title}</h3>
        <ul className="pkg-feat">
          {pkg.features.map((feature) => (
            <li key={feature}>
              <i className="fa-solid fa-check"></i> {feature}
            </li>
          ))}
        </ul>
        <div className="pkg-foot">
          <div className="price">
            <b>{pkg.price}</b> <span>/ person</span>
          </div>
          <a href="#" className={`btn ${pkg.cta.variant}`}>
            {pkg.cta.label}
          </a>
        </div>
      </div>
    </div>
  );
}
