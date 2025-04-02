import { StaticImageData } from "next/image";

import causeThumb_1 from "@/assets/img/causes/cause1.jpg";
import causeThumb_2 from "@/assets/img/causes/cause2.jpg";
import causeThumb_3 from "@/assets/img/causes/cause3.jpg";


interface DataType {
   id: number;
   page:string;
   img: StaticImageData;
   title: string;
   desc?: string;
   raised: number;
   goal: number;
   progress_width?: string | number;
   progress_bg?: string;
   btn_bg?: string;
   price_color?:string;
   item_bg?:string;
   percentage?:number;
}

const cause_data: DataType[] = [
   {
      id: 1,
      page:"home_1",
      img: causeThumb_1,
      title: "Skills Development & Vocational Training",
      desc: "Empower single mothers with hands-on training in trades like fashion design, hairdressing, and entrepreneurship.",
      raised: 1000,
      goal: 5000,
      progress_width: "25%",
   },
   {
      id: 2,
      page:"home_1",
      img: causeThumb_2,
      title: "Education & Child Support",
      desc: "Provide scholarships, school supplies, and after-school programs to ensure a brighter future for children of single mothers. As they are the leaders of tomorrow",
      raised: 1450,
      goal: 5000,
      progress_width: "40%",
      progress_bg: "progress-bar--yellow",
      btn_bg: "btn--yellow"
   },
   {
      id: 3,
      page:"home_1",
      img: causeThumb_3,
      title: "Business Support & Microfinance",
      desc: "Help single mothers start and sustain businesses through seed funding, financial literacy, and mentorship programs.",
      raised: 600,
      goal: 7000,
      progress_width: "20%",
      progress_bg: "progress-bar--green",
      btn_bg: "btn--green"
   }

]

export default cause_data;