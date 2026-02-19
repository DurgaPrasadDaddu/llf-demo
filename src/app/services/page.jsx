import Navbar from '@/components/SharedComponents/Navbar'
import PageBanner from '@/components/SharedComponents/PageBanner'
import ServicesSectionPage from '@/components/ServicesPage Components/ServicesSectionPage'
import Testimonials from '@/components/Home/Testimonials'
import Footer from '@/components/SharedComponents/Footer'
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Landscaping Services in Hyderabad | Commercial, Residential & Rooftop Gardens",
  description:
    "Leaf-Loam provides premium landscaping services including commercial landscaping, residential garden design, rooftop gardens, indoor planting, farmhouse landscaping, and landscape maintenance across Hyderabad and India.",
  path: "/services",
});

const ServicesPage = () => {
  return (
    <div>
      <Navbar/>
      <PageBanner
        title="OUR SERVICES "
        description="We create elegant landscapes that blend nature, design, and harmony."
      />
      <ServicesSectionPage/>
      <Testimonials/>
      <Footer/>
      
    </div>
  )
}

export default ServicesPage;
