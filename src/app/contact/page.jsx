import Navbar from '@/components/SharedComponents/Navbar'
import PageBanner from '@/components/SharedComponents/PageBanner'
import ContactSection from '@/components/Home/ContactSection'
import Footer from '@/components/SharedComponents/Footer'
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Contact Leaf-Loam | Landscaping Experts in Hyderabad",
  description:
    "Get in touch with Leaf-Loam for commercial, residential, rooftop, and indoor landscaping services in Hyderabad. Book a consultation today.",
  path: "/contact",
});


const ContactsPage = () => {
  return (
    <div>
      <Navbar/>
      <PageBanner
        title="CONTACT US"
        description="We create elegant landscapes that blend nature, design, and harmony."
      />
      <ContactSection/>
      <Footer/>
      
    </div>
  )
}

export default ContactsPage
