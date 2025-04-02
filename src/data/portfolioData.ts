import { StaticImageData } from "next/image"

import portfolioThumb_1 from "@/assets/img/portfolio/portfolio1.jpg";
import portfolioThumb_2 from "@/assets/img/portfolio/portfolio2.jpg";
import portfolioThumb_3 from "@/assets/img/portfolio/portfolio3.jpg";


interface DataType {
   id: number,
   thumb: StaticImageData;
   title: string;
   category: string;
}[];

const portfolio_data: DataType[] = [
   {
      id: 1,
      thumb: portfolioThumb_1,
      title: "Helping Homeless People",
      category: "Homeless",
   },
   {
      id: 2,
      thumb: portfolioThumb_2,
      title: "Helping Homeless People",
      category: "Homeless",
   },
   {
      id: 3,
      thumb: portfolioThumb_3,
      title: "Helping Homeless People",
      category: "Homeless",
   },
   {
      id: 4,
      thumb: portfolioThumb_4,
      title: "Helping Homeless People",
      category: "Homeless",
   },
   {
      id: 5,
      thumb: portfolioThumb_5,
      title: "Helping Homeless People",
      category: "Homeless",
   },
   {
      id: 6,
      thumb: portfolioThumb_6,
      title: "Helping Homeless People",
      category: "Homeless",
   },
]

export default portfolio_data;
