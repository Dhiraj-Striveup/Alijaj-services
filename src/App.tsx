import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ServicePage } from './pages/ServicePage';
import { LegalPage } from './pages/LegalPage';
import { company, cleaningServices, gardenServices, caretakerNarrative, technicalCare, winterCare } from './content';

const routes = {
  home: '/',
  caretaker: '/Hauswartungen',
  cleaning: '/Reinigungen',
  garden: '/Gartenunterhalt',
  legal: '/Uber-uns/Impressum',
};

function CookieNotice() {
  const [visible, setVisible] = useState(() => {
    try { return localStorage.getItem('alijaj-cookie-notice') !== 'dismissed'; }
    catch { return true; }
  });
  if (!visible) return null;
  const dismiss = () => {
    try { localStorage.setItem('alijaj-cookie-notice', 'dismissed'); } catch { /* keep the notice dismissible in restricted browsers */ }
    setVisible(false);
  };
  return <aside className="cookie-notice" aria-label="Cookie-Hinweis">
    <div><span className="eyebrow">Hinweis</span><p>Wir verwenden Cookies, um die Nutzerfreundlichkeit der Internet-Seite zu verbessern. <a href={routes.legal} onClick={dismiss}>Weitere Informationen</a></p></div>
    <button className="cookie-ok" type="button" onClick={dismiss} aria-label="Cookie-Hinweis schliessen">Verstanden <span aria-hidden="true">×</span></button>
  </aside>;
}

export default function App() {
  const path = decodeURI(window.location.pathname).replace(/\/$/, '') || '/';
  useEffect(() => {
    const titles: Record<string, string> = {
      [routes.home]: 'Alijaj Hauswartung GmbH — Sorgfältig betreut',
      [routes.caretaker]: 'Hauswartungen — Alijaj Hauswartung GmbH',
      [routes.cleaning]: 'Reinigungen — Alijaj Hauswartung GmbH',
      [routes.garden]: 'Gartenunterhalt — Alijaj Hauswartung GmbH',
      [routes.legal]: 'Impressum & Cookies — Alijaj Hauswartung GmbH',
    };
    document.title = titles[path] ?? titles[routes.home];
  }, [path]);

  const services = {
    caretaker: { title: 'Hauswartungen', shortTitle: 'Hauswartung', eyebrow: 'Rundum betreut', intro: 'Mehr als Gebäudeunterhalt: Wir haben ein offenes Ohr für Mieterinnen, Mieter und Verwaltung – und kümmern uns sorgfältig um die kleinen Dinge, die ein Zuhause gut funktionieren lassen.', image: '/assets/hauswartung.webp', narrative: caretakerNarrative, groups: [{ title: 'Technische Hauswartung', items: technicalCare }, { title: 'Winterdienst', items: winterCare }] },
    cleaning: { title: 'Reinigungen', shortTitle: 'Reinigung', eyebrow: 'Sorgfalt in jedem Raum', intro: 'Sauberkeit und Hygiene schaffen die Grundlage für Wohlbefinden. Wir unterstützen Sie bei der regelmässigen Pflege ebenso wie bei besonderen Reinigungsaufgaben.', image: '/assets/reinigung.webp', groups: [{ title: 'Unsere Reinigungsleistungen', items: cleaningServices }] },
    garden: { title: 'Gartenunterhalt', shortTitle: 'Gartenunterhalt', eyebrow: 'Gepflegte Aussenräume', intro: 'Ein gepflegter Aussenbereich macht den Alltag angenehmer. Wir kümmern uns saisonal und nach Ihren Bedürfnissen um Grünflächen, Hecken und Wege.', image: '/assets/gartenunterhalt.webp', groups: [{ title: 'Unsere Gartenleistungen', items: gardenServices }] },
  };

  let page;
  if (path === routes.caretaker) page = <ServicePage service={services.caretaker} index="01" />;
  else if (path === routes.cleaning) page = <ServicePage service={services.cleaning} index="02" />;
  else if (path === routes.garden) page = <ServicePage service={services.garden} index="03" />;
  else if (path === routes.legal) page = <LegalPage />;
  else page = <Home />;

  return <>
    <a className="skip-link" href="#main">Zum Inhalt springen</a>
    <Header currentPath={path} routes={routes} />
    <main id="main">{page}</main>
    <Footer routes={routes} />
    <CookieNotice />
    <a className="mobile-call" href={`tel:${company.phoneLink}`} aria-label="Jetzt anrufen">Anrufen <span aria-hidden="true">↗</span></a>
  </>;
}
