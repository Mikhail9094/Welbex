import styles from "./lighting.module.scss";

function Lighting() {
  return (
    <div className={styles.lighting}>
      <div className={styles["purple-light"]}></div>
      <div className={styles["red-light"]}></div>
    </div>
  );
}

export default Lighting;
