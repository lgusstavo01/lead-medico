import styles from "./Testimonials.module.css";

export function Testimmonials() {
  return (
    <div className={styles.box}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>Veja alguns depoimentos de nossos clientes!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            unde quidem dolorum quos eaque quas distinctio? Inventore nihil
            aspernatur culpa iure asperiores at. Inventore maiores saepe dolore
            sit tempora alias.
          </p>
        </div>
        <div>
          <div className={styles.video}>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/H3wtItkfwQ4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/H3wtItkfwQ4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <button>QUERO INVESTIR NO DIGITAL</button>
        </div>
      </div>
    </div>
  );
}
