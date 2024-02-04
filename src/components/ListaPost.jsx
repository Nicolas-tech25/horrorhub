import Link from "next/link";
import styled from "styled-components";
export default function ListaPosts({ posts }) {
  /* Se não houver nada aparece o primeiro if, caso tenha algum post ele anulara o 1º if e executara o posts */
  if (posts.length === 0) return <h3>Ainda não há posts</h3>;
  return (
    <StyledListaPosts>
      {posts.map((post) => {
        return (
          <article key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <img src={post.imagem} alt="" srcset="" />
              <h3>{post.titulo}</h3>
              <p>{post.subtitulo}</p>
            </Link>
          </article>
        );
      })}
    </StyledListaPosts>
  );
}

const StyledListaPosts = styled.div`
  article {
    background-color: #f7f7f7;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: var(--sombra-box);
    border-radius: var(--borda-arredondada);
    transition: transform 200ms;

    & a {
      text-decoration: none;
      color: black;

      &:hover,
      &:focus {
        color: #0066ff;
      }
    }
  }

  article:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  img {
    width: 100%;
  }

  @media screen and (min-width: 500px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    article {
      width: 20%;
    }
  }
`;
