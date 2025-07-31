import HeroSection from '@/components/HeroSection'
import CategoriesSection from '@/components/CategoriesSection'
import PopularCities from '@/components/PopularCities'
import FeaturedProjects from '@/components/FeaturedProjects'
import WhyChooseUs from '@/components/WhyChooseUs'
import InsightsPreview from '@/components/InsightsPreview'
import PriceTrends from '@/components/PriceTrends'
import PostPropertyCTA from '@/components/PostPropertyCTA'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <PopularCities />
      <FeaturedProjects />
      <WhyChooseUs />
      <InsightsPreview />
      <PriceTrends />
      <PostPropertyCTA />
    </>
  )
}
