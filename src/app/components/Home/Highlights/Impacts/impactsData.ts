import { StaticImageData } from "next/image";
import mediumImpactImage from "@/app/resources/assets/images/medium-impact.png";
import portfolioImpactImage from "@/app/resources/assets/images/portfolio-impact.png";
import youtubeImpactImage from "@/app/resources/assets/images/youtube-impact.png";
interface IImpactData {
  image: StaticImageData;
  title: string;
  subTitle: string;
  impact: string;
  link: string;
}
const impactsArray: IImpactData[] = [
  {
    image: mediumImpactImage,
    title: "Crossed 80+ Followers on Tech Blog",
    subTitle:
      "With more than 60+ articles on Medium covering Frontend, Backend and System Design topics.",
    impact:
      "Grossed over 4000 monthly impressions, and actively contributing to the developer community.",
    link: "https://medium.com/@bedmuthaapoorv",
  },
  {
    image: portfolioImpactImage,
    title: "Phase 1 of Portfolio Website is live",
    subTitle:
      "One place for everything - Projects, Blogs, Resume, Contact and more",
    impact:
      "Check out my impact on projects and testimonials by my peers and mentors.",
    link: "https://https://apoorv-portfolio-website.vercel.app",
  },
  {
    image: youtubeImpactImage,
    title: "Almost 30 Subscribers on YouTube",
    subTitle:
      "Understand Tech without the Mumbo Jumbo! BIG THINGS OTW",
    impact:
      "This is my way of giving back to the Tech Community. Simple understandable videos on tough technical topics.",
    link: "https://www.youtube.com/@Friend_of_Tech",
  },
];

export default impactsArray;
export type { IImpactData };
