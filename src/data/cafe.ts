import type { CafeData } from '../types';

/**
 * Single source of truth for all café-specific content.
 * See README.md for exactly which fields must be replaced before this
 * prototype becomes a real site.
 */
export const cafeData: CafeData = {
  cafeName: '[Café Name — TBD]',
  tagline: 'Casual food, made to be shared.',

  hero: {
    headline: 'Come hungry.',
    subcopy:
      'Toasted, stacked, and loaded — the kind of sandwich that gets quiet for a second before anyone speaks.',
    primaryCta: 'Find us',
    secondaryCta: 'See the food',
  },

  featuredDish: {
    storyHeading: 'Built to crave.',
    name: '[Signature sandwich name — TBD]',
    story:
      'Melted cheese, crisp lettuce, ripe tomato, and a little heat — stacked in an order that just works. Tap a layer to see why it\'s there.',
    heroAsset: '/assets/3d/hero-sandwich.png',
    ingredients: [
      {
        id: 'cheese',
        label: 'Melted cheese',
        description: 'Soft, stretchy, and folded through the middle.',
        asset: '/assets/3d/cheese.png',
      },
      {
        id: 'lettuce',
        label: 'Crisp lettuce',
        description: 'A cool, crunchy layer against the warm filling.',
        asset: '/assets/3d/lettuce.png',
      },
      {
        id: 'tomato',
        label: 'Fresh tomato',
        description: 'Sliced thick, right where you\'d want it.',
        asset: '/assets/3d/tomato.png',
      },
      {
        id: 'chili',
        label: 'A little heat',
        description: 'Just enough to keep you coming back for more.',
        asset: '/assets/3d/chili.png',
      },
    ],
  },

  categories: [
    {
      id: 'sandwiches',
      name: 'Sandwiches',
      blurb: 'Stacked, toasted, and built to hold together.',
      spotlightIntro: 'Our take on the classic — toasted bread and a stack that doesn\'t quit.',
      asset: '/assets/3d/hero-sandwich.png',
    },
    {
      id: 'burgers',
      name: 'Burgers',
      blurb: 'Juicy patties with all the classic fixings.',
      spotlightIntro: 'Straightforward and satisfying, the way a burger should be.',
      asset: '/assets/3d/burger.png',
    },
    {
      id: 'fries',
      name: 'Fries',
      blurb: 'Golden, crisp, and gone too fast.',
      spotlightIntro: 'The perfect side — or the whole point of the order.',
      asset: '/assets/3d/fries.png',
    },
    {
      id: 'shakes',
      name: 'Shakes',
      blurb: 'Thick, cold, and topped with something sweet.',
      spotlightIntro: 'Something cold and sweet to finish things off.',
      asset: '/assets/3d/shake.png',
    },
    {
      id: 'pizza',
      name: 'Pizza',
      blurb: 'Cheesy slices, fresh out of the oven.',
      spotlightIntro: 'Simple, cheesy, and always a good call.',
      asset: '/assets/3d/pizza.png',
    },
  ],

  atmosphere: {
    heading: 'More than a takeout counter.',
    body:
      '[Placeholder copy — replace with a short, client-approved description of what it feels like to sit down and eat here.]',
    placeholderImageAlt: 'Placeholder — real café interior photo to be added',
  },

  visit: {
    addressLines: ['[Street address — TBD]', '[City, State, ZIP — TBD]'],
    hours: [
      { day: 'Mon – Fri', time: '[Opening hours — TBD]' },
      { day: 'Sat – Sun', time: '[Opening hours — TBD]' },
    ],
    // Set once a real Google Maps (or equivalent) link is confirmed.
    directionsUrl: undefined,
  },

  social: [
    { label: 'Instagram', url: undefined },
    { label: 'Facebook', url: undefined },
  ],

  order: {
    // Set once the café's live Zomato / Swiggy listing URLs are confirmed.
    zomatoUrl: undefined,
    swiggyUrl: undefined,
  },
};
