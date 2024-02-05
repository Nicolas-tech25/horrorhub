import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
    <>
      <Head>
        <title>HorrorHub - Home</title>
        <meta name="description" content="Conteúdos de filmes recentes" />
        <meta name="keywords" content="2023 e 2024" />
      </Head>
      <StyledHome>
        <h2>Filmes recentes - Trailers</h2>

        <Container>
          <StyledSlider>
            <Slider {...sliderSettings}>
              <StyledIframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/smTK_AeAPHs?si=GCw1XC8apDVUbnc6&amp;controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></StyledIframe>
              <StyledIframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/YrTnV6gNzno?si=5AfqIdNt33XQB05W&amp;controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></StyledIframe>
              <StyledIframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/FNZe6nyKbqk?si=gZF5xfAasnN0Bdz9&amp;controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></StyledIframe>
            </Slider>
          </StyledSlider>
          <br />
          <h3>Icebergs</h3>
          <StyledIcebergImage src="/images/Icebers.png" alt="Icebergs" />
          <p>
            1º Assim como icebergs temos uma camada no horror que conhecemos,
            podemos dizer que é até meio fraca, mas tem todo o resto que abriga
            o submundo do terror e é assim que classificamos os filmes.
          </p>
          <p>Aqui classificamos por: </p>
          <ol>
            <li>Terror para cagões</li>
            <li>Terror para ficar desconfortável</li>
            <li>Chuva de sangue</li>
            <li>Mocumentary</li>
          </ol>
          <h3>Qual o significado para estas categorias??</h3>
          <p>
            1.O primeiro serve para aqueles que eventualmente assistem ou são as
            primeiras immpressões sobre o assunto.
          </p>
          <p>
            2.Já o segundo são aqueles com conteúdos mais profundos/pesados, que
            transmitem sensações que te deixam pensativos ou levam pra fora da
            caixa.
          </p>
          <p>
            3.O terceiro serve para o tipo de pessoa que não tem filtro e adora
            matança... O nome se adequa bem.
          </p>
          <p>
            4.Por fim o último que simula a realidade, por muitos consideirado o
            terror mais aterrorizante, caso feito bem...
          </p>
        </Container>
      </StyledHome>
    </>
  );
}
const StyledIframe = styled.iframe`
  width: 100%; /*  largura para os iframes */
  height: 400px; /* altura para os iframes */
`;

const StyledHome = styled.section`
  h2::before {
    content: "🎥 ";
  }
  article {
    padding: 1rem;
  }
`;

const StyledSlider = styled.div`
  .slick-dots {
    bottom: -30px;
  }

  .slick-prev,
  .slick-next {
    font-size: 20px;
    color: #fff;
    display: none;
  }

  img {
    width: 100%;
    border-radius: 8px;
  }

  @media screen and (min-width: 400px) {
    .slick-prev,
    .slick-next {
      display: block;
    }
  }
`;
const StyledIcebergImage = styled.img`
  width: 50%;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
`;
