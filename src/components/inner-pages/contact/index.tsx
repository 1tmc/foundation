import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import ContactArea from "./ContactArea"
import ContactInfo from "./ContactInfo"
import LocationMap from "./LocationMap"

const Contact = () => {
   return (
      <>
         <HeaderOne style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="Contact Us" page_list="Contact" style={false} />
            <ContactArea/>
            <ContactInfo/>
            <LocationMap/>
         </main>
         <FooterOne />
      </>
   )
}

export default Contact;
