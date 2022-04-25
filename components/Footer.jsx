import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.contentFooter}>
                <div>
                    <h4>CONTACT US</h4>
                    <ul>
                        <li>contact@hivebookings</li>
                        <li>Australia - QLD</li>
                    </ul>
                </div>
                <div>
                    <h4>INFORMATION</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Work With Us</li>
                        <li>Best Moments</li>
                        <li>Videos</li>
                        <li>Presskit</li>
                    </ul>
                </div>
                <div>
                    <h4>NEWSLATTER</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                    <input type="email" placeholder="E-mail Address" />
                    <button className={styles.subscribeButton} type="button">SUBSCRIBE</button>
                </div>
            </div>
        </footer>
    )
}