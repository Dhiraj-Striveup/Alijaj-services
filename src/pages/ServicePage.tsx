import { company } from '../content';

type Service = {
  title: string;
  shortTitle: string;
  eyebrow: string;
  intro: string;
  image: string;
  narrative?: string[];
  groups: { title: string; items: string[] }[];
};

export function ServicePage({ service, index }: { service: Service; index: string }) {
  return <>
    <section className="inner-hero"><div className="container inner-hero-layout"><div><span className="eyebrow">{service.eyebrow}</span><h1>{service.title}</h1></div><p>{service.intro}</p></div></section>
    <div className="container"><img className="service-page-image" src={service.image} alt={`Illustrative Aufnahme zum Bereich ${service.shortTitle}`} fetchPriority="high" /></div>
    {service.narrative && <section className="container section-pad service-intro-grid">
      <div className="service-label"><span>{index}</span><small>Unsere Haltung</small></div>
      <div className="service-story">{service.narrative.map((paragraph) => <p className="story-block" key={paragraph}>{paragraph}</p>)}</div>
    </section>}
    <section className="service-groups section-pad"><div className="container groups-grid">
      {service.groups.map((group) => <article className={`group-card${service.groups.length === 1 ? ' single' : ''}`} key={group.title}><h2>{group.title}</h2><ul className="list-check">{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}
    </div></section>
    <section className="container contact-cta"><div><span className="eyebrow">{company.region}</span><h2>Persönlich für Sie da.</h2><p>Sie haben Fragen zu {service.shortTitle}? Wir beraten Sie gerne.</p></div><div className="contact-actions"><a className="btn btn-primary" href={`tel:${company.phoneLink}`}>Jetzt anrufen <span className="arrow" aria-hidden="true">↗</span></a><a className="btn btn-outline" href={`mailto:${company.email}`}>E-Mail schreiben <span className="arrow" aria-hidden="true">↗</span></a></div></section>
  </>;
}
