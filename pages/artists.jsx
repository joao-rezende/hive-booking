import { motion } from "framer-motion";
import Image from 'next/image'

import styles from '../styles/Artists.module.css'
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const container = {
  hidden: {  },
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Artists() {
  return (
    <>
      <main className={styles.main}>
        <Menu />
        <div className={styles.container}>
          <motion.ul
            className={styles.artists}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {["loopbass", "psychotria", "merlin", "progressive-outrun", "random"].map((index) => (
              <motion.li key={index} className="item" variants={item}>
                <Image src={`/img/${index}.png`} width={430} height={405} />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </main>

      <Footer />
    </>
  );
}
