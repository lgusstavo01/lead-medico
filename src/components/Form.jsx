import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./Form.module.css";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const Modal = ({ message, onClose }) => {
  const handleClickOutside = (e) => {
    if (e.target.className === styles.modal) {
      onClose();
      // window.location.reload();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleClickOutside}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <span className={styles.close} onClick={onClose}>
            &times;
          </span>
          <img src="./mika2.png" alt="" />
          <div className={styles.textModal}>
            <p>
              Olá, eu sou a Mika! <br /> Passando para informar que já recebemos
              os seus dados!
            </p>
            <span>{message}</span>
            <div className={styles.links}>
              <a
                href="https://wa.me/5571993422333?text=Olá%2C%20enviei%20os%20meus%20dados%20através%20do%20formulário%20e%20vim%20pelo%20site%20de%20captura%21"
                target="_blank"
              >
                Entre em contato!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function Form() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    console.log("Updated showModal:", showModal);
  }, [showModal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    const currentHour = new Date().getHours();
    console.log("Current Hour:", currentHour);

    if (currentHour >= 9 && currentHour <= 17) {
      setModalMessage(
        <>
          Caso deseje entrar em contato com nosso time comercial <br /> clique
          no botão abaixo
        </>
      );
    } else {
      setModalMessage("Modal para horário fora de 9AM e 17PM");
    }

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.containerGlobal}>
      <section id="form" className={styles.container}>
        <motion.section
          id="form"
          className={styles.container}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className={styles.box}>
            <div>
              <div className={styles.textArea}>
                <h2>
                  Eleve seu negócio ao próximo nível com uma
                   assessoria completa de <span>Marketing Digital</span>!
                </h2>
              </div>
              <div className={styles.cardText}>
                <div>
                  <h3>Primeiro passo</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio ad at, nisi ducimus officia laudantium nulla, commodi
                    quae rerum, autem itaque recusandae cum repellendus. Dolor
                    voluptates quas maxime corrupti quam.
                  </p>
                </div>
                <div>
                  <h3>Segundo passo</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Libero dolore ullam deleniti sapiente quisquam ad autem,
                    neque, magnam accusantium eum possimus animi incidunt minus
                    voluptas eos ab explicabo itaque. Reiciendis!
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.formContainer}>
              <h1>Decidir ter resultado, leva menos de um minuto.</h1>
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite seu nome" required />
                <input
                  type="text"
                  placeholder="Digite seu celular com DDD"
                  required
                />
                <input
                  type="email"
                  placeholder="Digite seu melhor E-mail"
                  required
                />
                <input
                  type="text"
                  placeholder="Qual o segmento da sua empresa"
                  required
                />
                <input type="text" placeholder="Qual o seu cargo" required />
                <select required>
                  <option value="">
                    Qual faturamento médio mensal da sua empresa?
                  </option>
                  <option>Até 20 mil reais</option>
                  <option>De 20 mil a 50 mil reais</option>
                  <option>De 50 mil a 100 mil reais</option>
                  <option>Mais de 100 mil reais</option>
                </select>
                <button type="submit">RECEBER MAIS INFORMAÇÕES</button>
              </form>
            </div>
          </div>
        </motion.section>
      </section>

      {showModal && <Modal message={modalMessage} onClose={closeModal} />}
    </div>
  );
}
