import React, { useEffect, useState } from 'react'
import styles from "../Styles/Filter.module.scss";

const Filter = () => {

    const [date, setDate] = useState('');

    //obtener fecha
    const getDate = () => {
        const todayDate = new Date().toISOString().slice(0, 10);
        setDate(todayDate);
    }

    useEffect(() => {
        getDate();
    }, [])

    return (
        <div className={styles.filter_container}>
            <input
                type="date"
                placeholder="Search"
                defaultValue={date}
            />
        </div>
    )
}

export default Filter