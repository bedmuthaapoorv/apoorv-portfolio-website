import keerthiProfile from "@/app/resources/assets/images/testimonial-images/keerthi-profile-pic.png";
import anuragProfile from "@/app/resources/assets/images/testimonial-images/anurag-profile-pic.png";
import shriyashProfile from "@/app/resources/assets/images/testimonial-images/shriyash-profile-pic.jpg";
import { StaticImageData } from "next/image";
interface ITestimonial {
  name: string;
  designation: string;
  company: string;
  testimonial: string;
  image: StaticImageData;
  linkedin?: string;
}
const testimonialsData: ITestimonial[] = [
  {
    name: "Anurag Ghosh",
    designation: "UX Lead",
    company: "Ex-Unacademy, Ex-Flipkart",
    testimonial:
      'Working with Apoorv has been a great experience. His enthusiastic nature when it come to technology and also a great deal of patience which translates to good product with great functionality. A team player who jumps in to help others wherever necessary. sets high standards for his work ethics and quality which makes him a great professional to work with. In simple terms he\'s "Amazing".',
    image: anuragProfile,
    linkedin: "https://www.linkedin.com/in/anurag-ghose-851666203",
  },
  {
    name: "Keerthi Sree Marappu",
    designation: "Product Engineer",
    company: "hushh.ai, IIT Kharagpur",
    testimonial:
      "Apoorv is one of those rare gems you find at work. He's a full stack developer who really knows his stuff. What I love about working with him is how he takes feedback like a champ - you suggest something, and he's on it right away. Smart, always improving, and just an all-around great guy to have on the team. Honestly, he's made work a lot more enjoyable for all of us.",
    image: keerthiProfile,
    linkedin: "https://www.linkedin.com/in/mksree",
  },
  {
    name: "Shriyash Patil",
    designation: "Senior SDE",
    company: "Xpressbees",
    testimonial:
      "I had the pleasure of working with Apoorv, a true 360-degree professional skilled in web development, UI/UX design, and frontend development. He was logically sound and approached every challenge with a keen analytical mind. His curiosity about backend development and proactive approach to learning were impressive. Apoorv consistently delivered tasks on time with exceptional quality. His storytelling ability and leadership made him an invaluable team member, driving projects forward and inspiring those around him. I highly recommend Apoorv for any role that requires a dynamic, versatile, and logical team player.",
    image: shriyashProfile,
    linkedin: "https://www.linkedin.com/in/shriyashpatil74",
  },
];
export default testimonialsData;
export type { ITestimonial };
