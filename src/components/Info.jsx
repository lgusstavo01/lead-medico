import styles from "./Info.module.css";

export function Info() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>SOMOS LÍDERES NO MERCADO</h2>
        </div>
        <div>
          <ul className={styles.dados}>
            <li>
              <p>MAIS DE</p>
              <h3>10.000</h3>
              <span>Lojas criadas para os nossos clientes</span>
            </li>
            <li>
              <p>MAIS DE</p>
              <h3>4 anos</h3>
              <span>De experiências no mercado</span>
            </li>
            <li>
              <p>MAIS DE</p>
              <div className={styles.value}>
                <span>R$</span>
                <h3>1MM</h3>
              </div>
              <span>De faturamento gerado com nossas lojas</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
