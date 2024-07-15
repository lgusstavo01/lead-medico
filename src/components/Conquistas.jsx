import styles from "./Conquistas.module.css";

export function Conquistas() {
  return (
    <div className={styles.box}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>
            Com nossa <span>Assessoria de Marketing Médico e o Método Monkey</span>, você
            vai conquistar:
          </h2>
        </div>
        <div className={styles.list}>
          <ul>
            <li>Mais autoridade e credibilidade médica no meio digital.</li>
            <li>
              Mais pacientes particulares todos os dias pagando o valor de
              consulta que realmente deseja.
            </li>
            <li>
              Mais pacientes particulares todos os dias pagando o valor de
              consulta que realmente deseja.
            </li>
            <li>
              Mais pacientes particulares todos os dias pagando o valor de
              consulta que realmente deseja.
            </li>
            <li>Mais tempo para exercer a medicina de qualidade.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
