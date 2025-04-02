import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import About from "@/components/homes/home-one/About"
import Features from "@/components/homes/home-one/Features"
import Volunteer from "@/components/homes/home-one/Volunteer"
import CtaArea from "@/components/homes/home-three/CtaArea"
import FAQ from "@/components/homes/home-one/FAQ"

const InnerAbout = () => {
   return (
      <>
         <HeaderOne style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="About Us" page_list="About" style={false} />
            <About />
            <Features />
            <Volunteer style={true} />
            <CtaArea />
            <FAQ />
         </main>
         <FooterOne />
      </>
   )
}

export default InnerAbout;
