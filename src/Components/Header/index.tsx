import { useState } from "react";
import styles from "./header.module.scss";

function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <div className={styles.header__logo__img}>
          <img src="/img/logo_welbex/part1.svg" alt="logo1" />
          <img src="/img/logo_welbex/part2.svg" alt="logo2" />
        </div>
        <span className={styles.header__logo__info}>
          <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
        </span>
      </div>
      <nav className={styles.header__content}>
        <input id={styles["menu-toggle"]} type="checkbox" />
        <label className={styles["menu-button-container"]} htmlFor={styles["menu-toggle"]}>
          <div className={styles["menu-button"]}></div>
        </label>
        <ul className={styles.menu}>
          <li>
            <a href="#" className={styles.links}>
              Услуги
            </a>
          </li>
          <li>
            <a href="#" className={styles.links}>
              Виджеты
            </a>
          </li>
          <li>
            <a href="#" className={styles.links}>
              Интеграции
            </a>
          </li>
          <li>
            <a href="#" className={styles.links}>
              Кейсы
            </a>
          </li>
          <li>
            <a href="#" className={styles.links}>
              Сертификаты
            </a>
          </li>
        </ul>

        <address className={styles.address}>
          <span className={styles.address__tel}>+7 555 555-55-55</span>
          <div className={styles.address__socialNetworks}>
            <a href="#">
              <img src="/img/icons_social_networks/telegram.svg" alt="telegram" />
            </a>
            <a href="#">
              <img src="/img/icons_social_networks/viber.svg" alt="viber" />
            </a>
            <a href="#">
              <img src="/img/icons_social_networks/whatsapp.svg" alt="whatsapp" />
            </a>
          </div>
        </address>
      </nav>
    </header>
  );
}

export default Header;
