import Navbar from '@/components/SharedComponents/Navbar'
import PageBanner from '@/components/SharedComponents/PageBanner'
import IntroductionPage from '@/components/AboutComponents/IntroductionPage'
import MissionVisionPage from '@/components/AboutComponents/MissionVisionPage'
import ProcessSection from '@/components/AboutComponents/ProcessSectionPage'
import Footer from '@/components/SharedComponents/Footer'
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "About Leaf-Loam",
  description:
    "Learn about Leaf-Loam’s sustainable landscaping expertise and commitment to premium design.",
  path: "/about",
});


const AboutPage = () => {
  return (
    <div>
      <Navbar/>
      <PageBanner
        title="ABOUT US"
        description="We create elegant landscapes that blend nature, design, and harmony."
      />
      <IntroductionPage/>
      <MissionVisionPage/>
      <ProcessSection/>
      <Footer/>
    </div>
  )
}

export default AboutPage
