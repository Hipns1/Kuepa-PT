import React from 'react';
import styles from '../Styles/Stats.module.scss';
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import { motion } from "framer-motion";

const Stats = () => {

    const progress = 50;
    const props = {
        percent: progress,
        colorCircle: "#e3e3e3",
        size: 150,
        round: true,
        stroke: 5,
        linearGradient: ["#f17b97", "#fb908b"],
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className={styles.stat_container}>
            <section className={styles.stat_title}>
                <h1>Hola, Jorge</h1>
            </section>

            <section className={styles.stat_stat}>
                <section className={styles.stat_content}>
                    <CircularProgressBar {...props} />
                </section>
                <section className={styles.stat_lead}>
                    <div className={styles.stat_text}>
                        <h1>Leads obtenidos</h1>
                        <span>50/100</span>
                    </div>
                    <div className={styles.stat_text}>
                        <h1>Cola de llamados</h1>
                        <span>50/100</span>
                    </div>
                    <div className={styles.stat_text}>
                        <h1>Matriculas finalizadas</h1>
                        <span>10/20</span>
                    </div>
                </section>
            </section>

            <section className={styles.stat_meta__container}>
                <h1>Meta grupal</h1>
                <div className={styles.stat_meta}>
                    <h2>Leads obtenidos <span>200/400</span></h2>
                    <div className={styles.stat_bar}>
                        <div className={styles.stat_fill}></div>
                    </div>
                </div>
                <div className={styles.stat_meta}>
                    <h2>Matriculas realizadas <span>50/100</span></h2>
                    <div className={styles.stat_bar}>
                        <div className={styles.stat_fill}></div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default Stats