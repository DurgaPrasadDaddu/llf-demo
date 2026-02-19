import Navbar from '@/components/SharedComponents/Navbar'
import PageBanner from '@/components/SharedComponents/PageBanner'
import ServicesSection from '@/components/Home/ServicesSection'
import Testimonials from '@/components/Home/Testimonials'
import Footer from '@/components/SharedComponents/Footer'
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Landscaping Projects Portfolio | Commercial & Residential Gardens",
  description:
    "Explore Leaf-Loam’s completed landscaping projects including commercial spaces, farmhouses, rooftop gardens, resorts, and residential landscapes across Hyderabad and India.",
  path: "/projects",
});


const ProjectsPage = () => {
  return (
    <div>
      <Navbar/>
      <PageBanner
        title="OUR PROJECTS"
        description="We create elegant landscapes that blend nature, design, and harmony."
      />
      <ServicesSection/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default ProjectsPage
