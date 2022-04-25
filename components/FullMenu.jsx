import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"

import styles from '../styles/FullMenu.module.css'

export default function FullMenu({ isVisible, setIsVisible }) {
    return (
        <motion.div className={styles.container}
            style={{ display: isVisible ? "block" : "none" }}
            transition={{ ease: "easeOut", duration: 0.6 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : "100%"
            }}>
            <div className={styles.buttons}>
                <button type="button"
                    className={styles.closeBtn}
                    onClick={() => setIsVisible(false)}>&times;</button>
            </div>
            <ul className={styles.menuList}>
                <li>
                    <Image src="/img/icon-list.png"
                        height={25}
                        width={25} />
                    <Link href="/home">home</Link>
                </li>
                <li>
                    <Image src="/img/icon-list.png"
                        height={25}
                        width={25} />
                    <Link href="/about">about us</Link>
                </li>
                <li>
                    <Image src="/img/icon-list.png"
                        height={25}
                        width={25} />
                    <Link href="/artists">artists</Link>
                </li>
                <li>
                    <Image src="/img/icon-list.png"
                        height={25}
                        width={25} />
                    <Link href="#">bookings</Link>
                </li>
                <li>
                    <Image src="/img/icon-list.png"
                        height={25}
                        width={25} />
                    <Link href="#">agenda</Link>
                </li>
                <li>
                    <Image src="/img/icon-list.png"
                        height={25}
                        width={25} />
                    <Link href="#">contact</Link>
                </li>
            </ul>

            <div className={styles.footer}>
                <div></div>
                <div>
                    <Image src="/img/hive-bookings-text.png"
                        height={30}
                        width={216} />
                </div>
                <div>
                    <Image src="/img/bee.png"
                        alt="Bee"
                        height={35}
                        width={43} />
                </div>
            </div>
        </motion.div>
    )
}