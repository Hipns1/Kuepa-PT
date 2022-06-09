import React, { useEffect, useState } from 'react';
import styles from "../Styles/ChatBar.module.scss";
import { getData } from '../utils/getData';
import whatsappImg from "../Styles/Images/whatsapp.png";
import { motion } from "framer-motion";

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
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className={styles.chat}>
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
            </motion.div>
        </div>
    )
}

export default ChatsBar