import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import styles from './css/FooterPage.module.css'

function FooterPage() {
  return (
    <footer>
      
      <ul className={styles.social_list}>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaGithub />
        </li>
        <li>
          <FaInstagramSquare />
        </li>
      </ul>
    </footer>
  );
}

export default FooterPage;
