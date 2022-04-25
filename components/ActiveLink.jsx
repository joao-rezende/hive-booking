import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from '../styles/ActiveLink.module.css'

export default function ActiveLink({ children, href }) {
    const router = useRouter();

    return (
        <Link href={href}>
            <span className={router.asPath == href ? styles.active : ""}>
                {children}
            </span>
        </Link>
    );
}