import { useState } from 'react';
import type { FeaturedDish, IngredientStep } from '../types';
import { useReveal } from '../hooks/useReveal';
import { getAssetSize } from '../data/assetDimensions';

interface IngredientStoryProps {
  dish: FeaturedDish;
}

interface IngredientHotspotProps {
  ingredient: IngredientStep;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onToggle: () => void;
}

function IngredientHotspot({ ingredient, isActive, onEnter, onLeave, onToggle }: IngredientHotspotProps) {
  const size = getAssetSize(ingredient.asset);
  const descId = 'ingredient-detail-panel';

  return (
    <div className="ingredient-hotspot">
      <button
        type="button"
        className={`ingredient-hotspot__trigger${isActive ? ' is-active' : ''}`}
        aria-pressed={isActive}
        aria-controls={descId}
        onPointerEnter={(event) => {
          // Touch taps also synthesize a pointerenter with no matching
          // pointerleave, which would leave the panel stuck open — only
          // treat real mouse hover this way.
          if (event.pointerType === 'mouse') onEnter();
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === 'mouse') onLeave();
        }}
        onFocus={(event) => {
          // Only keyboard-driven focus should behave like hover — a touch
          // tap also focuses the button, and would otherwise get stuck
          // "hovered" since there's no matching blur between two taps.
          if (event.currentTarget.matches(':focus-visible')) onEnter();
        }}
        onBlur={onLeave}
        onClick={onToggle}
      >
        <img
          src={ingredient.asset}
          alt=""
          width={size.width}
          height={size.height}
          loading="lazy"
          decoding="async"
        />
        <span className="ingredient-hotspot__label">{ingredient.label}</span>
      </button>
    </div>
  );
}

export function IngredientStory({ dish }: IngredientStoryProps) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.4);
  // Hover/focus (hoveredId) and tap/click (pinnedId) are tracked separately.
  // A single shared "active" state would race: a touch tap fires a
  // synthetic hover-then-click, and a toggle driven by that same click
  // would immediately cancel the hover it just triggered.
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const dishSize = getAssetSize(dish.heroAsset);

  const activeId = hoveredId ?? pinnedId;
  const activeIngredient = dish.ingredients.find((ingredient) => ingredient.id === activeId) ?? null;

  const handleEnter = (id: string) => setHoveredId(id);
  const handleLeave = (id: string) =>
    setHoveredId((current) => (current === id ? null : current));
  const handleToggle = (id: string) =>
    setPinnedId((current) => (current === id ? null : id));

  return (
    <section id="story" className="ingredient-story" aria-labelledby="story-heading">
      <div className="container">
        <div className="ingredient-story__intro">
          <span className="section-eyebrow">Our story</span>
          <h2 id="story-heading" className="section-heading">
            {dish.storyHeading}
          </h2>
          <p className="ingredient-story__dish-name">Featuring: {dish.name}</p>
          <p className="ingredient-story__body">{dish.story}</p>
        </div>

        <div className={`ingredient-story__stage${visible ? ' is-visible' : ''}`} ref={ref}>
          <div className="ingredient-story__stage-inner">
            <img
              className={`ingredient-story__dish${activeIngredient ? ' is-highlighted' : ''}`}
              src={dish.heroAsset}
              alt={`${dish.name}, fully assembled`}
              width={dishSize.width}
              height={dishSize.height}
              loading="lazy"
              decoding="async"
            />
            <div className="ingredient-story__hotspots">
              {dish.ingredients.map((ingredient) => (
                <IngredientHotspot
                  key={ingredient.id}
                  ingredient={ingredient}
                  isActive={activeId === ingredient.id}
                  onEnter={() => handleEnter(ingredient.id)}
                  onLeave={() => handleLeave(ingredient.id)}
                  onToggle={() => handleToggle(ingredient.id)}
                />
              ))}
            </div>
          </div>

          <div className="ingredient-story__detail" id="ingredient-detail-panel" aria-live="polite">
            {activeIngredient ? (
              <>
                <img
                  className="ingredient-story__detail-media"
                  src={activeIngredient.asset}
                  alt=""
                  width={getAssetSize(activeIngredient.asset).width}
                  height={getAssetSize(activeIngredient.asset).height}
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <p className="ingredient-story__detail-label">{activeIngredient.label}</p>
                  <p className="ingredient-story__detail-desc">{activeIngredient.description}</p>
                </div>
              </>
            ) : (
              <p className="ingredient-story__detail-idle">
                Hover or tap a layer to see why it made the cut.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
