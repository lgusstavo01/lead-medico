import styles from './Hero.module.css'

import { IoIosArrowRoundForward } from "react-icons/io";

export function Hero() {
  return (
    <div className={styles.box}>
    <section className={styles.wrapper}>
      <div className={styles.title}>
        <div className={styles.cta}>
          <img src="./logo-xmonkey.png" alt="logo da xm" />
          <p className={styles.p1}>Conquiste a sua</p>
          <h2>AUTORIDADE MÉDICA</h2>
          <p className={styles.p2}>
            no digital e receba o valor que realmente deseja para suas consultas.
          </p>
        </div>
        <div className={styles.list}>
          <ul>
            <li><div className={styles.icon}><IoIosArrowRoundForward size={15}/></div><p>Criativos ilimitados</p></li>
            <li><div className={styles.icon}><IoIosArrowRoundForward size={15}/></div><p>Reuniões para análise de desempenhos</p></li>
            <li><div className={styles.icon}><IoIosArrowRoundForward size={15}/></div><p>Desenvovlimento de uma Landing Page</p></li>
            <li><div className={styles.icon}><IoIosArrowRoundForward size={15}/></div><p>Suporte 24/7</p></li>
          </ul>
        </div>
      </div>
      <div className={styles.video}>
      <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/H3wtItkfwQ4" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        <button>QUERO INVESTIR NO DIGITAL</button>
      </div>
    </section>
    </div>
  );
}
