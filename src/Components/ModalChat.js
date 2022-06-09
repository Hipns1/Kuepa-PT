import React from 'react';
import styles from "../Styles/ModalCustom.module.scss";

const ModalChat = ({ close }) => {

    const handleClose = () => {
        close(false);
    };

    return (
        <div className={styles.modal_container}>
            <div className={styles.modal_background}>
                <div className={styles.modal_content}>
                    <div className={styles.modal_header}>
                        hola
                    </div>

                    <div className={styles.modal_body}>
                        hola
                    </div>
                    <div className={styles.modal_footer}>
                        <button onClick={handleClose}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalChat