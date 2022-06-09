import React from 'react'
import styles from '../Styles/Dashboard.module.scss';
import Conexiones from './Conexiones';
import Filter from './Filter';
import InputSearch from './InputSearch';
import Stats from './Stats';

const Dashboard = () => {
    return (
        <div className={styles.dash_container}>
            <section className={styles.dash_top}>
                <InputSearch />
                <Filter />
            </section>
            <Stats />
            <Conexiones />
        </div>
    )
}

export default Dashboard