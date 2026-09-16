import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IngredientStory } from './components/IngredientStory';
import { FoodCategories } from './components/FoodCategories';
import { CafeStory } from './components/CafeStory';
import { VisitSection } from './components/VisitSection';
import { Footer } from './components/Footer';
import { CursorTrail } from './components/CursorTrail';
import { cafeData } from './data/cafe';

function App() {
  return (
    <>
      <CursorTrail />
      <Header cafeName={cafeData.cafeName} order={cafeData.order} />
      <main>
        <Hero hero={cafeData.hero} heroAsset={cafeData.featuredDish.heroAsset} />
        <IngredientStory dish={cafeData.featuredDish} />
        <FoodCategories categories={cafeData.categories} />
        <CafeStory atmosphere={cafeData.atmosphere} />
        <VisitSection visit={cafeData.visit} />
      </main>
      <Footer cafeName={cafeData.cafeName} social={cafeData.social} order={cafeData.order} />
    </>
  );
}

export default App;
