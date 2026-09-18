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
        <div className="cafe-story__media">
          <video
            className="cafe-story__video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={atmosphere.videoPoster}
            aria-label={atmosphere.videoAlt}
          >
            <source src={atmosphere.videoSrc} type="video/mp4" />
          </video>
          <div className="cafe-story__photos" aria-label="Food highlights">
            {atmosphere.photos.map((photo) => (
              <img key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
