import { useState } from "react"
import Image from 'next/image'

import styles from '../styles/IndexPage.module.css'
import FullMenu from "../components/FullMenu"

export default function IndexPage() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.menu}
          onClick={() => setMenuIsVisible(true)}>
          <span>MENU</span>
          <Image src="/img/bee.png" alt="Bee" height={63} width={77} />
        </div>
      </main>

      <FullMenu isVisible={menuIsVisible} setIsVisible={setMenuIsVisible} />
    </div>
  )
}
