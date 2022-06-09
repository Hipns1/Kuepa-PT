import React, { useState } from 'react';
import styles from "../Styles/ChatBar.module.scss";
import ModalChat from './ModalChat';

const ButtonChat = () => {

    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(true);
    }

    return (
        <div className={styles.btn_chat}>
            <button onClick={() => handleModal()}>
                <i className="fa-regular fa-comment"></i>
            </button>

            {modal ? <ModalChat close={setModal} /> : null}
        </div>
    )
}

export default ButtonChat