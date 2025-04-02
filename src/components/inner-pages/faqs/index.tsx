import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import FAQ from "@/components/homes/home-one/FAQ"
import ChooseArea from "@/components/homes/home-one/ChooseArea"

const Faqs = () => {
   return (
      <>
         <HeaderOne style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="frequently asked questions" page_list="Faq" style={true} />
            <FAQ/>
            <ChooseArea />
         </main>
         <FooterOne />
      </>
   )
}

export default Faqs;
