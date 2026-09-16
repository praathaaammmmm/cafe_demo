import { useState } from 'react';
import type { FoodCategory } from '../types';
import { getAssetSize } from '../data/assetDimensions';

interface FoodCategoriesProps {
  categories: FoodCategory[];
}

interface CategoryCardProps {
  category: FoodCategory;
  isSelected: boolean;
  onSelect: () => void;
}

function CategoryCard({ category, isSelected, onSelect }: CategoryCardProps) {
  const size = getAssetSize(category.asset);

  return (
    <div className={`food-category-card${isSelected ? ' is-selected' : ''}`}>
      <button
        type="button"
        className="food-category-card__trigger"
        aria-pressed={isSelected}
        aria-controls="food-category-spotlight"
        onClick={onSelect}
      >
        <span className="food-category-card__media">
          <img
            src={category.asset}
            alt={category.name}
            width={size.width}
            height={size.height}
            loading="lazy"
            decoding="async"
          />
        </span>
        <span className="food-category-card__name">{category.name}</span>
        <span className="food-category-card__blurb">{category.blurb}</span>
      </button>
    </div>
  );
}

export function FoodCategories({ categories }: FoodCategoriesProps) {
  const [selectedId, setSelectedId] = useState(categories[0]?.id ?? null);
  const selected = categories.find((category) => category.id === selectedId) ?? null;
  const selectedSize = selected ? getAssetSize(selected.asset) : null;

  return (
    <section id="food" className="food-categories" aria-labelledby="food-heading">
      <div className="container">
        <span className="section-eyebrow">On the menu</span>
        <h2 id="food-heading" className="section-heading">
          Pick your craving.
        </h2>

        <div className="food-categories__grid">
          {categories.map((category) => (
            <CategoryCard
              category={category}
              key={category.id}
              isSelected={selectedId === category.id}
              onSelect={() => setSelectedId(category.id)}
            />
          ))}
        </div>

        {selected && selectedSize && (
          <div className="food-category-spotlight" id="food-category-spotlight" aria-live="polite">
            <span className="food-category-spotlight__media-wrap">
              <img
                className="food-category-spotlight__media"
                src={selected.asset}
                alt={selected.name}
                width={selectedSize.width}
                height={selectedSize.height}
                loading="lazy"
                decoding="async"
              />
            </span>
            <div className="food-category-spotlight__copy">
              <p className="food-category-spotlight__name">{selected.name}</p>
              <p className="food-category-spotlight__blurb">{selected.spotlightIntro}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
