import { Link } from "react-router-dom";
import "./style.css";
export function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/mercado">Lista de compras</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
