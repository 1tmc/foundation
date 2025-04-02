import Image from "next/image";

import healthEducationImg from "@/assets/img/portfolio/portfolio1.jpg";
import schoolMentorshipImg from "@/assets/img/portfolio/portfolio2.jpg";
import dodoIslandImg from "@/assets/img/portfolio/portfolio3.jpg";

const projects = [
   {
      id: 1,
      title: "Health Education and Screening",
      image: healthEducationImg,
      description: (
         <>CILF has been actively involved in providing health education and screening programs for underserved communities. We have organized several health outreach events where individuals received free medical check-ups, counseling, and awareness sessions on common health issues like diabetes, hypertension, and maternal health. Our goal is to promote preventive healthcare and improve access to medical information.</>
      ),
   },
   {
      id: 2,
      title: "School Mentorship and Donation Program",
      image: schoolMentorshipImg,
      description: (
         <>Through our school mentorship and donation program, CILF supports underprivileged students by providing educational materials, scholarships, and career guidance. We work closely with schools to identify students in need and offer mentorship sessions, helping them build confidence and a vision for their future. Additionally, our donation drives supply essential learning tools like books, uniforms, and stationery to ensure every child has the resources to succeed.</>
      ),
   },
   {
      id: 3,
      title: "Dodo Island Project",
      image: dodoIslandImg,
      description: (
         <>The Dodo Island Project focuses on sustainable community development by empowering local residents through vocational training and entrepreneurial initiatives. We provide hands-on training in trades such as tailoring, agriculture, and craftsmanship, enabling individuals to create sustainable sources of income. This initiative aims to uplift the community by fostering self-reliance and economic stability.</>
      ),
   },
];

const PortfolioDetailsArea = () => {
   return (
      <div className="portfolio-details-area pt-120 pb-105">
         <div className="container">
            {projects.map((project) => (
               <div key={project.id} className="portfolio-details-content mb-50">
                  <div style={{ maxWidth: "900px", maxHeight: "auto" ,margin: "0 auto" }}>
         <Image 
            src={project.image} 
            alt={project.title} 
            width={700} 
            height={400} 
            className="rounded-lg"
         />
         </div>

                  <h3 className="title mb-20">{project.title}</h3>
                  <p>{project.description}</p>
                  <hr></hr>
               </div>
            ))}
         </div>
      </div>
   );
};

export default PortfolioDetailsArea;
