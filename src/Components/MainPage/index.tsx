import Balls from "../Balls";
import Content from "../Content";
import Footer from "../Footer";
import Header from "../Header";
import Lighting from "../Lighting";
import styles from "./styles.module.scss";

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Lighting />
      <div className={styles["home-page"]}>
        <Balls />
        
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
