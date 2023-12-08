import styles from './balls.module.scss'

function Balls() {
  return (
    <>
      <img className={styles["purple-ball"]} src='/img/balls/purple_ball.svg' alt="purple ball" />
      <img className={styles["big-red-ball"]} src='/img/balls/red_ball_big.svg' alt="big red ball" />
      <img className={styles["small-red-ball"]} src='/img/balls/red_ball_small.svg' alt="small red ball" />
    </>
  );
}

export default Balls;
