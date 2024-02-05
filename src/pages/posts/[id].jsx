import Head from "next/head";
import styled from "styled-components";
import Container from "@/components/ui/Container";
import serverApi from "../api/server";

export async function getStaticProps({ params }) {
  const { id } = params;
  console.log(id);
  try {
    const resposta = await fetch(`${serverApi}/posts/${id}.json`);

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }
    const dados = await resposta.json();
    return {
      props: {
        post: dados,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
export default function Post({ post }) {
  const tituloPagina = `${post.titulo} - petShop`;
  return (
    <>
      <Head>
        <title>{tituloPagina}</title>
        <meta name="description" content="Descrição do post..." />
      </Head>

      <StyledPost>
        <h2>{post.titulo}</h2>
        <Container>
          <article>
            <img src={post.imagem} alt="" />
            <div>
              <h3>
                Diretor: <i>{post.diretor}</i>
              </h3>
              <p>
                <b>Resenha Crítica:</b> {post.resenha}
              </p>
              <p>
                <b>Curiosidade:</b> {post.curiosidade}
              </p>
              <p>
                <b>Nota para esta obra: </b>
                <i>{post.nota}/10</i>
              </p>
            </div>
          </article>
        </Container>
      </StyledPost>
    </>
  );
}

const StyledPost = styled.article`
  img {
    width: 30%;
  }
  i {
    color: var(--cor-primaria-fundo);
  }
  article {
    display: flex;
    gap: 10px;
  }
  @media screen and (max-width: 500px) {
    article {
      flex-direction: column;
    }
    img {
      width: 60%;
      margin: auto;
    }
  }
`;
