import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre - PetShop</title>
        <meta
          name="description"
          content="Missão, visão e valores do nosso PetShop"
        />
        <meta name="keywords" content="petshop, missão, visão, valores" />
      </Head>
      <StyledSobre>
        <h2>Sobre nosso PetShop</h2>

        <Container>
          <h3>Missão</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            totam veritatis facilis asperiores placeat. Quos tempore
            exercitationem soluta recusandae eum.
          </p>

          <h3>Visão</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            aliquam praesentium aliquid soluta! Vel quasi earum debitis ullam,
            aut maxime ratione soluta tenetur. Harum repellat dolor, inventore
            cumque ipsam totam, fugiat ipsum delectus nulla quas fugit quam
            reiciendis perspiciatis quaerat?
          </p>

          <h3>Valores</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            est ducimus libero consequuntur nulla odit.
          </p>
        </Container>
      </StyledSobre>
    </>
  );
}

const StyledSobre = styled.section`
  h2::before {
    content: "💡 ";
  }
`;
