import React from 'react'
import home from '../../assets/assets/icones/home.png'
import mais1 from '../../assets/assets/icones/mais1.png'
import mais from '../../assets/assets/icones/mais.png'
import novas from '../../assets/assets/icones/novas.png'
import surpreenda from '../../assets/assets/icones/surpreenda.png'
import styles from './Menu.module.scss';


export default function Menu() {
    return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img src={home} alt="" />
                <a href="/">Início</a>
            </li>
            <li className={styles.menu__item}>
                <img src={mais1} alt="" />
                <a href="/">Mais curtidas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={mais} alt="" />
                <a href="/">Mais vistas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={novas} alt="" />
                <a href="/">Novas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={surpreenda} alt="" />
                <a href="/">Surpreenda-me</a>
            </li>
        </ul> 
    </nav>
    )
}