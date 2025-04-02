import Image from "next/image"
import Count from "./Count"

import faqThumb from "@/assets/img/about/faq-left.png"

const FaqContent = () => {
   return (
      <>
         <Image src={faqThumb} alt="Man" />
         <div className="experiences-years">
            <span className="experiences-years__number">4</span>
            <span className="experiences-years__text">Years Experiences</span>
         </div>
         <div className="counter-item counter-text-wrap">
            <div className="counter-item__content">
               <span className="count-text" data-speed="3" data-stop="60"><Count number={60} /></span>
               <h5 className="counter-title">Volunteers</h5>
            </div>
         </div>
         
         <div className="project-complete">
            <div className="project-complete__icon">
               <i className="flaticon-charity"></i>
            </div>
            <div className="project-complete__content">
               <h5>We have 15+ Projects</h5>
               <span>Donate for charity</span>
            </div>
         </div>
      </>
   )
}

export default FaqContent
