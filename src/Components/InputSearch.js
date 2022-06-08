import React from 'react'
import styles from "../Styles/InputSearch.module.scss";

const InputSearch = () => {
    return (
        <div className={styles.search_container}>
            <div className={styles.search_search}>
                <div className={styles.search_complement}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <input type="text" placeholder="Search..." />
            </div>
            <i className="fa-solid fa-filter"></i>
        </div>
    )
}

export default InputSearch