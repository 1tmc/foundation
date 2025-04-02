import { StaticImageData } from "next/image";

import features3Bg_1 from "@/assets/img/features/feature-bg-red.jpg"
import features3Bg_2 from "@/assets/img/features/feature-bg-green.jpg"
import features3Bg_3 from "@/assets/img/features/feature-bg-yellow.jpg"

interface DataType {
   id: number;
   page:string;
   icon_bg?: string;
   icon_name?: string;
   title: string;
   desc: string;
   btn_bg?: string;
   bg_img?: StaticImageData;
   item_bg?:string;
}

const features_data: DataType[] = [
   {
      id: 1,
      page:"home_1",
      icon_name: "flaticon-help",
      title: "Become an volunteer",
      desc: "Join us in making a difference by sharing your time, skills, and passion",
   },
   {
      id: 2,
      page:"home_1",
      icon_name: "flaticon-solidarity",
      icon_bg: "feature-item__icon--green",
      title: "Quick Fundraising",
      desc: "Help us raise essential funds to empower single mothers and their children",
   },
   {
      id: 3,
      page:"home_1",
      icon_name: "flaticon-donation",
      icon_bg: "feature-item__icon--yellow",
      title: "Start Donating",
      desc: "Your donations and advocacy create opportunities for those in need",
   },
   {
      id: 4,
      page:"home_1",
      icon_name: "flaticon-solidarity",
      icon_bg: "feature-item__icon--green",
      title: "Quick Fundraising",
      desc: "Your donations surely reaches the heart of the less previleged ",
   },

   // home one single features
   {
      id: 1,
      page:"single_features",
      title: "Child Education Help",
      desc: "Your little help can make million children smile ",
   },
   {
      id: 2,
      page:"single_features",
      title: "Child Education Help",
      desc: "Donations might seem little but significant to the receiver",
      btn_bg: "btn--yellow",
   },
   {
      id: 3,
      page:"single_features",
      title: "Child Education Help",
      desc: "Education is the key, why not provide this to our children",
      btn_bg: "btn--green",
   },

   
]

export default features_data;