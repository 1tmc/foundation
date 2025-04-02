import Image from "next/image"
import Link from "next/link"
import counter_data from "@/data/counterData"
import Count from "@/components/common/Count"

import aboutImg_1 from "@/assets/img/about/about1.jpg"
import aboutImg_2 from "@/assets/img/about/about2.jpg"
import aboutImg_3 from "@/assets/img/about/about3.jpg"

const About = () => {
   return (
      <div className="about-area py-120">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <div className="about-image-part">
                     <div className="row">
                        <div className="col-sm-6">
                           <div className="image">
                              <Image src={aboutImg_1} alt="About" />
                           </div>
                           <div className="project-complete mb-30">
                              <div className="project-complete__icon">
                                 <i className="flaticon-charity"></i>
                              </div>
                              <div className="project-complete__content">
                                 <h5>15+ Projects Completed</h5>
                                 <span>Donate to charity</span>
                              </div>
                           </div>
                        </div>
                        
                        <div className="col-sm-6">
                           <div className="image mt-65 rmt-15 rel">
                              <Image src={aboutImg_2} alt="About" />
                              <div className="experiences-years">
                                 <span className="experiences-years__number">4</span>
                                 <span className="experiences-years__text">Years Experience</span>
                              </div>
                           </div>
                           <div className="image">
                              <Image src={aboutImg_3} alt="About" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="col-lg-6">
                  <div className="about-content-part rmt-65">
                     <div className="section-title mb-60">
                        <span className="section-title__subtitle mb-10">About us</span>
                        <h2>Check what makes us different <span>from others</span></h2>
                     </div>
                     <p>At CILF, we focus on three key areas where you can support us. Skills & Vocational Training empowers single mothers by equipping them with practical skills, such as fashion design, hairdressing, and entrepreneurship, to achieve financial independence. Education & Child Support ensures that the children of single mothers have access to scholarships, school supplies, and after-school learning programs, giving them a brighter future. Business Support & Microfinance provides funding, financial literacy training, and mentorship to help single mothers start and sustain successful businesses. Through these initiatives, we create lasting change in the lives of single mothers and their children.</p>
                     {counter_data.filter((item) => item.page === "home_1").map((item) => (
                        <div key={item.id} className="counter-item counter-text-wrap">
                           <div className={`counter-item__icon ${item.icon_bg}`}><i className={item.icon}></i></div>
                           <div className="counter-item__content">
                              <span className="count-text" data-speed="10" data-stop="500"><Count number={item.counter_number} /></span>
                              <span className="counter-title">{item.title}</span>
                           </div>
                        </div>
                     ))}
                     <Link className="cr-btn ml-5 mt-25" href="/causes">Discover more</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About;
