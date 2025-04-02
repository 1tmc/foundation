import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import PortfolioDetailsArea from "./PortfolioDetailsArea"
import ChooseArea from "../../homes/home-one/ChooseArea"



const PortfolioDetails = () => {
   return (
      <>
         <HeaderOne style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="Protfolio Details" page_list="Protfolio Details" style={false} />
            <ChooseArea />
            <PortfolioDetailsArea/>

         </main>
         <FooterOne />
      </>
   )
}

export default PortfolioDetails;
