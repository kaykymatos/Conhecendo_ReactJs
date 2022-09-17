import { Link } from "react-router-dom";
import styles from "./css/HeaderPage.module.css";

function HeaderPage() {
  return (
    <header>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderPage;
