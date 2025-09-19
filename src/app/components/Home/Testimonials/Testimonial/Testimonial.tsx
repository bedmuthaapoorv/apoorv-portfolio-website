import { ITestimonial } from "../testimonialsData";
import ReviewerDetails from "./ReviewerDetails/ReviewerDetails";
import styles from "./Testimonial.module.scss";
import fontStyles from "@/app/resources/styles/Fonts.module.scss";
import utilityStyles from "@/app/resources/styles/Utility.module.scss";
interface ITestimonialProps {
  testimonial: ITestimonial;
}
export default function Testimonial({
  testimonial,
}: Readonly<ITestimonialProps>) {
  return (
    <div className={styles.Testimonial}>
      <div className={styles.Testimonial__Container}>
        <ReviewerDetails testimonial={testimonial} />
        <div
          className={`${fontStyles.paragraphM} ${fontStyles.italic} ${fontStyles.primary} ${styles.TestimonialText}`}
        >
          {testimonial.testimonial}
        </div>
      </div>
    </div>
  );
}
