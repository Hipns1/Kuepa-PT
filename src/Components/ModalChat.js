import React from 'react';
import styles from "../Styles/ModalCustom.module.scss";
import whatsappImg from "../Styles/Images/whatsapp.png";

const ModalChat = ({ close, chat }) => {

    const handleClose = () => {
        close(false);
    };

    return (
        <div className={styles.modal_container}>
            <div className={styles.modal_background}>
                <div className={styles.modal_content}>
                    <div className={styles.modal_header}>
                        <h1>CHATS</h1>
                        <button onClick={handleClose}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>

                    <div className={styles.modal_body}>
                        <div className={styles.chat_card__container}>
                            {
                                chat?.map((chat, index) => (
                                    <div key={index} className={styles.chat_card}>
                                        <h1>
                                            <img src={whatsappImg} />
                                            Whatsapp
                                        </h1>
                                        <h2>{chat.name}</h2>
                                        <h3>8 min ago</h3>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalChat