export interface IngredientStep {
  id: string;
  label: string;
  description: string;
  asset: string;
}

export interface FeaturedDish {
  /** Marketing heading for the story section — always safe to show large. */
  storyHeading: string;
  /** The actual dish name — a business fact, may still be a placeholder. */
  name: string;
  story: string;
  heroAsset: string;
  ingredients: IngredientStep[];
}

export interface FoodCategory {
  id: string;
  name: string;
  blurb: string;
  /** A distinct, slightly longer line shown only in the selected spotlight. */
  spotlightIntro: string;
  asset: string;
}

export interface AtmosphereContent {
  heading: string;
  body: string;
  placeholderImageAlt: string;
}

export interface VisitContent {
  addressLines: string[];
  hours: { day: string; time: string }[];
  directionsUrl?: string;
}

export interface SocialLink {
  label: string;
  url?: string;
}

export interface OrderLinks {
  zomatoUrl?: string;
  swiggyUrl?: string;
}

export interface CafeData {
  cafeName: string;
  tagline: string;
  hero: {
    headline: string;
    subcopy: string;
    primaryCta: string;
    secondaryCta: string;
  };
  featuredDish: FeaturedDish;
  categories: FoodCategory[];
  atmosphere: AtmosphereContent;
  visit: VisitContent;
  social: SocialLink[];
  order: OrderLinks;
}
