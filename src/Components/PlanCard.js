import React from 'react'
import styles from "../Styles/Conexiones.module.scss";

const PlanCard = ({ title, id }) => {
    return (
        <div className={styles.card}>
            <div className={styles.card_cuadro} id={`plan_${id}`}>
                <div className={styles.card_subcuadro} >
                    <span id={`plan_text__${id}`}>30</span>
                </div>
            </div>
            <div className={styles.card_text}>
                <h1>{title}</h1>
                <span><i className="fa-solid fa-phone"></i>15</span>
                <span><i className="fa-solid fa-message"></i>15</span>
            </div>
        </div>
    )
}

export default PlanCard