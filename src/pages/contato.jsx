import { useForm } from 'react-hook-form';
import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";

export default function Contato() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Lógica para lidar com os dados do formulário
    console.log(data);
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              {...register('name', { required: true })}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              {...register('email', { required: true })}
            />

            <label htmlFor="message">Mensagem:</label>
            <textarea
              id="message"
              {...register('message', { required: true })}
            ></textarea>

            <button type="submit">Enviar</button>
          </form>
        </Container>
      </StyledContato>
    </>
  );
}

const StyledContato = styled.section`
  h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: auto;
    padding: 20px;
    border-radius: 8px;
    background-color: #202020;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

    label {
      margin-top: 10px;
      font-size: 16px;
      color: #fff;
    }

    input,
    textarea {
      margin-bottom: 10px;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
    }

    textarea {
      resize: vertical;
      min-height: 100px;
    }

    button {
      padding: 12px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #0056b3;
    }
  }

  @media (min-width: 768px) {
    form {
      max-width: 600px;
    }
  }
`;
