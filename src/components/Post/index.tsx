import { PostProp } from "../PostList";

export function Post({ title, content }: PostProp) {
  return (
    <>
      <h3>{title}</h3>
      <p>{content}</p>
      <button>Leia mais</button>
    </>
  );
}
