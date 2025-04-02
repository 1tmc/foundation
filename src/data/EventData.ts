import { StaticImageData } from "next/image";

import eventThumb_1 from "@/assets/img/events/event1.jpg";
import eventThumb_2 from "@/assets/img/events/event2.jpg";
import eventThumb_3 from "@/assets/img/events/event3.jpg";


// import eventInnerThumb_1 from "@/assets/img/events/event-three1.jpg";
// import eventInnerThumb_2 from "@/assets/img/events/event-three2.jpg";
// import eventInnerThumb_3 from "@/assets/img/events/event-three3.jpg";
// import eventInnerThumb_4 from "@/assets/img/events/event-three4.jpg";
// import eventInnerThumb_5 from "@/assets/img/events/event-three5.jpg";
// import eventInnerThumb_6 from "@/assets/img/events/event-three6.jpg";
// import eventInnerThumb_7 from "@/assets/img/events/event-three7.jpg";
// import eventInnerThumb_8 from "@/assets/img/events/event-three8.jpg";
// import eventInnerThumb_9 from "@/assets/img/events/event-three9.jpg";

interface DataType {
   id: number;
   page:string;
   thumb: StaticImageData;
   title: string;
   date?: string | number;
   city: string;
   time?:string;
   item_bg?:string;
   desc?:string;
}

const event_data: DataType[] = [
   {
      id: 1,
      page:"home_1",
      thumb: eventThumb_1,
      title: "Stakeholders Engagement Forum on Women Entrepreneurship",
      date: "August, 2025",
      city: "Greater Accra",
   },
   {
      id: 2,
      page:"home_1",
      thumb: eventThumb_2,
      title: "Skill Development & Business Support",
      date: "November, 2025",
      city: "Dawhenya",
   },
   {
      id: 3,
      page:"home_1",
      thumb: eventThumb_3,
      title: "Free Medical Screening",
      date: "September, 2025",
      city: "Greater Accra",
   },
   // {
   //    id: 4,
   //    page:"home_1",
   //    thumb: eventThumb_4,
   //    title: "Free Medical Camping",
   //    date: "Jan 18, 2016",
   //    city: "melbourne City",
   // },
   // {
   //    id: 5,
   //    page:"home_1",
   //    thumb: eventThumb_5,
   //    title: "Free Medical Camping",
   //    date: "Jan 18, 2013",
   //    city: "melbourne City",
   // },
   // {
   //    id: 6,
   //    page:"home_1",
   //    thumb: eventThumb_6,
   //    title: "Free Medical Camping",
   //    date: "Jan 18, 2016",
   //    city: "melbourne City",
   // },

]

export default event_data;