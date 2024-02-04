import Link from "next/link";
import styled from "styled-components";

export default function ListaPosts({ posts }) {
  if (posts.length === 0) return <h3>Ainda não há posts</h3>;

  // Get unique categories from the posts
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  return (
    <StyledListaPosts>
      {categories.map((category) => (
        <div key={category}>
          
          <div className="category-posts">
            {posts
              .filter((post) => post.category === category)
              .map((post) => (
                <article key={post.id}>
                  <Link href={`/posts/${post.id}`}>
                    <img src={post.imagem} alt="" />
                    <h3>{post.titulo}</h3>
                    <p>{post.subtitulo}</p>
                  </Link>
                </article>
              ))}
          </div>
        </div>
      ))}
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
    & h3{
      font-size: 1.5rem;
    }

    & a {
      text-decoration: none;
      color: black;

      &:hover,
      &:focus {
        color: #6666ff;
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
      width: 25%;
    }
  }

  .category-posts {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

  }
`;
