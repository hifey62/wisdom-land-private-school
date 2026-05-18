import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Welcome from '../components/Welcome'
import SectionsPreview from '../components/SectionsPreview'
import Gallery from '../components/Gallery'
import NewsSection from '../components/NewsSection'
import CTABanner from '../components/CTABanner'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Wisdom Land Private School – Excellence in Education | Ago-Iwoye</title>
        <meta name="description" content="Wisdom Land Private School in Ago-Iwoye, Ogun State offers quality education from Nursery to Secondary level. Enrol your child today." />
        <meta property="og:title" content="Wisdom Land Private School" />
        <meta property="og:description" content="Nurturing young minds with wisdom, discipline and academic excellence in Ago-Iwoye, Ogun State." />
      </Helmet>

      <Hero />
      <Stats />
      <Welcome />
      <SectionsPreview />
      <Gallery />
      <NewsSection />
      <CTABanner />
    </>
  )
}
