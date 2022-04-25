import { useState } from "react"
import styles from '../styles/Checkbox.module.css'

export default function Checkbox({ text, defaultValue }) {
    const [isCheck, setIsCheck] = useState(defaultValue ?? false);

    return (
        <div className={styles.container + " " + (isCheck ? styles.active : "")} onClick={() => setIsCheck(!isCheck)}>
            {text}
        </div>
    );
}