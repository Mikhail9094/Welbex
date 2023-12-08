import styles from "./footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__info}>
        <div className={styles.footer__info__nav}>
          <nav className={styles.footer__info__nav__company}>
            <span className={styles["footer-headings"]}>О КОМПАНИИ</span>
            <div>
              <ul>
                <li>
                  <a href="#">Партнёрская программа</a>
                </li>
                <li>
                  <a href="#">Вакансии</a>
                </li>
              </ul>
            </div>
          </nav>
          <nav className={styles.footer__info__nav__menu}>
            <span className={styles["footer-headings"]}>МЕНЮ</span>
            <div className={styles.footer__info__nav__menu__links}>
              <div>
                <ul>
                  <li>
                    <a href="#">Расчёт стоимости</a>
                  </li>
                  <li>
                    <a href="#">Услуги</a>
                  </li>
                  <li>
                    <a href="#">Виджеты</a>
                  </li>
                  <li>
                    <a href="#">Интеграции</a>
                  </li>
                  <li>
                    <a href="#">Наши клиенты</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="#">Кейсы</a>
                  </li>
                  <li>
                    <a href="#" className={styles["change-text-a"]}>
                      Благодарственные письма
                    </a>
                  </li>
                  <li>
                    <a href="#">Сертификаты</a>
                  </li>
                  <li>
                    <a href="#">Блог на Youtube</a>
                  </li>
                  <li>
                    <a href="#">Вопрос / Ответ</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className={styles.footer__info__contacts}>
          <span className={styles["footer-headings"]}>КОНТАКТЫ</span>
          <address className={styles.address}>
            <span className={styles["address__tel"]}>+7 555 555-55-55</span>
            <span className={styles["address__socialNetworks"]}>
              <a href="#">
                <img src="/img/icons_social_networks/telegram.svg" alt="telegram" />
              </a>
              <a href="#">
                <img src="/img/icons_social_networks/viber.svg" alt="viber" />
              </a>
              <a href="#">
                <img src="/img/icons_social_networks/whatsapp.svg" alt="whatsapp" />
              </a>
            </span>
            <span>Москва, Путевой проезд 3с1, к 902</span>
          </address>
        </div>
      </div>
      <div className={styles.footer__confidentiality}>
        <p>©WELBEX 2022. Все права защищены.</p>
        <a href="#">Политика конфиденциальности</a>
      </div>
    </div>
  );
}

export default Footer;
