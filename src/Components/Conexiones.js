import React, { useEffect, useState } from 'react';
import styles from "../Styles/Conexiones.module.scss";
import { getData } from '../utils/getData';
import PlanCard from './PlanCard';

const Conexiones = () => {

    const url = "https://api.opendota.com/api/proPlayers"
    const [conexiones, setConexiones] = useState([]);

    const handleData = async () => {
        const data = await getData(url);
        const newData = data.slice(0, 5);
        setConexiones(newData);
    }

    useEffect(() => {
        handleData();
    }, []);

    return (
        <div className={styles.conexiones_container}>
            <section className={styles.conexiones}>
                <h1>Conexiones de agenda para hoy</h1>
                <table >
                    {
                        conexiones?.map(conexion => (
                            <tbody key={conexion.account_id}>
                                <tr>
                                    <td className={styles.table_name}>{conexion.name}</td>
                                    <td className={styles.table_llamada}>Llamar<br />
                                        <span>Descuento temporada</span>
                                    </td>
                                    <td className={styles.table_icons}>
                                        <i
                                            style={{ color: '#f89609' }}
                                            className="fa-solid fa-circle">
                                        </i>
                                        <i className="fa-solid fa-phone"></i>
                                        <i className="fa-solid fa-message"></i>
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </section>

            <section className={styles.plan}>
                <div className={styles.plan_title}>
                    <h1>Tuplan de hoy</h1>
                    <h2>Ir a la gestion de llamados</h2>
                </div>
                <div className={styles.plan_card__container}>
                    <PlanCard title={"Leads de primer contacto"} id={1} />
                    <PlanCard title={"Leads por confirmar cita"} id={2} />
                    <PlanCard title={"Leads de último contacto"} id={3} />
                </div>
            </section>
        </div>
    )
}

export default Conexiones