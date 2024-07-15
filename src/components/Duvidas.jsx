import styles from "./Duvidas.module.css";

export function Duvidas() {
  return (
    <div className={styles.box}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>
            DOUTOR(A), VOCÊ TEM ALGUM DESSES <span>3 DESAFIOS ATUALMENTE</span>:
          </h2>
        </div>
        <div className={styles.boxCards}>
          <div>
            <h2>1</h2>
            <p>
              Tem uma autoridade médica construída no mundo offline, mas no
              digital ainda não é encontrado, não passa credibilidade e não tem
              resultados para seu consultório ou clínica?
            </p>
          </div>
          <div>
            <h2>2</h2>
            <p>
              Já tem uma agência tradicional de marketing digital, mas os
              resultados são sempre superficiais e até mesmo ruim?
            </p>
          </div>
          <div>
            <h2>3</h2>
            <p>
              Até tem algum resultado, mas deseja realmente se posicionar como
              autoridade médica no digital, sendo a primeira opção de pacientes
              que realmente pagam o seu valor de consulta, procedimentos e
              cirurgias?
            </p>
          </div>
        </div>
        <div className={styles.cta}>
          <h3>
            Se a sua resposta foi sim para 1 ou mais desses desafios, nós
            podemos te ajudar nessa jornada!
          </h3>
          <button>
            <p>Conheça o método Monkey</p>
          </button>
        </div>
      </div>
    </div>
  );
}
