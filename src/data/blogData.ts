import { StaticImageData } from "next/image";

import blogThumb_1 from "@/assets/img/blog/blog1.jpg"
import blogThumb_2 from "@/assets/img/blog/blog2.jpg"
import blogThumb_3 from "@/assets/img/blog/blog3.jpg"
import blogThumb_4 from "@/assets/img/blog/blog4.jpg"
import blogThumb_5 from "@/assets/img/blog/blog5.jpg"
import blogThumb_6 from "@/assets/img/blog/blog6.jpg"

import blogClasicThumb_1 from "@/assets/img/blog/blog-clasic1.jpg"
import blogClasicThumb_2 from "@/assets/img/blog/blog-clasic2.jpg"
import blogClasicThumb_3 from "@/assets/img/blog/blog-clasic3.jpg"


interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   title: string;
   date: number;
   desc?: string;
   item_bg?: string;
}

const blog_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      thumb: blogThumb_1,
      date: 13,
      title: "Empowering Single Mothers: The Journey to Financial Independence",
      desc: "Single mothers face unique challenges, from financial instability to...",
   },
   {
      id: 2,
      page: "home_1",
      thumb: blogThumb_2,
      date: 20,
      title: "Breaking Barriers: How Education Transforms Lives",
      desc: "Education is a powerful tool for breaking the cycle of poverty, not just for single mothers but also for....",
   },
   {
      id: 3,
      page: "home_1",
      thumb: blogThumb_3,
      date: 31,
      title: "The Power of Community: Why Advocacy for Single Mothers Matters",
      desc: "Many single mothers struggle in silence due to societal stigma and ....",
   },

   
   // inner page

   {
      id: 1,
      page: "inner_page",
      thumb: blogThumb_1,
      date: 13,
       title: "Empowering Single Mothers: The Journey to Financial Independence",
      desc: "Single mothers face unique challenges, from financial instability to...",
   },
   {
      id: 2,
      page: "inner_page",
      thumb: blogThumb_2,
      date: 15,
      title: "Breaking Barriers: How Education Transforms Lives",
      desc: "Education is a powerful tool for breaking the cycle of poverty, not just for single mothers but also for....",
   },
   {
      id: 3,
      page: "inner_page",
      thumb: blogThumb_3,
      date: 18,
      title: "The Power of Community: Why Advocacy for Single Mothers Matters",
      desc: "Many single mothers struggle in silence due to societal stigma and ....",
   },
   {
      id: 4,
      page: "inner_page",
      thumb: blogThumb_4,
      date: 20,
      title: " Transforming Lives Through Volunteerism: How You Can Make an Impact",
      desc: "Volunteers are the backbone of our mission at CILF. Whether it’s mentoring a single moth...",
   },
   {
      id: 5,
      page: "inner_page",
      thumb: blogThumb_5,
      date: 22,
      title: "From Struggles to Success: Inspiring Stories of Single Mothers",
      desc: "Behind every empowered woman is a story of resilience and determ...",
   },
   {
      id: 6,
      page: "inner_page",
      thumb: blogThumb_6,
      date: 24,
      title: "The Role of Financial Literacy in Women’s Empowerment",
      desc: "Many single mothers struggle with financial management due to a lack of education on budgeting, saving, and .....",
   },

   // clasic blog

   {
      id: 1,
      page: "clasic_blog",
      thumb: blogClasicThumb_1,
      date: 13,
      title: "Empowering Single Mothers Through Skills Training",
      desc: "At CILF, we believe that skills training is the key to independence. Our vocational programs provide single mothers with the tools to start their own businesses and achieve financial stability, transforming their lives and their children's futures.",
   },
   {
      id: 2,
      page: "clasic_blog",
      thumb: blogClasicThumb_2,
      date: 13,
      title: "How Microfinance is Changing Lives",
      desc: "Access to funding is a major hurdle for many women entrepreneurs. CILF’s microfinance program provides small loans to single mothers, helping them grow their businesses and achieve long-term sustainability.",
   },
   {
      id: 3,
      page: "clasic_blog",
      thumb: blogClasicThumb_3,
      date: 18,
      title: "Education: A Pathway to a Better Future for Children",
      desc: "Education is the foundation of a brighter future. CILF supports children from single-parent households by providing school materials, mentorship, and scholarships to ensure they have the opportunity to succeed.",
   },
   {
      id: 4,
      page: "clasic_blog",
      thumb: blogClasicThumb_1,
      date: 20,
      title: "From Struggles to Success: Inspiring Stories of Single Mothers",
      desc: "Meet the resilient women who have transformed their lives through CILF's programs. Their stories prove that with the right support, anything is possible.",
   },
   {
      id: 5,
      page: "clasic_blog",
      thumb: blogClasicThumb_1,
      date: 20,
      title: "The Role of Financial Literacy in Women’s Empowerment",
      desc: "Financial literacy is a powerful tool for economic independence. CILF offers training in budgeting, saving, and investing to help single mothers secure a stable future.",
   },
   {
      id: 6,
      page: "clasic_blog",
      thumb: blogClasicThumb_2,
      date: 13,
      title: "Giving Back: How Donations Change Lives at CILF",
      desc: "Every donation to CILF directly impacts the lives of single mothers and their children. Discover how your contributions create lasting change.",
   },
   {
      id: 7,
      page: "clasic_blog",
      thumb: blogClasicThumb_1,
      date: 13,
      title: "Building Stronger Communities Through Women’s Empowerment",
      desc: "When women succeed, communities thrive. Learn how CILF’s programs create a ripple effect that uplifts entire communities.",
   },

]

export default blog_data;