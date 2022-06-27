import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from "./Main.module.css";

function Main() {
    return (
        <div>
            <Header />
            <section className={styles.main}>
                <div>About Name</div>
                <input />
                <Link to="">검색</Link>
            </section>
        </div>
    )
}

export default Main;