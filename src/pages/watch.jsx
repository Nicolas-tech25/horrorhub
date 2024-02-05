import Head from "next/head";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPost.jsx";
import { useState } from "react";
import serverApi from "./api/server";
import Container from "@/components/ui/Container";

export async function getStaticProps() {
  console.log("Código de servidor (não aprece no Cliente)...");
  try {
    const resposta = await fetch(`${serverApi}/posts.json`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    const arrayDePosts = Object.keys(dados).map((post) => {
      return {
        ...dados[post],
        id: post,
      };
    });
    console.log(arrayDePosts);

    const categorias = arrayDePosts.map((post) => post.categoria);

    const categoriasUnicas = [...new Set(categorias)];
    console.log(categoriasUnicas);

    return {
      props: {
        posts: arrayDePosts,
        categorias: categoriasUnicas,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return {
      notFound: true,
    };
  }
}
export default function Watch({ posts, categorias }) {
  const [listaDePosts, setListaDePosts] = useState(posts);

  // Filter posts by category
  const postsPorCategoria = (categoria) => {
    return listaDePosts.filter((post) => post.categoria === categoria);
  };
  return (
    <>
      <Head>
        <title>Watch - HorrorHub</title>
        <meta
          name="description"
          content="filmes e suas curiosidades"
        />
        <meta name="keywords" content="Movies,curiosidades, resenha crítica, nota" />
      </Head>
      <StyledWatch>
        <h2>Conheça o mundo do horror com algumas curiosidades:</h2>

        <Container>
          {categorias.map((categoria) => (
            <article key={categoria}>
              <h1>{categoria}:</h1>
              <ListaPosts posts={postsPorCategoria(categoria)} />
            </article>
          ))}
        </Container>
      </StyledWatch>
    </>
  );
}

const StyledWatch = styled.section`
  h2::before {
    content: "🎬 ";
  }

  h1 {
    font-size: 1.3rem;
    color: var(--cor-primaria-fundo);
  }

  @media screen and (min-width: 400px) {
    h1 {
      font-size: 1.5rem;
    }
    article{
      padding:10px;
    }
  }
`;