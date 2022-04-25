import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Menu.module.css'
import ActiveLink from './ActiveLink';

export default function Menu() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.brand}>
                <Link href="/">
                    <Image src="/img/logo-menu.png" height={45} width={205} />
                </Link>
            </div>
            <ul className={styles.listNavbar} style={{ margin: 0, padding: 0 }}>
                <li>
                    <ActiveLink href="/home">Home</ActiveLink>
                </li>
                <li>
                    <ActiveLink href="/about">About Us</ActiveLink>
                </li>
                <li>
                    <ActiveLink href="#">Artists</ActiveLink>
                </li>
                <li>
                    <ActiveLink href="#">Booking</ActiveLink>
                </li>
                <li>
                    <ActiveLink href="#">Agenda</ActiveLink>
                </li>
                <li>
                    <ActiveLink href="#">Contact</ActiveLink>
                </li>
            </ul>
        </nav>
    )
}