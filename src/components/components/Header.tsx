import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

function Header() {
    return (
        <div className={styles.header}>
            <Link to="/" className={styles.logo}>당굼이(당신이 궁금한 이름)</Link>
        </div>
    )
}

export default Header;