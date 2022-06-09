import React, { useEffect, useState } from 'react';
import styles from "../Styles/ChatBar.module.scss";
import { getData } from '../utils/getData';
import whatsappImg from "../Styles/Images/whatsapp.png";

const ChatsBar = () => {

    const url = "https://api.opendota.com/api/proPlayers"
    const [chat, setChat] = useState([]);

    const handleData = async () => {
        const data = await getData(url);
        const newData = data.slice(0, 10);
        setChat(newData);
    }

    useEffect(() => {
        handleData();
    }, []);

    return (
        <div className={styles.chat_container}>
            <div className={styles.chat}>
                <div className={styles.chat_header}>
                    <div></div>
                </div>
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
    )
}

export default ChatsBar