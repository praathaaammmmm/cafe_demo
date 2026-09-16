import type { CafeData } from '../types';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { getAssetSize } from '../data/assetDimensions';

interface HeroProps {
  hero: CafeData['hero'];
  heroAsset: string;
}

const CHEESE = '/assets/3d/cheese.png';
const LETTUCE = '/assets/3d/lettuce.png';
const TOMATO = '/assets/3d/tomato.png';
const CHILI = '/assets/3d/chili.png';

export function Hero({ hero, heroAsset }: HeroProps) {
  const reducedMotion = useReducedMotion();
  const heroSize = getAssetSize(heroAsset);
  const cheeseSize = getAssetSize(CHEESE);
  const lettuceSize = getAssetSize(LETTUCE);
  const tomatoSize = getAssetSize(TOMATO);
  const chiliSize = getAssetSize(CHILI);

  return (
    <section
      id="top"
      className={`hero${reducedMotion ? ' no-motion' : ''}`}
      aria-labelledby="hero-heading"
    >
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="section-eyebrow">Casual food, done right</span>
          <h1 id="hero-heading" className="hero__headline">
            {hero.headline}
          </h1>
          <p className="hero__subcopy">{hero.subcopy}</p>
          <div className="hero__ctas">
            <a className="btn btn-primary" href="#visit">
              {hero.primaryCta}
            </a>
            <a className="btn btn-secondary" href="#food">
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <img
            className="hero__main-image"
            src={heroAsset}
            alt="A stacked, toasted sandwich layered with cheese, lettuce, and tomato"
            width={heroSize.width}
            height={heroSize.height}
            loading="eager"
            fetchPriority="high"
          />
          <img
            className="hero__floating hero__floating--cheese"
            src={CHEESE}
            alt=""
            width={cheeseSize.width}
            height={cheeseSize.height}
            loading="eager"
          />
          <img
            className="hero__floating hero__floating--lettuce"
            src={LETTUCE}
            alt=""
            width={lettuceSize.width}
            height={lettuceSize.height}
            loading="eager"
          />
          <img
            className="hero__floating hero__floating--tomato"
            src={TOMATO}
            alt=""
            width={tomatoSize.width}
            height={tomatoSize.height}
            loading="eager"
          />
          <img
            className="hero__chili"
            src={CHILI}
            alt=""
            width={chiliSize.width}
            height={chiliSize.height}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
