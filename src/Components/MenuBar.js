import React from 'react';
import userImg from "../Styles/Images/user.jpg";
import logoImg from "../Styles/Images/logoImg.png";
import styles from "../Styles/MenuBar.module.scss";

const MenuBar = () => {
    return (
        <div className={styles.menu_container}>

            <section className={styles.menu_top}>
                <section className={styles.menu_logo}>
                    <img src={logoImg} alt="logo" />
                </section>

                <section className={styles.menu_options}>
                    <div className={styles.menu_option}>
                        <input type="radio" name='radiomenu' id="radio" />
                        <label htmlFor="radio" >
                            <i className="fa-solid fa-house"></i>
                        </label>
                    </div>
                    <div className={styles.menu_option}>
                        <input type="radio" name='radiomenu' id='radio2' defaultChecked />
                        <label htmlFor="radio2">
                            <i className="fa-solid fa-list-check"></i>
                        </label>
                    </div>
                    <div className={styles.menu_option}>
                        <input type="radio" name='radiomenu' id='radio3' />
                        <label htmlFor="radio3">
                            <i className="fa-solid fa-bars"></i>
                        </label>
                    </div>
                </section>
            </section>

            <section className={styles.menu_user}>
                <i className="fa-solid fa-chalkboard"></i>
                <img src={userImg} alt="user" />
            </section>
        </div>
    )
}

export default MenuBar