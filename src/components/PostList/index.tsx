import { Container } from "../Container";
import { Post } from "../Post";

export interface PostProp {
  content: string;
  title: string;
}

const posts: PostProp[] = [
  { content: "conteudo 1", title: "titulo 1" },
  { content: "conteudo 2", title: "titulo 2" },
  { content: "conteudo 3", title: "titulo 3" },
];

export function PostList() {
  return (
    <>
      <Container>
        {posts.map((post) => (
          <Post key={post.title} title={post.title} content={post.content} />
        ))}
      </Container>
    </>
  );
}
