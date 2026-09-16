import type { AtmosphereContent } from '../types';

interface CafeStoryProps {
  atmosphere: AtmosphereContent;
}

export function CafeStory({ atmosphere }: CafeStoryProps) {
  return (
    <section className="cafe-story" aria-labelledby="atmosphere-heading">
      <div className="container cafe-story__inner">
        <div className="cafe-story__content">
          <span className="section-eyebrow" style={{ color: 'var(--color-lime)' }}>
            The experience
          </span>
          <h2 id="atmosphere-heading" className="section-heading">
            {atmosphere.heading}
          </h2>
          <p className="cafe-story__body">{atmosphere.body}</p>
        </div>
        <div className="cafe-story__media" role="img" aria-label={atmosphere.placeholderImageAlt}>
          [ Placeholder — real café photography to be added ]
        </div>
      </div>
    </section>
  );
}
