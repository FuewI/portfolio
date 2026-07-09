import { useApp } from "../../hooks/useApp";
import "./Footer.css";

const NAME = "Ivan Dimitrov";

function Footer() {
  const { t } = useApp();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        &copy; {year} {NAME}
      </p>
      <p className="footer-built-with">{t.footer.builtWith}</p>
    </footer>
  );
}

export default Footer;
