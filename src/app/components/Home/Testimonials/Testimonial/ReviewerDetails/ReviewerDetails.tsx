import Image from "next/image";
import { ITestimonial } from "../../testimonialsData";
import styles from "./ReviewerDetails.module.scss";
import fontStyles from "@/app/resources/styles/Fonts.module.scss";
import utilityStyles from "@/app/resources/styles/Utility.module.scss";
interface IReviewerDetailsProps {
  testimonial: ITestimonial;
}
export default function ReviewerDetails({
  testimonial,
}: Readonly<IReviewerDetailsProps>) {
  return (
    <div className={`${styles.ReviewerDetails} ${utilityStyles.row} ${fontStyles.primary}`}>
      <div className={styles.ReviewerImage}>
        <Image src={testimonial.image} alt={testimonial.name} width={50} height={50} />
      </div>
      <div>
        <div className={`${fontStyles.paragraphM} ${styles.ReviewerName} ${fontStyles.italic}`}>
          {testimonial.name}
        </div>
        <div
          className={`${fontStyles.paragraphS} ${fontStyles.semibold} ${styles.ReviewerDesignation}`}
        >
          {testimonial.designation}
        </div>
        <div className={`${fontStyles.paragraphS} ${fontStyles.semibold} ${styles.ReviewerCompany}`}>
          {testimonial.company}
        </div>
      </div>
    </div>
  );
}
