import { company } from '../content';
import { Brand } from './Header';

type Routes = Record<string, string>;

export function Footer({ routes }: { routes: Routes }) {
  return <footer className="site-footer">
    <div className="container footer-top">
      <div className="footer-brand">
        <Brand />
        <p>Ihre Liegenschaft, sorgfältig betreut. Hauswartung, Reinigung und Gartenunterhalt in {company.region}.</p>
      </div>
      <div className="footer-col">
        <h2>Leistungen</h2>
        <nav className="footer-links" aria-label="Leistungen im Footer">
          <a href={routes.caretaker}>Hauswartungen</a><a href={routes.cleaning}>Reinigungen</a><a href={routes.garden}>Gartenunterhalt</a>
        </nav>
      </div>
      <div className="footer-col">
        <h2>Kontakt</h2>
        <div className="footer-address">{company.name}<br />{company.addressLine}<br />{company.postalAddress}<br /><br /><a href={`tel:${company.phoneLink}`}>{company.phone}</a><br /><a href={`mailto:${company.email}`}>{company.email}</a></div>
      </div>
    </div>
    <div className="container footer-bottom">
      <span>© Alijaj Hauswartung GmbH 2026</span>
      <span><a href={routes.legal}>Impressum & Cookies</a></span>
      <span>Hauswartung für {company.region}</span>
    </div>
  </footer>;
}
