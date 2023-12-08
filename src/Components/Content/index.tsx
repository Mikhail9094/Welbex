import styles from "./content.module.scss";

function Content() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.content__welcome}>
          <h1 className={styles.content__welcome__title}>
            <p>Зарабатывайте больше</p>
            <span>с WELBEX</span>
          </h1>
          <p className={styles.content__welcome__text}>Развиваем и контролируем продажи за вас</p>
        </div>
        <div className={styles.content__services}>
          <div className={styles.content__services__title}>
            <h2 className={styles.content__services__title__description}>
              Вместе с <span>бесплатной консультацией</span> мы дарим:
            </h2>
          </div>
          <div className={styles.content__services__text}>
            <div>
              <h3>Виджеты</h3>
              <p>30 готовых решений</p>
            </div>
            <div>
              <h3>Dashboard</h3>
              <p>с показателями вашего бизнеса</p>
            </div>
            <div>
              <h3>Skype Аудит</h3>
              <p>отдела продаж и CRM системы</p>
            </div>
            <div>
              <h3>35 дней</h3>
              <p>использования CRM</p>
            </div>
          </div>
          <div className={styles["content__services__mobile-text"]}>
            <div>
              <div className={styles.gradient}></div>
              <h3>skype аудит</h3>
            </div>
            <div>
              <div className={styles.gradient}></div>
              <h3>30 виджетов</h3>
            </div>
            <div>
              <div className={styles.gradient}></div>
              <h3>dashboard</h3>
            </div>
            <div>
              <div className={styles.gradient}></div>
              <h3>месяц AMOCRM</h3>
            </div>
          </div>
          <button className={styles.content__services__button}>Получить консультацию</button>
        </div>
      </div>
    </main>
  );
}

export default Content;
