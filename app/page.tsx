import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import FeaturedProducts from '@/components/FeaturedProducts';
import BrandsSection from '@/components/BrandsSection';
import PriceRanges from '@/components/PriceRanges';
import PromoBanner from '@/components/PromoBanner';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <BrandsSection />
      <PriceRanges />
      <PromoBanner />
      <Testimonials />
    </>
  );
}
