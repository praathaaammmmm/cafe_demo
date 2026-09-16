import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { getAssetSize } from '../data/assetDimensions';

// A small, quick-recognizable subset of the supplied cutouts — original
// hero/portrait assets (sandwich, burger, shake) are left out so the trail
// stays light and legible at a small size.
const TRAIL_ASSETS = [
  '/assets/3d/cheese.png',
  '/assets/3d/lettuce.png',
  '/assets/3d/tomato.png',
  '/assets/3d/chili.png',
  '/assets/3d/fries.png',
  '/assets/3d/pizza.png',
];

// Only spawn a new cutout after the pointer has actually travelled — this
// keeps the trail sparse instead of drawing on every pixel of movement.
const MIN_DISTANCE = 70;
const MAX_TRAIL = 5;
const LIFETIME_MS = 600;

interface TrailItem {
  id: number;
  x: number;
  y: number;
  asset: string;
  rotation: number;
}

let nextTrailId = 0;

export function CursorTrail() {
  const reducedMotion = useReducedMotion();
  const [items, setItems] = useState<TrailItem[]>([]);
  const lastPoint = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (reducedMotion) return;
    // Mouse/trackpad only — never a touch-primary device.
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;

      const last = lastPoint.current;
      const distance = last ? Math.hypot(event.clientX - last.x, event.clientY - last.y) : Infinity;
      if (distance < MIN_DISTANCE) return;

      lastPoint.current = { x: event.clientX, y: event.clientY };

      const id = nextTrailId++;
      const asset = TRAIL_ASSETS[Math.floor(Math.random() * TRAIL_ASSETS.length)];
      const rotation = Math.random() * 32 - 16;

      setItems((current) => {
        const next = [...current, { id, x: event.clientX, y: event.clientY, asset, rotation }];
        return next.length > MAX_TRAIL ? next.slice(next.length - MAX_TRAIL) : next;
      });

      window.setTimeout(() => {
        setItems((current) => current.filter((item) => item.id !== id));
      }, LIFETIME_MS);
    };

    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div className="cursor-trail" aria-hidden="true">
      {items.map((item) => {
        const size = getAssetSize(item.asset);
        const style: CSSProperties & Record<'--rot', string> = {
          left: item.x,
          top: item.y,
          '--rot': `${item.rotation}deg`,
        };
        return (
          <img
            key={item.id}
            className="cursor-trail__item"
            src={item.asset}
            alt=""
            width={size.width}
            height={size.height}
            style={style}
          />
        );
      })}
    </div>
  );
}
