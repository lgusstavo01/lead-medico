import styles from "./Form.module.css";

export function Form() {
  return (
    <div className={styles.box}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>O que está esperando para investir no marketing Digital ?</h2>
          <p>
            Com o método MONKEY seu negócio vai ser reconhecido no ambiente
            virtual e você vai cobrar o valor correto por suas consultas!
          </p>
        </div>
        <div className={styles.formContainer}>
          <h2>DECIDIR TER RESULTADO, LEVA MENOS DE UM MINUTO.</h2>
          <form>
            <input
              type="text"
              placeholder="Digite seu nome"
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Digite seu celular com DDD"
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Digite seu melhor E-mail"
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Qual o segmento da sua empresa"
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Qual o seu cargo"
              className={styles.input}
            />
            <select className={styles.select}>
              <option value="">
                Qual faturamento médio mensal da sua empresa?
              </option>
              <option value="Até 20 mil reais">Até 20 mil reais</option>
              <option value="De 20 mil a 50 mil reais">
                De 20 mil a 50 mil reais
              </option>
              <option value="De 50 mil a 100 mil reais">
                De 50 mil a 100 mil reais
              </option>
              <option value="Mais de 100 mil reais">
                Mais de 100 mil reais
              </option>
            </select>
            <button type="submit" className={styles.button}>
              RECEBER MAIS INFORMAÇÕES
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
