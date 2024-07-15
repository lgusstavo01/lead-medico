import styles from "./Methody.module.css";

export function Methody() {
  return (
    <div className={styles.box}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>
            Conheça os 4 pilares do método
            <br />
            <span>MONKEY</span>
          </h2>
        </div>
        <div className={styles.cards}>
          <div>
            <h3>Atração Qualificada</h3>
            <p>
              Utilizamos técnicas avançadas de segmentação de mercado para
              identificar e atrair pacientes que estão buscando a sua
              especialidade médica , conseguimos maximizar o retorno sobre
              investimento e aumentar a taxa de interesse dos leads capturados.
            </p>
          </div>
          <div>
            <h3>Engajamento Personalizado</h3>
            <p>
              O Engajamento Personalizado é a chave para construir
              relacionamentos duradouros e significativos com seus leads.
              Desenvolvemos conteúdos e comunicações sob medida para cada etapa
              da jornada do cliente, garantindo que cada interação seja
              relevante e valiosa.
            </p>
          </div>
          <div>
            <h3>Conversão Metrificada</h3>
            <p>
              A Conversão Metrificada é o nosso método de transformar leads em
              clientes efetivos de maneira eficiente e mensurável. Monitoramos e
              analisamos cada passo do processo de conversão, utilizando
              métricas detalhadas para otimizar nossas estratégias em tempo
              real.
            </p>
          </div>
          <div>
            <h3>Faturamento Comprovado</h3>
            <p>
              O Faturamento Comprovado é o resultado do nosso trabalho
              meticuloso em cada etapa do funil de vendas. Ao garantir a atração
              de leads qualificados, engajamento contínuo e estratégias de
              conversão eficientes, entregamos resultados tangíveis em termos de
              receita.
            </p>
          </div>
        </div>
        <div className={styles.button}>
          <button>
            <p> Eu quero o método MONKEY</p>
          </button>
        </div>
      </div>
    </div>
  );
}
