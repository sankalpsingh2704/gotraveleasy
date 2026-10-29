import { BRAND } from '@/lib/constants';
import { FOOTER_COLUMNS, SOCIAL_LINKS } from '@/lib/content';
import { Brand } from './Brand';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="foot-grid">
          <div>
            <Brand />
            <p className="about">{BRAND.about}</p>
            <div className="foot-social">
              {SOCIAL_LINKS.map((s) => (
                <a href="#" aria-label={s.label} key={s.label}>
                  <i className={`fa-brands ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="foot-bottom">
          <span>© 2026 GoTravelEasy.in — All rights reserved.</span>
          <span>
            Made with <i className="fa-solid fa-heart" style={{ color: '#ff5a5f' }}></i> in India
          </span>
        </div>
      </div>
    </footer>
  );
}
