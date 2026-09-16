import type { VisitContent } from '../types';

interface VisitSectionProps {
  visit: VisitContent;
}

export function VisitSection({ visit }: VisitSectionProps) {
  return (
    <section id="visit" className="visit" aria-labelledby="visit-heading">
      <div className="container">
        <div className="visit__panel">
          <div className="visit__details">
            <span className="section-eyebrow">Come see us</span>
            <h2 id="visit-heading" className="section-heading">
              Come taste it in person.
            </h2>

            <address className="visit__address" style={{ fontStyle: 'normal' }}>
              {visit.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>

            <div className="visit__hours-list">
              {visit.hours.map((row) => (
                <div className="visit__hours-row" key={row.day}>
                  <span>{row.day}</span>
                  <span>{row.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="visit__cta">
            {visit.directionsUrl ? (
              <a
                className="btn btn-primary"
                href={visit.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions
              </a>
            ) : (
              <span className="btn-disabled" aria-disabled="true">
                Directions — add once address is confirmed
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
