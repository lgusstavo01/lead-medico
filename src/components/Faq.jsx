import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import styles from "./Faq.module.css";

export function Faq() {
  return (
    <section className={styles.box}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>Perguntas Frequentes</h2>
        </div>
        <div className={styles.container}>
          <div>
            <img src="./fluxo.png" alt="Fluxo" />
          </div>
          <div>
            <Accordion className={styles.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Accordion 1
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion className={styles.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Accordion 2
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion className={styles.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                Accordion 3
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion className={styles.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel4-content"
                id="panel4-header"
              >
                Accordion 4
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion className={styles.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel5-content"
                id="panel5-header"
              >
                Accordion 5
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
