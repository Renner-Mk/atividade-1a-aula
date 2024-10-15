import { Link } from "react-router-dom";
import { PostList } from "../components/PostList";

export function About() {
  return (
    <>
      <h1>Sobre</h1>
      <PostList />
      <nav>
        <ul>
          <li>
            <Link to="/">Voltar a Home</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
