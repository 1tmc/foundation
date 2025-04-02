import HeaderOne from "@/layout/headers/HeaderOne"
import HeroArea from "./HeroArea"
import UrgentCause from "./UrgentCause"
import ChooseArea from "./ChooseArea"
import Event from "./Event"
import Volunteer from "./Volunteer"
import CtaArea from "./CtaArea"
import Blog from "./Blog"
import FooterOne from "@/layout/footers/FooterOne"
import About from "./About"
import BecomeVolunteer from "./BecomeVolunteer"
import Features from "./Features"
import Testimonial from "./Testimonial"
import FAQ from "./FAQ"
import Brand from "@/components/common/Brand"

const HomeOne = () => {
   return (
      <>
         <HeaderOne style_1={false} style_2={false} />
         <main>
            <HeroArea />
            <UrgentCause />
            <About />
            <ChooseArea />
            <Features />
            <Event />
            <BecomeVolunteer />
            <Volunteer style={true} />
            <Testimonial />
            <FAQ />
            <CtaArea />
            <Blog style={false} />
            <Brand />
         </main>
         <FooterOne />
      </>
   )
}

export default HomeOne
