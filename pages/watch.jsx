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
export default function Watch({ posts }) {
  const [listaDePosts, setListaDePosts] = useState(posts);
  return (
    <>
      <Head>
        <title>CineWorld - Watch</title>
        <meta
          name="description"
          content="Site que fala de filmes e suas curiosidades"
        />
        <meta name="keywords" content="Movies,icebergs,curiosidades" />
      </Head>
      <StyledWatch>
        <h1>Conheça o mundo do horror com algumas curiosidades:</h1>

        <Container>
          <h3>Terror pra cagões:</h3>

          <ListaPosts posts={listaDePosts} />
          <h3>Terror pra ficar desconfortável:</h3>
          <h3>Chuva de sangue:</h3>
          <h3>Mocumentary:</h3>
        </Container>
      </StyledWatch>
    </>
  );
}

const StyledWatch = styled.section`
  h2::before {
    content: "🎬 ";
  }
`;