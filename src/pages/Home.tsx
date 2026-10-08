import { company, mission } from '../content';

const serviceCards = [
  { n: '01', title: 'Hauswartungen', description: 'Sorgfältiger Gebäudeunterhalt, technische Betreuung und verlässlicher Winterdienst.', href: '/Hauswartungen', image: '/manus-storage/async-images/VtStuAffEVqvmWNkW53lC5/image-2.webp', alt: 'Hauswart prüft die Beleuchtung in einem hellen Treppenhaus' },
  { n: '02', title: 'Reinigungen', description: 'Von Treppenhaus und Büro bis Fenster, Fassade und Wohnungsabgabe.', href: '/Reinigungen', image: '/manus-storage/async-images/VtStuAffEVqvmWNkW53lC5/image-3.webp', alt: 'Sorgfältige Reinigung in einem modernen Eingangsbereich' },
  { n: '03', title: 'Gartenunterhalt', description: 'Gepflegte Grünflächen, saubere Wege und Aussenräume, die einladen.', href: '/Gartenunterhalt', image: '/manus-storage/async-images/VtStuAffEVqvmWNkW53lC5/image-4.webp', alt: 'Gepflegter Gartenbereich bei einem Schweizer Wohnhaus' },
];

export function Home() {
  return <>
    <section className="hero">
      <div className="container hero-layout">
        <div className="hero-copy reveal">
          <span className="eyebrow">Persönlich. Verlässlich. Vor Ort.</span>
          <h1>Ihre Liegenschaft.<br /><em>Sorgfältig betreut.</em></h1>
          <p className="hero-description">Ein zuverlässiger Partner, der Ihre Liegenschaft individuell betreut. Mit rundum Service nach Ihren Bedürfnissen – und einem offenen Ohr für Ihre Anliegen.</p>
          <div className="hero-actions"><a className="btn btn-primary" href="#leistungen">Unsere Leistungen <span className="arrow" aria-hidden="true">↓</span></a><a className="btn btn-outline" href="tel:+41796245244">24-Stunden-Service <span className="arrow" aria-hidden="true">↗</span></a></div>
        </div>
        <div className="hero-image-wrap reveal delay-1">
          <img className="hero-image" src="/manus-storage/async-images/VtStuAffEVqvmWNkW53lC5/image-1.webp" alt="Moderne Wohnliegenschaft in einer gepflegten grünen Umgebung" fetchPriority="high" />
          <div className="hero-stamp"><span className="stamp-dot"/><span>Da, wenn es darauf ankommt</span></div>
          <span className="hero-caption">Zürich · Winterthur · Zürcher Oberland</span>
          <div className="hero-float"><strong>24h</strong><span>Service rund um Ihre Liegenschaft – auch dann, wenn es dringend ist.</span></div>
        </div>
      </div>
    </section>

    <section className="trust-band" aria-label="Auf einen Blick"><div className="container trust-inner">
      <span className="trust-lead">Gut umsorgt. Tag für Tag.</span>
      <span className="trust-item"><span className="trust-icon" aria-hidden="true">⌂</span>Regional verwurzelt</span>
      <span className="trust-item"><span className="trust-icon" aria-hidden="true">◷</span>24-Stunden-Service</span>
      <span className="trust-item"><span className="trust-icon" aria-hidden="true">✓</span>Nach Ihren Bedürfnissen</span>
    </div></section>

    <section className="container section-pad intro-section" id="ueber-uns">
      <div className="intro-heading"><span className="eyebrow">Alijaj Hauswartung GmbH</span><h2>Mehr als Unterhalt. <em className="serif">Ein offenes Ohr.</em></h2></div>
      <div className="intro-text"><p>{mission}</p><div className="intro-aside"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s7-3.6 7-10V5l-7-2-7 2v6c0 6.4 7 10 7 10Z" stroke="currentColor" strokeWidth="1.5"/><path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Ihre Hauswartung für {company.region}.</span></div></div>
    </section>

    <section className="services-section section-pad" id="leistungen">
      <div className="container">
        <div className="services-head"><div><span className="eyebrow">Gut gepflegt, rundum</span><h2>Ein Ansprechpartner.<br />Drei starke Bereiche.</h2></div><p>Finden Sie genau die Unterstützung, die Sie für Ihre Liegenschaft brauchen.</p></div>
        <div className="home-service-grid">
          {serviceCards.map((service) => <a className="home-service-card" href={service.href} key={service.n}>
            <div className="home-service-photo"><img src={service.image} alt={service.alt} loading="lazy"/><span>{service.n}</span></div>
            <div className="home-service-body"><h3>{service.title}</h3><p>{service.description}</p><span className="text-link">Leistung entdecken <span aria-hidden="true">↗</span></span></div>
          </a>)}
        </div>
      </div>
    </section>

    <section className="feature-band">
      <div className="feature-content"><span className="eyebrow">Was uns wichtig ist</span><h2>Sauberkeit schafft Wohlbefinden.</h2><p>Mit fachlicher Kompetenz kümmern wir uns um Sauberkeit, Hygiene und die vielen Aufgaben im Gebäudeunterhalt. Damit sich Menschen in ihrer Liegenschaft wohlfühlen können.</p><a className="btn" href="/Hauswartungen">Hauswartung entdecken <span className="arrow" aria-hidden="true">↗</span></a></div>
      <div className="feature-photo"><img src="/manus-storage/async-images/VtStuAffEVqvmWNkW53lC5/image-2.webp" alt="Sorgfältig betreuter Innenbereich einer Wohnliegenschaft" loading="lazy" /></div>
    </section>

    <section className="container contact-cta" id="kontakt">
      <div><span className="eyebrow">Wir sind gerne für Sie da</span><h2>Was können wir für Sie tun?</h2><p>Melden Sie sich – wir hören zu und finden den passenden Service für Ihre Liegenschaft.</p></div>
      <div className="contact-actions"><a className="btn btn-primary" href={`tel:${company.phoneLink}`}>Jetzt anrufen <span className="arrow" aria-hidden="true">↗</span></a><a className="btn btn-outline" href={`mailto:${company.email}`}>E-Mail schreiben <span className="arrow" aria-hidden="true">↗</span></a></div>
    </section>
  </>;
}
