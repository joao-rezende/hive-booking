import { motion } from "framer-motion"

import Menu from "../components/Menu";
import Footer from "../components/Footer";
import styles from '../styles/About.module.css'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Menu />
        <div className={styles.container}>
          <motion.div className={styles.boxAbout}
            style={{ translateY: "-50%" }}
            transition={{ duration: 0.8 }}
            initial="close"
            animate="open"
            variants={
              {
                close: {
                  opacity: 0,
                  scale: 0
                },
                open: {
                  opacity: 1,
                  scale: 1
                }
              }
            }>
            <h1 className={styles.title}>ABOUT US</h1>
            <div className={styles.boxAboutContainer}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mauris erat, convallis eu euismod ut, imperdiet eu erat. Sed fringilla ut libero consectetur dapibus. Fusce tortor ligula, sollicitudin ac molestie vel, aliquam ut tortor. Duis malesuada nisl vel venenatis ullamcorper. Morbi ut libero at sapien egestas convallis eget id diam. Praesent mollis at nibh euismod tincidunt. In varius accumsan dolor, ac congue dui scelerisque et. Maecenas venenatis ex non elit rutrum commodo. Praesent accumsan cursus turpis, at suscipit mi bibendum efficitur. Phasellus nec quam neque. Cras pretium ultricies lobortis. Vestibulum imperdiet sodales viverra.
                Mauris in arcu magna. Phasellus aliquet tempor augue, eu accumsan nisl pellentesque quis. Integer in magna ut ante interdum interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent fringilla elit accumsan enim elementum, sit amet pellentesque sem varius. Maecenas eu nibh tortor. Duis sed felis scelerisque, posuere eros ac, tempor eros. Integer fringilla porttitor urna, et fermentum neque vehicula et. Donec fringilla purus at odio condimentum, vitae suscipit dui semper. Mauris auctor porttitor mattis. Nunc eu enim sagittis massa finibus sagittis ut nec tortor. Aenean congue, diam vitae venenatis ullamcorper, neque enim commodo dolor, nec accumsan lectus turpis quis lorem. Proin volutpat elit id tortor ornare, sit amet consequat nisl ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}