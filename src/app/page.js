import HeroSection from '@/components/landingPage/HeroSection'
import CategoriesSection from '@/components/landingPage/CategoriesSection'
import PopularCities from '@/components/landingPage/PopularCities'
import FeaturedProjects from '@/components/landingPage/FeaturedProjects'
import WhyChooseUs from '@/components/landingPage/WhyChooseUs'
import InsightsPreview from '@/components/landingPage/InsightsPreview'
import PriceTrends from '@/components/landingPage/PriceTrends'
import PostPropertyCTA from '@/components/landingPage/PostPropertyCTA'

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
