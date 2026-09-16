/**
 * Real intrinsic pixel dimensions of the supplied food PNGs
 * (assets/3d/*.png, served from /assets/3d/*.png). Used to set correct
 * width/height attributes so browsers compute the right aspect ratio
 * instead of assuming a square and stretching the image to fit.
 */
export const ASSET_DIMENSIONS: Record<string, { width: number; height: number }> = {
  '/assets/3d/burger.png': { width: 1230, height: 1278 },
  '/assets/3d/cheese.png': { width: 1536, height: 1024 },
  '/assets/3d/chili.png': { width: 1227, height: 1282 },
  '/assets/3d/fries.png': { width: 1145, height: 1374 },
  '/assets/3d/hero-sandwich.png': { width: 1536, height: 1024 },
  '/assets/3d/lettuce.png': { width: 1536, height: 1024 },
  '/assets/3d/pizza.png': { width: 1199, height: 1312 },
  '/assets/3d/shake.png': { width: 1024, height: 1536 },
  '/assets/3d/tomato.png': { width: 1374, height: 1145 },
};

export function getAssetSize(path: string): { width: number; height: number } {
  return ASSET_DIMENSIONS[path] ?? { width: 1024, height: 1024 };
}
