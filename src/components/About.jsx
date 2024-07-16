import styles from "./About.module.css";

export function About() {
  return (
    <div className={styles.box}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <p>Somos a</p>
          <h2>Xmonkey</h2>
          <div className={styles.paragrafo}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus quaerat alias veniam error aliquam praesentium sunt
              quod autem, harum enim pariatur minima architecto quis molestiae
              repellat totam nulla voluptatem excepturi.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              ea dicta nobis quidem. Doloribus similique culpa velit deserunt
              neque, sapiente, placeat enim aut fugiat nobis modi dignissimos.
              Laborum, molestiae accusantium.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              ea dicta nobis quidem. Doloribus similique culpa velit deserunt
              neque, sapiente, placeat enim aut fugiat nobis modi dignissimos.
              Laborum, molestiae accusantium.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              ea dicta nobis quidem. Doloribus similique culpa velit deserunt
              neque, sapiente, placeat enim aut fugiat nobis modi dignissimos.
              Laborum, molestiae accusantium.
            </p>
          </div>
        </div>
        <video src="./videoAbout.mp4" controls></video>
      </div>
    </div>
  );
}
