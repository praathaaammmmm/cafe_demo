import type { CafeData } from '../types';
import { OrderLinks } from './OrderLinks';

interface FooterProps {
  cafeName: string;
  social: CafeData['social'];
  order: CafeData['order'];
}

const NAV_LINKS = [
  { label: 'Food', href: '#food' },
  { label: 'Our Story', href: '#story' },
  { label: 'Visit', href: '#visit' },
];

export function Footer({ cafeName, social, order }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <p className="footer__wordmark">{cafeName}</p>
          </div>

          <nav aria-label="Footer">
            <p className="footer__heading">Explore</p>
            <div className="footer__nav">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <div>
            <p className="footer__heading">Follow</p>
            <div className="footer__social">
              {social.map((item) =>
                item.url ? (
                  <a
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span key={item.label} className="footer__social-placeholder">
                    {item.label} — link coming soon
                  </span>
                ),
              )}
            </div>

            <p className="footer__heading" style={{ marginTop: '1.5rem' }}>
              Order online
            </p>
            <OrderLinks order={order} className="footer__order" />
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            Pitch prototype — content and imagery are placeholders until finalised
            with the café owner.
          </p>
        </div>
      </div>
    </footer>
  );
}
