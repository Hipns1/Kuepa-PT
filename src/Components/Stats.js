import React from 'react';
import styles from '../Styles/Stats.module.scss';
import ProgressBar from 'react-customizable-progressbar';

const Stats = () => {

    const progress = 50;

    return (
        <div className={styles.stat_container}>
            <section className={styles.stat_title}>
                <h1>Hola, Jorge</h1>
            </section>
            <section className={styles.stat_content}>

            </section>
        </div>
    )
}

export default Stats