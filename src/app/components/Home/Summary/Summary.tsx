import styles from "./Summary.module.scss";
export default function Summary() {
  return (
    <div className={styles.Summary}>
      <div className={styles.Summary__Container}>
        MTech with <strong>Honors from IIIT</strong> Gwalior,{" "}
        <strong>2.3 years</strong> professional experience in{" "}
        <strong>Backend</strong>, <strong>Frontend</strong> and{" "}
        <strong>Full-Stack</strong> development roles,{" "}
        <strong>SDE @ Nexus1 AI</strong>,{" "}
        <strong>Top 16% coder globally</strong> @ Leetcode, GATE Qualified with{" "}
        <strong>All India Rank 8028</strong>
      </div>
    </div>
  );
}
