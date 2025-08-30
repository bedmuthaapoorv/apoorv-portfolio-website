import styles from "./Footer.module.scss";
import utilityStyles from "@/app/resources/styles/Utility.module.scss";
import fontStyles from "@/app/resources/styles/Fonts.module.scss";
import socials from "./socials";
import Image from "next/image";

export default function Footer() {
  return (
    <div
      className={`${styles.Footer} ${fontStyles.primary} ${fontStyles.paragraphL}`}
    >
      <div className={utilityStyles.centerContainer}>
        <div className={styles.Footer__ContactInfo}>
          <div className={`${fontStyles.semibold}`}>Connect with me.</div>
          <div className={styles.Footer__Socials}>
            {socials.map((social) => (
              <a
                key={social.alt}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.alt}
              >
                <Image
                  className={styles.Footer__SocialIcon}
                  src={social.image}
                  alt={social.alt}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={`${utilityStyles.centerContainer}`}>
        <div
          className={`${styles.Footer__NameContainer} ${utilityStyles.column}`}
        >
          <div className={`${styles.Footer__Name}`}>
            <span className={`${fontStyles.italic}`}>Apoorv</span>{" "}
            <span className={`${fontStyles.semibold}`}>Bedmutha</span>
          </div>
          <div>
            <span className={`${fontStyles.italic}`}>Designer</span>{" "}
            <span className={`${fontStyles.semibold} ${styles.Footer__plus}`}>
              +
            </span>{" "}
            <span className={`${fontStyles.semibold}`}>Developer</span>
          </div>
        </div>
      </div>
    </div>
  );
}
