import { useEffect, useState } from 'react';
import { company } from '../content';

type Routes = Record<string, string>;

export function Brand() {
  return <a className="wordmark" href="/" aria-label="Alijaj Hauswartung GmbH – Startseite">
    <svg className="mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M6 25.2 23.8 9.8l18.4 15.4" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.4 23.5v15h21.2v-15" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 31.5c-5.6-4.6-5.7-9.7-.8-12.5 3.1 2.1 3.8 5.2 1.8 8.2 3.3-2.4 6.7-1.7 8.2.1-1.5 4.8-5.2 6.1-9.2 4.2Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span className="wordmark-copy"><span className="wordmark-name">ALIJAJ</span><span className="wordmark-sub">Hauswartung GmbH</span></span>
  </a>;
}

const navItems = [
  { label: 'Startseite', path: '/' },
  { label: 'Hauswartungen', path: '/Hauswartungen' },
  { label: 'Reinigungen', path: '/Reinigungen' },
  { label: 'Gartenunterhalt', path: '/Gartenunterhalt' },
];

export function Header({ currentPath, routes }: { currentPath: string; routes: Routes }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const close = () => setOpen(false);
  const isCurrent = (itemPath: string) => currentPath === itemPath;

  return <header className="site-header">
    <div className="container header-inner">
      <Brand />
      <nav className="desktop-nav" aria-label="Hauptnavigation">
        {navItems.map((item) => <a key={item.path} href={item.path} aria-current={isCurrent(item.path) ? 'page' : undefined}>{item.label}</a>)}
        <a href={`${routes.home}#kontakt`}>Kontakt</a>
      </nav>
      <a className="btn btn-primary header-cta" href={`tel:${company.phoneLink}`}>Jetzt anrufen <span className="arrow" aria-hidden="true">↗</span></a>
      <button className="menu-button" type="button" aria-label={open ? 'Menü schliessen' : 'Menü öffnen'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
        {open ? <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg> : <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>}
      </button>
      <nav id="mobile-navigation" className={`mobile-nav${open ? ' is-open' : ''}`} aria-label="Mobile Navigation" aria-hidden={!open}>
        {navItems.map((item) => <a key={item.path} href={item.path} aria-current={isCurrent(item.path) ? 'page' : undefined} tabIndex={open ? 0 : -1} onClick={close}>{item.label}</a>)}
        <a href="/Uber-uns/Impressum" tabIndex={open ? 0 : -1} onClick={close}>Impressum & Cookies</a>
        <a className="mobile-phone" href={`tel:${company.phoneLink}`} tabIndex={open ? 0 : -1} onClick={close}>{company.phone} · Anrufen</a>
      </nav>
    </div>
  </header>;
}
