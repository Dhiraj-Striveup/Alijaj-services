import { company, legal } from '../content';

const sections = [
  { id: 'impressum', label: 'Impressum' },
  { id: 'haftung', label: 'Haftungsausschluss' },
  { id: 'links', label: 'Links' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'credits', label: 'Bild & Gestaltung' },
];

export function LegalPage() {
  return <>
    <section className="legal-hero"><div className="container"><span className="eyebrow">Gut zu wissen</span><h1>Impressum & Cookies</h1></div></section>
    <section className="container section-pad legal-layout">
      <nav className="legal-nav" aria-label="Inhaltsübersicht">{sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.label}</a>)}</nav>
      <article className="legal-content">
        <section className="legal-block" id="impressum"><h2>Copyright by: (Website-Inhaber)</h2><p className="legal-address">{legal.owner.map((line) => <span key={line}>{line}<br /></span>)}<br />Tel. {company.phone}<br /><a href={`mailto:${company.email}`}>{company.email}</a></p></section>
        <section className="legal-block" id="haftung"><h2>Haftungsausschluss</h2>{legal.disclaimer.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
        <section className="legal-block" id="links"><h2>Haftung für Links</h2><p>{legal.linksDisclaimer}</p></section>
        <section className="legal-block" id="cookies"><h2>Cookies</h2><p>{legal.cookies}</p><p>Informationen gängiger Browserhersteller zur Deaktivierung und Verwaltung von Cookies:</p><ul>{legal.browserLinks.map((link) => <li key={link.label}><a href={link.href} target="_blank" rel="noreferrer">{link.label}</a></li>)}</ul><p>{legal.cookiesCaveat}</p></section>
        <section className="legal-block" id="credits"><h2>Bild</h2>{legal.imageCredits.map((credit) => <p key={credit}>{credit}</p>)}<h2>Design and Programming by:</h2><p><strong>entex GmbH</strong><br />Firststrasse 15<br />CH-8835 Feusisberg<br /><br />Tel. <a href="tel:+41447876111">{legal.designerPhone}</a><br /><a href={`mailto:${legal.designerEmail}`}>{legal.designerEmail}</a><br /><a href={legal.designerWebsite} target="_blank" rel="noreferrer">www.entex.ch</a></p></section>
      </article>
    </section>
  </>;
}
