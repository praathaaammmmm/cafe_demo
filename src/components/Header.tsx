import { useState } from 'react';
import type { CafeData } from '../types';
import { OrderLinks } from './OrderLinks';

interface HeaderProps {
  cafeName: string;
  order: CafeData['order'];
}

const NAV_LINKS = [
  { label: 'Food', href: '#food' },
  { label: 'Our Story', href: '#story' },
  { label: 'Visit', href: '#visit' },
];

export function Header({ cafeName, order }: HeaderProps) {
  const [orderOpen, setOrderOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="wordmark" href="#top">
          {cafeName}
        </a>

        <nav className="site-nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} className="site-nav__link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <div className="order-online">
            <button
              type="button"
              className="btn btn-secondary"
              aria-expanded={orderOpen}
              aria-controls="order-online-panel"
              onClick={() => setOrderOpen((open) => !open)}
            >
              Order online
            </button>
            <div className="order-online__panel" id="order-online-panel" hidden={!orderOpen}>
              <OrderLinks order={order} />
            </div>
          </div>
          <a className="btn btn-primary" href="#visit">
            Find us
          </a>
        </div>
      </div>
    </header>
  );
}
