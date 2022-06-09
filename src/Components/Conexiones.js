import React, { useEffect, useState } from 'react';
import styles from "../Styles/Conexiones.module.scss";
import { getData } from '../utils/getData';

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

    console.log(conexiones);

    return (
        <div className={styles.conexiones_container}>
            <div className={styles.conexiones}>
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
            </div>

            <div className={styles.plan}>

            </div>
        </div>
    )
}

export default Conexiones