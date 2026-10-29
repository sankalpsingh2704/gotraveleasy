import { useState } from 'react';
import { NAV_ITEMS } from '@/lib/constants';
import { Brand } from './Brand';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Brand />
        <nav>
          <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-cta">
          <a href="#" className="login">
            Log in
          </a>
          <a href="#packages" className="btn btn-primary">
            Plan my trip
          </a>
        </div>
        <button
          className="hamburger"
          type="button"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
}
