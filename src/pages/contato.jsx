import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato - HorrorHub</title>
        <meta
          name="description"
          content="Entre em contato conosco pelo formulário abaixo"
        />
        <meta name="keywords" content="horrorhub, contato" />
      </Head>
      <StyledContato>
        <h2>Fale Conosco</h2>

        <Container>
          <form action="" method="post">
            <div>
              <label htmlFor="nome">Nome:</label>
              <input type="text" name="nome" id="nome" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea
                maxLength={500}
                type="email"
                name="mensagem"
                id="mensagem"
                cols={30}
                rows={8}
              ></textarea>
            </div>

            <div>
              <button type="submit">Enviar mensagem</button>
            </div>
          </form>
        </Container>
      </StyledContato>
    </>
  );
}

const StyledContato = styled.section`
  h2::before {
    content: "💌 ";
  }
  form {
    margin: 0 auto;
    width: 50%;
    height: 50%;
    background-color: #9e9d9d62;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    padding: 20px;
  }

  form div {
    margin: 2rem;
  }

  label {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: none;
    background-color: #f7f7f7;
    font-size: 1rem;
  }

  button {
    float: center;
    background-color: var(--cor-primaria-fundo);
    color: #f7f7f7;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.2rem;
  }

  button:hover {
    background-color: #45a049;
  }
`;
