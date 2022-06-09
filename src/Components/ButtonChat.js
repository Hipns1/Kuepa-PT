import React, { useEffect, useState } from 'react';
import styles from "../Styles/ChatBar.module.scss";
import ModalChat from './ModalChat';
import { getData } from '../utils/getData';

const ButtonChat = () => {

    const [modal, setModal] = useState(false);

    const url = "https://api.opendota.com/api/proPlayers"
    const [chat, setChat] = useState([]);

    const handleData = async () => {
        const data = await getData(url);
        const newData = data.slice(0, 40);
        setChat(newData);
    }

    const handleModal = () => {
        setModal(true);
    }

    useEffect(() => {
        handleData();
    }, []);



    return (
        <div className={styles.btn_chat}>
            <button onClick={() => handleModal()}>
                <i className="fa-regular fa-comment"></i>
            </button>

            {modal ? <ModalChat close={setModal} chat={chat}/> : null}
        </div>
    )
}

export default ButtonChat